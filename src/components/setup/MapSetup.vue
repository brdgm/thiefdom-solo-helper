<template>
  <h3 class="mt-4 mb-3">{{t('setup.map.title')}}</h3>

  <p v-html="t('setup.map.arrange')"></p>

  <MapDisplay :cityBoardSetup="mapRandomizer.cityBoardSetup"/>

  <button class="btn btn-sm btn-outline-secondary me-2 mt-2" @click="randomize()">{{t('setup.map.randomize')}}</button>
  <button class="btn btn-sm btn-outline-secondary mt-2" @click="reset()" v-if="!mapRandomizer.isTutorialSetup()">{{t('setup.map.tutorialSetup')}}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStateStore } from '@/store/state'
import MapRandomizer from '@/services/MapRandomizer'
import MapDisplay from '../structure/MapDisplay.vue'

export default defineComponent({
  name: 'MapSetup',
  components: {
    MapDisplay
  },
  setup() {
    const { t } = useI18n()
    const state = useStateStore()

    const mapRandomizer = MapRandomizer.new()
    state.setup.cityBoardSetup = mapRandomizer.toPersistence()

    return { t, state, mapRandomizer }
  },
  methods: {
    randomize() : void {
      this.mapRandomizer.randomize()
      this.state.setup.cityBoardSetup = this.mapRandomizer.toPersistence()
    },
    reset() : void {
      this.mapRandomizer.reset()
      this.state.setup.cityBoardSetup = this.mapRandomizer.toPersistence()
    }
  }
})
</script>
