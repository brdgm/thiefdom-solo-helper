<template>
  <div>
    <div class="townsfolk">
      <div class="figure">
        <AppIcon type="noble" :name="`${currentCard.noble}`" class="icon"/>
        <div class="number">1</div>
      </div>
      <div class="figure">
        <AppIcon type="guard" :name="`${currentCard.guard}`" class="icon"/>
        <div class="number">2</div>
      </div>
      <div class="arrow">
        <AppIcon name="arrow-right" extension="svg" class="icon"/>
      </div>
      <div class="lantern">
        <AppIcon name="lantern" class="icon"/>
      </div>
    </div>

    <div class="townsfolk" v-if="currentCard.carriage">
      <div class="figure">
        <AppIcon name="carriage" class="icon"/>
        <div class="number">3</div>
      </div>
      <div class="arrow">
        <div class="number">2x</div>
        <AppIcon name="arrow-right" extension="svg" class="icon"/>
      </div>
      <div class="lantern">
        <AppIcon name="lantern" class="icon"/>
      </div>
    </div>
  </div>
  <CompassNavigation :orientation="orientation" :direction="direction" class="mt-3 mb-2"/>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Card from '@/services/Card'
import AppIcon from '../structure/AppIcon.vue'
import CompassOrientation from '@/services/enum/CompassOrientation'
import CompassDirection from '@/services/enum/CompassDirection'
import CompassNavigation from './CompassNavigation.vue'

export default defineComponent({
  name: 'TownsfolkMovement',
  components: {
    AppIcon,
    CompassNavigation
  },
  props: {
    currentCard: {
      type: Object as PropType<Card>,
      required: true
    },
    movementRoll: {
      type: Number,
      required: true
    }
  },
  computed: {
    orientation() : CompassOrientation {
      // north = 0, east = 1, south = 2, west = 3
      return Math.ceil(this.movementRoll / 2) - 1
    },
    direction() : CompassDirection {
      // left = 1, right = 0
      return this.movementRoll % 2
    }
  }
})
</script>

<style lang="scss" scoped>
.townsfolk {
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
}
.figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    height: 90px;
    margin: 5px;
    @media (max-width: 600px) {
      height: 75px;
    }
  }
  .number {
    padding: 2px;
    background-color: #a2763d;
    color: #fff;
    width: 30px;
    text-align: center;
    font-weight: bold;
    border-radius: 8px;
  }
}
.lantern {
  .icon {
    height: 80px;
    @media (max-width: 600px) {
      height: 60px;
    }
  }
}
.arrow {
  position: relative;
  .icon {
    width: 70px;
    @media (max-width: 600px) {
      width: 50px;
    }
  }
  .number {
    position: absolute;
    font-weight: bold;
    font-size: 24px;
    left: 10px;
    top: -15px;
    @media (max-width: 600px) {
      font-size: 20px;
      left: 5px;
      top: -15px;
    }
  }
}
</style>
