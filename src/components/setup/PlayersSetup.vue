<template>
  <h3 class="mt-4 mb-3">{{t('setup.players.title')}}</h3>

  <div class="row mt-3" :key="playerColors.toString()">
    <div class="col-5 col-md-3">
      <label for="playerCount" class="form-label">{{t('setup.players.playerColor')}}</label>
    </div>
    <div class="col-5 col-md-3">
      <PlayerColorPicker :model-value="playerColors[0]" @update:model-value="color => playerColorChanged(0, color)"/>
    </div>
  </div>  

  <div class="row mt-3" :key="playerColors.toString()">
    <div class="col-5 col-md-3">
      <label for="playerCount" class="form-label">{{t('setup.players.botColor')}}</label>
    </div>
    <div class="col-5 col-md-3">
      <PlayerColorPicker :model-value="playerColors[1]" @update:model-value="color => playerColorChanged(1, color)"/>
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStateStore } from '@/store/state'
import PlayerColorPicker from './PlayerColorPicker.vue'
import PlayerColor from '@/services/enum/PlayerColor'

export default defineComponent({
  name: 'PlayersSetup',
  components: {
    PlayerColorPicker
  },
  setup() {
    const { t } = useI18n()
    const state = useStateStore()

    const playerColors = ref(state.setup.playerColors)

    return { t, state, playerColors }
  },
  watch: {
    playerColors() {
      this.storePlayerColors()
    }
  },
  methods: {
    storePlayerColors() {
      this.state.setup.playerColors = this.playerColors
    },
    playerColorChanged(index : number, color : PlayerColor) {
      const newPlayerColors = [...this.playerColors]
      newPlayerColors[index] = color
      for (let i=0; i<this.playerColors.length; i++) {
        if (i!=index && newPlayerColors[i]==color) {
          const newColor = Object.values(PlayerColor).find(c => !newPlayerColors.includes(c))
          if (newColor) {
            newPlayerColors[i] = newColor
          }
        }
      }
      this.playerColors = newPlayerColors
    }
  }
})
</script>
