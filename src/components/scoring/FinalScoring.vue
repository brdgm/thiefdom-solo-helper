<template>
  <div class="scoring-layout">
    <table>
      <tbody>
        <tr>
          <th scope="row">
            <AppIcon name="honor-point" class="icon"/>
          </th>
          <td>
            {{t(`endOfGame.vp`, {count:toNumber(amount.scoringTrackVP)})}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            <AppIcon type="final-scoring" name="gold" class="icon"/> : 4
          </th>
          <td>
            {{t(`endOfGame.vp`, {count:Math.floor(toNumber(amount.money) / 4)})}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            <AppIcon type="final-scoring" name="jewel" class="icon"/> : 2
          </th>
          <td>
            {{t(`endOfGame.vp`, {count:Math.floor(toNumber(amount.jewelCount) / 2)})}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            <AppIcon type="final-scoring" name="liquor" class="icon"/> : 2
          </th>
          <td>
            {{t(`endOfGame.vp`, {count:Math.floor(toNumber(amount.liquorCount) / 2)})}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            <AppIcon type="final-scoring" name="badge" class="icon"/>
          </th>
          <td>
            {{t(`endOfGame.vp`, {count:toNumber(amount.badgeCount)})}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            <AppIcon type="final-scoring" name="wine" class="icon"/>
          </th>
          <td>
            {{t(`endOfGame.vp`, {count:toNumber(amount.wineCount)})}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            <AppIcon type="final-scoring" name="oil-painting" class="icon"/> x 3
          </th>
          <td>
            {{t(`endOfGame.vp`, {count:toNumber(amount.oilPaintingCount) * 3})}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            <AppIcon type="final-scoring" name="friend" class="icon"/>
            <AppIcon type="final-scoring" name="end-of-game" class="icon"/>
          </th>
          <td>
            {{t(`endOfGame.vp`, {count:toNumber(amount.friendVP)})}}
          </td>
        </tr>
        <tr>
          <th scope="row">
            <AppIcon type="final-scoring" name="thief" class="icon"/>
            <AppIcon type="final-scoring" name="hideout" class="icon"/>
          </th>
          <td>
            {{t(`endOfGame.vp`, {count:toNumber(amount.thiefHideoutCount)})}}
          </td>
        </tr>
      </tbody>
    </table>

    <div class="finalResult">
      <p v-html="t('endOfGame.finalScore')"></p>
      <p class="totalVPPlayer">{{t(`endOfGame.vp`, {count:totalVP})}}</p>
      <p v-html="t('endOfGame.scoreTable')"></p>
      <table class="table">
        <tbody>
          <tr v-for="(vp,index) of starVP" :key="index" :class="{'markScore': index == starVPPlayerIndex}">
            <th scope="row"><span v-for="star of (index+1)" :key="star">★</span></th>
            <td>{{t(`endOfGame.vp`, {count:vp})}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script lang="ts">
import { useStateStore, FinalScoringAmount } from '@/store/state'
import { defineComponent, PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon from '../structure/AppIcon.vue'
import toNumber from '@brdgm/brdgm-commons/src/util/form/toNumber'

export default defineComponent({
  name: 'FinalScoring',
  components: {
    AppIcon
  },
  setup() {
    const { t } = useI18n()
    const state = useStateStore()

    const playerCount = 2

    return { t, state, playerCount }
  },
  props: {
    amount: {
      type: Object as PropType<FinalScoringAmount>,
      required: true
    }
  },
  computed: {
    totalVP() : number {
      return toNumber(this.amount.scoringTrackVP)
          + Math.floor(toNumber(this.amount.money) / 4)
          + Math.floor(toNumber(this.amount.jewelCount) / 2)
          + Math.floor(toNumber(this.amount.liquorCount) / 2)
          + toNumber(this.amount.badgeCount)
          + toNumber(this.amount.wineCount)
          + (toNumber(this.amount.oilPaintingCount) * 3)
          + toNumber(this.amount.friendVP)
          + toNumber(this.amount.thiefHideoutCount)
    },
    starVP() : number[] {
      return [30, 40, 50, 60, 70]
    },
    starVPPlayerIndex() : number {
      for (let i=0; i<this.starVP.length; i++) {
        if (this.totalVP < this.starVP[i]) {
          return i - 1
        }
      }
      return this.starVP.length - 1
    }
  },
  methods: {
    toNumber
  }
})
</script>

<style lang="scss" scoped>
.scoring-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  margin-left: 30px;
  .finalResult {
    max-width: 500px;
    .totalVPPlayer {
      font-size: 40px;
      text-align: center;
    }
    th {
      color: darkgoldenrod;
    }
    .markScore {
      th, td {
        background-color: #cfc;
      }
    }
  }
}
.icon {
  height: 2rem;
  margin-right: 0.25rem;
}
.table-wrapper {
  overflow-x: auto;
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
</style>
