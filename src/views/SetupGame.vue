<template>
  <h1>{{t('setup.title')}}</h1>

  <PlayersSetup/>

  <h3 class="mt-3">{{t('setup.setup.title')}}</h3>
  <ul>
    <li v-html="t('setup.setup.gameBoard')"></li>
    <li v-html="t('setup.setup.playerBoard')"></li>
    <li v-html="t('setup.setup.rivalThieves')"></li>
    <li v-html="t('setup.setup.draftEquipment')"></li>
    <li v-html="t('setup.setup.placeHideout')"></li>
  </ul>

  <h3 class="mt-3">{{t('setup.ruleChanges.title')}}</h3>
  <ul>
    <li v-html="t('setup.ruleChanges.townsfolkMovement')"></li>
    <li v-html="t('setup.ruleChanges.enterLocationRival')"></li>
    <li v-html="t('setup.ruleChanges.getArrested')"></li>
  </ul>

  <button class="btn btn-primary btn-lg mt-4" @click="setupBot()">
    {{t('action.startGame')}}
  </button>

  <FooterButtons endGameButtonType="abortGame"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStateStore } from '@/store/state'
import FooterButtons from '@/components/structure/FooterButtons.vue'
import PlayersSetup from '@/components/setup/PlayersSetup.vue'

export default defineComponent({
  name: 'SetupGame',
  components: {
    FooterButtons,
    PlayersSetup
  },
  setup() {
    const { t } = useI18n()
    const state = useStateStore()
    return { t, state }
  },
  methods: {
    setupBot() : void {
      this.$router.push('/round/1/turn/1/player')
    }
  }
})
</script>
