<template>
  <h1>
    {{t('endOfGame.title')}}
  </h1>

  <p class="mt-3" v-html="t('endOfGame.finalScore')"></p>

  <div class="row">
    <div class="col-10 offset-1 col-sm-8 col-md-6 col-lg-4">
      <table class="table table">
        <tbody>
          <tr v-for="(vp,index) of starVP" :key="index">
            <th scope="row"><span v-for="star of (index+1)" :key="star">★</span></th>
            <td>{{t(`endOfGame.vp`, {count:vp})}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <FooterButtons :backButtonRouteTo="backButtonRouteTo" endGameButtonType="endGame"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import FooterButtons from '@/components/structure/FooterButtons.vue'
import { useRoute } from 'vue-router'
import { useStateStore } from '@/store/state'
import NavigationState from '@/util/NavigationState'

export default defineComponent({
  name: 'EndOfGame',
  components: {
    FooterButtons
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
      return `/round/6/turn/6/player`
    },
    starVP() : number[] {
      return [30, 40, 50, 60, 70]
    }
  }
})
</script>
