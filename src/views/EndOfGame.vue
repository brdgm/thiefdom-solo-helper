<template>
  <h1 class="mb-4">{{t('endOfGame.title')}}</h1>

  <FinalScoring :amount="amount"/>

  <FooterButtons :backButtonRouteTo="backButtonRouteTo" endGameButtonType="endGame"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import FooterButtons from '@/components/structure/FooterButtons.vue'
import { FinalScoringAmount, useStateStore } from '@/store/state'
import FinalScoring from '@/components/scoring/FinalScoring.vue'

export default defineComponent({
  name: 'EndOfGame',
  components: {
    FooterButtons,
    FinalScoring
  },
  setup() {
    const { t } = useI18n()
    const state = useStateStore()

    const amount = state.finalScoringAmount ?? {} as FinalScoringAmount

    return { t, state, amount }
  },
  computed: {
    backButtonRouteTo() : string {
      return '/endOfGameAmounts'
    }
  }
})
</script>
