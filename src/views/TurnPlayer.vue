<template>
  <SideBar :navigationState="navigationState"/>

  <h1>
    {{t('turnPlayer.title')}}
  </h1>

  <p v-html="t('turnPlayer.takeTurn')" class="mt-4 mb-4"></p>

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
import { useRoute } from 'vue-router'
import { useStateStore } from '@/store/state'
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
    const route = useRoute()
    const state = useStateStore()

    const navigationState = new NavigationState(route, state)
    const { round, turn } = navigationState

    return { t, state, navigationState, round, turn }
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
      this.$router.push(`/round/${this.round}/turn/${this.turn+1}/bot`)
    }
  }
})
</script>
