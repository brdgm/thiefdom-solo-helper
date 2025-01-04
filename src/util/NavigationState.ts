import { State } from '@/store/state'
import { RouteLocation } from 'vue-router'
import getIntRouteParam from '@brdgm/brdgm-commons/src/util/router/getIntRouteParam'
import Player from '@/services/enum/Player'
import PlayerColor from '@/services/enum/PlayerColor'
import CardDeck from '@/services/CardDeck'

export default class NavigationState {

  readonly round : number
  readonly turn : number
  readonly player : Player
  readonly playerColor : PlayerColor
  readonly cardDeck : CardDeck

  constructor(route: RouteLocation, state: State) {    
    this.round = getIntRouteParam(route, 'round')
    this.turn = getIntRouteParam(route, 'turn')

    if ((isOdd(this.round) && isEven(this.turn)) || (isEven(this.round) && isOdd(this.turn))) {
      this.player = Player.BOT
      this.playerColor = state.setup.playerColors[1]
    }
    else {
      this.player = Player.PLAYER
      this.playerColor = state.setup.playerColors[0]
    }

    this.cardDeck = getCardDeckFromLastTurn(state, this.round, this.turn)
    if (this.player == Player.BOT) {
      this.cardDeck.draw()
    }
  }

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
