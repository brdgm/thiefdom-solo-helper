<template>
  <svg width="200" height="200" viewBox="-10 -10 220 220">
    <rect width="200" height="200" :style="styleString"/>
  </svg>
</template>

<script lang="ts">
import PlayerColor from '@/services/enum/PlayerColor'
import { defineComponent, PropType } from 'vue'
import getPlayerColorCode from '@/util/getPlayerColorCode'

export default defineComponent({
  name: 'PlayerColorIcon',
  props: {
    playerColor: {
      type: String as PropType<PlayerColor>,
      required: true
    }
  },
  computed: {
    colorCode() : string {
      return getPlayerColorCode(this.playerColor)
    },
    styleString() : string {
      return `fill:${this.colorCode};stroke:black;stroke-width:10;'`
    }
  }
})
</script>
