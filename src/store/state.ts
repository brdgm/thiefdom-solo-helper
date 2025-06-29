import { defineStore } from 'pinia'
import { name } from '@/../package.json'
import PlayerColor from '@/services/enum/PlayerColor'
import CityBoard from '@/services/enum/CityBoard'
import CityBoardSide from '@/services/enum/CityBoardSide'
import CityBoardRotation from '@/services/enum/CityBoardRotation'

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
      this.finalScoringAmount = undefined
      this.gameStatsSend = false
    },
    storeTurn(turn : Turn) {
      let round = this.rounds.find(item => item.round === turn.round)
      if (!round) {
        round = { round: turn.round, turns: [] }
        this.rounds.push(round)
      }
      round.turns = round.turns.filter(item => item.turn != turn.turn)
      round.turns.push(turn)
    }
  },
  persist: true
})

export interface State {
  language: string
  baseFontSize: number
  setup: Setup
  rounds: Round[]
  finalScoringAmount?: FinalScoringAmount
  gameStatsSend?: boolean
}
export interface Setup {
  playerColors: PlayerColor[]
  cityBoardSetup?: CityBoardSetup[]
  debugMode?: boolean
}
export interface CityBoardSetup {
  board: CityBoard
  side: CityBoardSide
  rotation: CityBoardRotation
}

export interface Round {
  round: number
  turns: Turn[]
}
export interface Turn {
  round: number
  turn: number
  movementRoll: number
  locationRoll: number
  cardDeck: CardDeckPersistence
}

export interface CardDeckPersistence {
  pile: number[]
  discard: number[]
}

export interface FinalScoringAmount {
  scoringTrackVP?: number
  money?: number
  jewelCount?: number
  liquorCount?: number
  badgeCount?: number
  wineCount?: number
  oilPaintingCount?: number
  friendVP?: number
  thiefHideoutCount?: number
}
