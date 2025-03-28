<template>
  <SideBar :navigationState="navigationState"/>

  <h1>
    {{t('turnPlayer.title')}}
  </h1>

  <p v-html="t('turnPlayer.takeTurn', {number:navigationState.planningMarker})" class="mt-4 mb-4"></p>

  <button class="btn btn-primary btn-lg mt-4" @click="next()">
    {{t('action.next')}}
  </button>

  <DebugInfo :navigationState="navigationState"/>

  <FooterButtons :backButtonRouteTo="backButtonRouteTo" endGameButtonType="abortGame"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import FooterButtons from '@/components/structure/FooterButtons.vue'
import { useRoute, useRouter } from 'vue-router'
import { Turn, useStateStore } from '@/store/state'
import SideBar from '@/components/turn/SideBar.vue'
import NavigationState from '@/util/NavigationState'
import DebugInfo from '@/components/turn/DebugInfo.vue'

export default defineComponent({
  name: 'TurnPlayer',
  components: {
    FooterButtons,
    SideBar,
    DebugInfo
  },
  setup() {
    const { t } = useI18n()
    const router = useRouter()
    const route = useRoute()
    const state = useStateStore()

    const navigationState = new NavigationState(route, state)
    const { round, turn } = navigationState

    return { t, router, state, navigationState, round, turn }
  },
  computed: {
    backButtonRouteTo() : string {
      if (this.turn > 1) {
        return `/round/${this.round}/turn/${this.turn-1}/bot`
      }
      return `/round/${this.round}/start`
    }
  },
  methods: {
    next() : void {
      const turn : Turn = {
        round: this.round,
        turn: this.turn,
        cardDeck: this.navigationState.cardDeck.toPersistence(),
        movementRoll: this.navigationState.movementRoll,
        locationRoll: this.navigationState.locationRoll,
      }
      this.state.storeTurn(turn)
      if (this.turn == 6) {
        if (this.round == 6) {
          this.router.push(`/endOfGameAmounts`)
        }
        else {
          this.router.push(`/round/${this.round}/end`)
        }
      }
      else {
        this.router.push(`/round/${this.round}/turn/${this.turn+1}/bot`)
      }
    }
  }
})
</script>
