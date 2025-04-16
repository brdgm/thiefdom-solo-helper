<template>
  <table>
    <tbody>
      <tr>
        <th scope="row">
          <AppIcon name="honor-point" class="icon small"/>
          <span v-html="t('endOfGameAmounts.vp')"></span>
        </th>
        <td>
          <NumberInput v-model="amount.scoringTrackVP"/>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <AppIcon type="final-scoring" name="gold" class="icon small"/>
          <span v-html="t('endOfGameAmounts.count')"></span>
        </th>
        <td>
          <NumberInput v-model="amount.money"/>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <AppIcon type="final-scoring" name="jewel" class="icon small"/>
          <span v-html="t('endOfGameAmounts.count')"></span>
        </th>
        <td>
          <NumberInput v-model="amount.jewelCount"/>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <AppIcon type="final-scoring" name="liquor" class="icon small"/>
          <span v-html="t('endOfGameAmounts.count')"></span>
        </th>
        <td>
          <NumberInput v-model="amount.liquorCount"/>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <AppIcon type="final-scoring" name="badge" class="icon small"/>
          <span v-html="t('endOfGameAmounts.count')"></span>
        </th>
        <td>
          <NumberInput v-model="amount.badgeCount"/>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <AppIcon type="final-scoring" name="wine" class="icon small"/>
          <span v-html="t('endOfGameAmounts.count')"></span>
        </th>
        <td>
          <NumberInput v-model="amount.wineCount"/>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <AppIcon type="final-scoring" name="oil-painting" class="icon small"/>
          <span v-html="t('endOfGameAmounts.count')"></span>
        </th>
        <td>
          <NumberInput v-model="amount.oilPaintingCount" :max="4"/>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <AppIcon type="final-scoring" name="friend" class="icon small"/>
          <AppIcon type="final-scoring" name="end-of-game" class="icon small"/>
          <span v-html="t('endOfGameAmounts.vp')"></span>
        </th>
        <td>
          <NumberInput v-model="amount.friendVP"/>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <AppIcon type="final-scoring" name="thief" class="icon small"/>
          <AppIcon type="final-scoring" name="hideout" class="icon small"/>
          <span v-html="t('endOfGameAmounts.count')"></span>
        </th>
        <td>
          <NumberInput v-model="amount.thiefHideoutCount" :max="3"/>
        </td>
      </tr>
    </tbody>
  </table>

  <button class="btn btn-primary btn-lg mt-4" @click="next()">
    {{t('action.next')}}
  </button>

</template>

<script lang="ts">
import { useStateStore, FinalScoringAmount } from '@/store/state'
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon from '../structure/AppIcon.vue'
import { useRouter } from 'vue-router'
import NumberInput from '@brdgm/brdgm-commons/src/components/form/NumberInput.vue'

export default defineComponent({
  name: 'FinalAmounts',
  components: {
    AppIcon,
    NumberInput
  },
  setup() {
    const { t } = useI18n()
    const state = useStateStore()
    const router = useRouter()

    const amount = state.finalScoringAmount ?? {} as FinalScoringAmount

    return { t, state, router, amount }
  },
  methods: {
    next() : void {
      this.state.finalScoringAmount = this.amount
      this.router.push('/endOfGame')
    }
  }
})
</script>

<style lang="scss" scoped>
.icon {
  height: 2rem;
  margin-right: 0.5rem;
}
table {
  margin-left: 30px;
}
th, td {
  text-align: center;
  padding: 0.5rem;
}
tr:nth-child(odd) {
  background-color: #f2f2f2;
}
th {
  white-space: nowrap;
  vertical-align: middle;
}
input {
  width: 5rem;
}
</style>
