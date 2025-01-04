import { defineStore } from 'pinia'
import { name } from '@/../package.json'
import PlayerColor from '@/services/enum/PlayerColor'

export const useStateStore = defineStore(`${name}.state`, {
  state: () => {
    return {
      language: 'en',
      baseFontSize: 1.0,
      setup: {
        playerColors: [PlayerColor.YELLOW, PlayerColor.PURPLE]
      },
      rounds: []
    } as State
  },
  actions: {
    resetGame() {
      this.rounds = []
    },
    storeRound(round : Round) {
      this.rounds = this.rounds.filter(item => item.round < round.round)
      this.rounds.push(round)
    }
  },
  persist: true
})

export interface State {
  language: string
  baseFontSize: number
  setup: Setup
  rounds: Round[]
}
export interface Setup {
  playerColors: PlayerColor[]
  debugMode?: boolean
}

export interface Round {
  round: number
}

export interface CardDeckPersistence {
  pile: number[]
  discard: number[]
}
