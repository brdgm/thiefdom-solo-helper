import NavigationState from '@/util/NavigationState'
import { expect } from 'chai'
import mockRouteLocation from '../helper/mockRouteLocation'
import mockState from '../helper/mockState'
import mockRound from '../helper/mockRound'
import mockTurn from '../helper/mockTurn'
import PlayerColor from '@/services/enum/PlayerColor'
import Player from '@/services/enum/Player'

const state = mockState({playerColors:[PlayerColor.WHITE,PlayerColor.BLUE], rounds:[
  mockRound({round:1, turns:[
    mockTurn({round:1, turn:1, pile:[2,1,3], discard:[]}),
    mockTurn({round:1, turn:2, pile:[1,3], discard:[2]}),
    mockTurn({round:1, turn:3, pile:[1,3], discard:[2]}),
    mockTurn({round:1, turn:4, pile:[3], discard:[1,2]}),
    mockTurn({round:1, turn:5, pile:[3], discard:[1,2]}),
    mockTurn({round:1, turn:6, pile:[], discard:[3,1,2]}),
  ]}),
]})

describe('util/NavigationState', () => {
  it('playerTurn3', () => {
    const route = mockRouteLocation({params:{round:'1',turn:'3'}})
    const navigationState = new NavigationState(route, state)

    expect(navigationState.round).to.eq(1)
    expect(navigationState.turn).to.eq(3)
    expect(navigationState.player).to.eq(Player.PLAYER)
    expect(navigationState.playerColor).to.eq(PlayerColor.WHITE)
    expect(navigationState.startPlayer).to.eq(Player.PLAYER)
    expect(navigationState.lastPlayer).to.eq(Player.BOT)
    expect(navigationState.cardDeck.currentCard?.id).to.eq(2)
  })
})

describe('util/NavigationState', () => {
  it('botTurn4', () => {
    const route = mockRouteLocation({params:{round:'1',turn:'4'}})
    const navigationState = new NavigationState(route, state)

    expect(navigationState.round).to.eq(1)
    expect(navigationState.turn).to.eq(4)
    expect(navigationState.player).to.eq(Player.BOT)
    expect(navigationState.playerColor).to.eq(PlayerColor.BLUE)
    expect(navigationState.startPlayer).to.eq(Player.PLAYER)
    expect(navigationState.lastPlayer).to.eq(Player.BOT)
    expect(navigationState.cardDeck.currentCard?.id).to.eq(1)
  })
})
