<template>
  <div class="city">
    <div class="board" v-for="boardSetup of cityBoardSetup" :key="boardSetup.board"
        :style="`transform:rotate(${boardSetup.rotation * 90}deg)`"
        :class="{disabled:isSelectionMode && !isSelected(boardSetup.board), selected:isSelected(boardSetup.board)}">
      {{`${boardSetup.board}${boardSetup.side}`}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CityBoardSetup } from '@/store/state'
import CityBoard from '@/services/enum/CityBoard'

export default defineComponent({
  name: 'MapDisplay',
  props: {
    cityBoardSetup: {
      type: Array as PropType<CityBoardSetup[]>,
      required: true
    },
    selected: {
      type: Number as PropType<CityBoard>,
      required: false
    }
  },
  computed: {
    isSelectionMode(): boolean {
      return this.selected !== undefined
    }
  },
  methods: {
    isSelected(board: CityBoard): boolean {
      return this.selected === board
    }
  }
})
</script>

<style lang="scss" scoped>
.city {
  display: grid;
  grid-template-columns: auto auto auto;
  width: 156px;
  gap: 3px;
  @media (max-width: 600px) {
    width: 126px;
  }
  .board {
    width: 50px;
    height: 50px;
    font-weight: bold;
    font-size: 25px;
    background-color: #1b586c;
    color: #99cbe3;
    text-align: center;
    align-content: center;
    &.disabled {
      background-color: #aaa;
      color: #888;
    }
    &.selected {
      border: #f00 solid 3px;
    }
    @media (max-width: 600px) {
      font-size: 20px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
