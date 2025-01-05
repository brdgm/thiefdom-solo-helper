import { CityBoardSetup, State, Turn } from '@/store/state'
import { RouteLocation } from 'vue-router'
import getIntRouteParam from '@brdgm/brdgm-commons/src/util/router/getIntRouteParam'
import Player from '@/services/enum/Player'
import PlayerColor from '@/services/enum/PlayerColor'
import CardDeck from '@/services/CardDeck'
import rollDice from '@brdgm/brdgm-commons/src/util/random/rollDice'
import MapRandomizer from '@/services/MapRandomizer'

export default class NavigationState {

  readonly round : number
  readonly turn : number
  readonly player : Player
  readonly playerColor : PlayerColor
  readonly startPlayer : Player
  readonly lastPlayer : Player
  readonly planningMarker : number

  readonly movementRoll : number
  readonly locationRoll: number
  readonly cardDeck : CardDeck
  readonly cityBoardSetup : CityBoardSetup[]

  constructor(route: RouteLocation, state: State) {    
    this.round = getIntRouteParam(route, 'round')
    this.turn = getIntRouteParam(route, 'turn')

    if (isEven(this.round)) {
      this.startPlayer = Player.BOT
      this.lastPlayer = Player.PLAYER
    }
    else {
      this.startPlayer = Player.PLAYER
      this.lastPlayer = Player.BOT
    }

    if ((isOdd(this.round) && isEven(this.turn)) || (isEven(this.round) && isOdd(this.turn))) {
      this.player = Player.BOT
      this.playerColor = state.setup.playerColors[1]
    }
    else {
      this.player = Player.PLAYER
      this.playerColor = state.setup.playerColors[0]
    }

    const currentTurn = getCurrentTurn(state, this.round, this.turn)
    if (currentTurn) {
      this.cardDeck = CardDeck.fromPersistence(currentTurn.cardDeck)
      this.movementRoll = currentTurn.movementRoll
      this.locationRoll = currentTurn.locationRoll
    }
    else {
      this.cardDeck = getCardDeckFromLastTurn(state, this.round, this.turn)
      if (this.player == Player.BOT) {
        this.cardDeck.draw()
      }
      this.movementRoll = rollDice(8)
      this.locationRoll = rollDice(8)
    }

    this.planningMarker = Math.ceil(this.turn / 2)
    this.cityBoardSetup = state.setup.cityBoardSetup ?? MapRandomizer.new().cityBoardSetup
  }

}

function getCurrentTurn(state: State, round: number, turn: number) : Turn|undefined {
  const roundData = state.rounds.find(item => item.round == round)
  if (roundData) {
    return roundData.turns.find(item => item.turn == turn)
  }
  return undefined
}

function getCardDeckFromLastTurn(state: State, round: number, turn: number) : CardDeck {
  const roundData = state.rounds.find(item => item.round == round)
  if (roundData) {
    const descendingLastTurns = roundData.turns.filter(item => item.turn < turn).toSorted((item1,item2) => item2.turn - item1.turn)
    const lastTurn = descendingLastTurns[0]
    if (lastTurn) {
      return CardDeck.fromPersistence(lastTurn.cardDeck)
    }
  }
  return CardDeck.new()
}

function isEven(n: number) : boolean {
  return n % 2 == 0
}

function isOdd(n: number) : boolean {
  return n % 2 != 0
}
