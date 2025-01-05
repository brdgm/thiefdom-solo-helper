<template>
  <SideBar :navigationState="navigationState"/>

  <h1>
    {{t('turnBot.title')}}
  </h1>

  <template v-if="currentCard">
    <TownsfolkMovement :currentCard="currentCard" :movementRoll="navigationState.movementRoll"/>
    <RivalLocation :currentCard="currentCard" :locationRoll="navigationState.locationRoll" :playerColor="navigationState.playerColor"/>
  </template>

  <button class="btn btn-primary btn-lg mt-4 me-2" @click="next()">
    {{t('action.next')}}
  </button>

  <DebugInfo :navigationState="navigationState"/>

  <FooterButtons :backButtonRouteTo="backButtonRouteTo" endGameButtonType="abortGame"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import FooterButtons from '@/components/structure/FooterButtons.vue'
import { Turn, useStateStore } from '@/store/state'
import { useRoute } from 'vue-router'
import SideBar from '@/components/turn/SideBar.vue'
import NavigationState from '@/util/NavigationState'
import DebugInfo from '@/components/turn/DebugInfo.vue'
import Card from '@/services/Card'
import TownsfolkMovement from '@/components/turn/TownsfolkMovement.vue'
import RivalLocation from '@/components/turn/RivalLocation.vue'

export default defineComponent({
  name: 'TurnBot',
  components: {
    FooterButtons,
    TownsfolkMovement,
    RivalLocation,
    SideBar,
    DebugInfo
  },
  setup() {
    const { t } = useI18n()
    const route = useRoute()
    const state = useStateStore()

    const navigationState = new NavigationState(route, state)
    const { round, turn } = navigationState

    return { t, state, navigationState, round, turn }
  },
  computed: {
    backButtonRouteTo() : string {
      if (this.turn > 1) {
        return `/round/${this.round}/turn/${this.turn-1}/player`
      }
      return `/round/${this.round}/start`
    },
    currentCard() : Card|undefined {
      return this.navigationState.cardDeck.currentCard
    }
  },
  methods: {
    next() : void {
      const turn : Turn = {
        round: this.round,
        turn: this.turn,
        cardDeck: this.navigationState.cardDeck.toPersistence(),
        movementRoll: this.navigationState.movementRoll,
        locationRoll: this.navigationState.locationRoll
      }
      this.state.storeTurn(turn)
      if (this.turn == 6) {
        if (this.round == 6) {
          this.$router.push(`/endOfGame`)
        }
        else {
          this.$router.push(`/round/${this.round}/end`)
        }
      }
      else {
        this.$router.push(`/round/${this.round}/turn/${this.turn+1}/player`)
      }
    }
  }
})
</script>
