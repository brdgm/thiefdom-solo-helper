import { State } from '@/store/state'
import { RouteLocation } from 'vue-router'
import getIntRouteParam from '@brdgm/brdgm-commons/src/util/router/getIntRouteParam'
import DifficultyLevel from '@/services/enum/DifficultyLevel'
import Player from '@/services/enum/Player'

export default class NavigationState {

  readonly round : number
  readonly startPlayer : Player
  readonly difficultyLevel : DifficultyLevel

  constructor(route: RouteLocation, state: State) {    
    this.round = getIntRouteParam(route, 'round')

    if (this.round % 2 == 0) {
      this.startPlayer = Player.BOT
    }
    else {
      this.startPlayer = Player.PLAYER
    }

    this.difficultyLevel = state.setup.difficultyLevel
  }

}
