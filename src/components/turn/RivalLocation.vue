<template>
  <div>
    <div class="townsfolk">
      <div class="figure">
        <AppIcon type="thief" :name="`${currentCard.thief}-${navigationState.playerColor}`" class="icon"/>
        <div class="number">{{currentCard.carriage ? 4 : 3}}</div>
      </div>
      <div class="arrow">
        <AppIcon name="arrow-right" extension="svg" class="icon"/>
      </div>
      <div class="location">
        <AppIcon type="location" :name="location" class="icon"/>
      </div>
      <div class="cityBoard">
        <MapDisplay :cityBoardSetup="navigationState.cityBoardSetup" :selected="cityBoard"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Card from '@/services/Card'
import Location from '@/services/enum/Location'
import AppIcon from '../structure/AppIcon.vue'
import CityBoard from '@/services/enum/CityBoard'
import MapDisplay from '../structure/MapDisplay.vue'
import NavigationState from '@/util/NavigationState'

export default defineComponent({
  name: 'RivalLocation',
  components: {
    AppIcon,
    MapDisplay
  },
  props: {
    currentCard: {
      type: Object as PropType<Card>,
      required: true
    },
    navigationState: {
      type: NavigationState,
      required: true
    }
  },
  computed: {
    location() : Location {
      switch (this.navigationState.locationRoll) {
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
    cityBoard() : CityBoard {
      switch (this.navigationState.locationRoll) {
        case 1: return CityBoard.CITY_BOARD_8
        case 2: return CityBoard.CITY_BOARD_2
        case 3: return CityBoard.CITY_BOARD_3
        case 4: return CityBoard.CITY_BOARD_3
        case 5: return CityBoard.CITY_BOARD_6
        case 6: return CityBoard.CITY_BOARD_6
        case 7: return CityBoard.CITY_BOARD_7
        case 8: return CityBoard.CITY_BOARD_8
        default: return CityBoard.CITY_BOARD_1
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.townsfolk {
  display: inline-flex;
  flex-wrap: wrap;
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
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
