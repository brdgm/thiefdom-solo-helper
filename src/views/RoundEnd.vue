<template>
  <SideBar :navigationState="navigationState"/>

  <h1>
    {{t('roundEnd.title')}}
  </h1>

  <ol>
    <li v-html="t('roundEnd.roundMarker')"></li>
    <li v-html="t('roundEnd.staminaMarker')"></li>
    <li v-html="t('roundEnd.alleySpace')"></li>
  </ol>

  <template v-if="isRound2Or4">
    <p v-html="t('roundEnd.round24.title')"></p>
    <ol>
      <li v-html="t('roundEnd.round24.bagTokens')"></li>
      <li v-html="t('roundEnd.round24.lootBoard')"></li>
      <li v-html="t('roundEnd.round24.smugglingMission')"></li>
      <li v-html="t('roundEnd.round24.equipmentCards')"></li>
    </ol>
  </template>

  <button class="btn btn-primary btn-lg mt-4" @click="next()">
    {{t('action.next')}}
  </button>

  <FooterButtons :backButtonRouteTo="backButtonRouteTo" endGameButtonType="abortGame"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import FooterButtons from '@/components/structure/FooterButtons.vue'
import { useRoute } from 'vue-router'
import { useStateStore } from '@/store/state'
import SideBar from '@/components/turn/SideBar.vue'
import NavigationState from '@/util/NavigationState'

export default defineComponent({
  name: 'RoundEnd',
  components: {
    FooterButtons,
    SideBar
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
      return `/round/${this.round}/turn/6/${this.navigationState.lastPlayer}`
    },
    isRound2Or4() : boolean {
      return this.round == 2 || this.round == 4
    }
  },
  methods: {
    next() : void {
      this.$router.push(`/round/${this.round + 1}/start`)
    }
  }
})
</script>
