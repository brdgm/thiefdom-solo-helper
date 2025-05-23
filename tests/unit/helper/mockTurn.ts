import { Turn } from '@/store/state'

export default function (params?: MockTurnParams) : Turn {
  const turn : Turn = {
    round: params?.round ?? 1,
    turn: params?.turn ?? 1,
    cardDeck: { pile: params?.pile ?? [1,2,3], discard: params?.discard ?? [] },
    movementRoll: params?.movementRoll ?? 0,
    locationRoll: params?.locationRoll ?? 0
  }
  return turn
}

export interface MockTurnParams {
  round? : number
  turn? : number
  pile?: number[]
  discard?: number[]
  movementRoll?: number
  locationRoll?: number
}
