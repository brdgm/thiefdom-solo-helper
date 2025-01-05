<template>
  <div class="mt-4" v-if="state.setup.debugMode">
    <hr/>
    <div class="debug">
      <div v-if="cardDeck.currentCard"><b>Current Card:</b>: {{cardDeck.currentCard}}</div>
      <div><b>Card Deck</b>: {{cardDeck.toPersistence()}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStateStore } from '@/store/state'
import NavigationState from '@/util/NavigationState'
import CardDeck from '@/services/CardDeck';

export default defineComponent({
  name: 'DebugInfo',
  setup() {
    const state = useStateStore()
    return { state }
  },
  props: {
    navigationState: {
      type: NavigationState,
      required: true
    }
  },
  computed: {
    cardDeck(): CardDeck {
      return this.navigationState.cardDeck
    }
  }
})
</script>

<style lang="scss" scoped>
.debug {
  font-size: small;
}
p.debug, ul.debug {
  margin: 0;
}
</style>
