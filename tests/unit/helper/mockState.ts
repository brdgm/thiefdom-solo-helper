import PlayerColor from '@/services/enum/PlayerColor'
import { Round, State } from '@/store/state'

export default function mockState(params?: MockStateParams) : State {  
  return {
    language: 'en',
    baseFontSize: 1,
    setup: {
      playerColors: params?.playerColors ?? [PlayerColor.YELLOW, PlayerColor.PURPLE]
    },
    rounds: params?.rounds ?? []
  }
}

export interface MockStateParams {
  playerColors?: PlayerColor[],
  rounds?: Round[]
}
