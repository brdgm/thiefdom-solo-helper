<template>
  <div>
    <div class="townsfolk">
      <div class="figure">
        <AppIcon type="thief" :name="`${currentCard.thief}-${playerColor}`" class="icon"/>
        <div class="number">{{currentCard.carriage ? 4 : 3}}</div>
      </div>
      <div class="arrow">
        <img src="@/assets/icons/arrow-right.svg" class="icon"/>
      </div>
      <div class="location">
        <AppIcon type="location" :name="location" class="icon"/>
      </div>
      <div class="cityBoard">
        {{cityBoard}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PropType } from 'vue'
import Card from '@/services/Card'
import rollDice from '@brdgm/brdgm-commons/src/util/random/rollDice'
import Location from '@/services/enum/Location'
import PlayerColor from '@/services/enum/PlayerColor'
import AppIcon from '../structure/AppIcon.vue'

export default defineComponent({
  name: 'RivalLocation',
  components: {
    AppIcon
  },
  setup() {
    const locationSelection = rollDice(8)
    return { locationSelection }
  },
  props: {
    currentCard: {
      type: Object as PropType<Card>,
      required: true
    },
    playerColor: {
      type: String as PropType<PlayerColor>,
      required: true
    }
  },
  computed: {
    location() : Location {
      switch (this.locationSelection) {
        case 1: return Location.TAVERN
        case 2: return Location.TAVERN
        case 3: return Location.MARKET
        case 4: return Location.MARKET
        case 5: return Location.DEALER
        case 6: return Location.DEALER
        case 7: return Location.DUNGEON
        case 8: return Location.TAVERN
        default: return Location.TAVERN
      }
    },
    cityBoard() : number {
      switch (this.locationSelection) {
        case 1: return 8
        case 2: return 2
        case 3: return 3
        case 4: return 3
        case 5: return 6
        case 6: return 6
        case 7: return 7
        case 8: return 8
        default: return 0
      }
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
    height: 100px;
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
.location {
  background-color: #ec8922;
  border-radius: 8px;
  margin: 10px;
  padding: 3px;
  .icon {
    width: 60px;
    @media (max-width: 600px) {
      width: 45px;
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
}
.cityBoard {
  font-weight: bold;
  font-size: 30px;
  background-color: #1b586c;
  color: #99cbe3;
  height: 50px;
  width: 50px;
  text-align: center;
  align-content: center;
  @media (max-width: 600px) {
    font-size: 24px;
    height: 40px;
    width: 40px;
  }
}
</style>
