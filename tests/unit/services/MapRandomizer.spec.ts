import CityBoard from '@/services/enum/CityBoard'
import CityBoardRotation from '@/services/enum/CityBoardRotation'
import CityBoardSide from '@/services/enum/CityBoardSide'
import MapRandomizer, { isRiverSide, TUTORIAL_SETUP } from '@/services/MapRandomizer'
import { expect } from 'chai'

describe('services/MapRandomizer', () => {
  it('new', () => {
    const randomizer = MapRandomizer.new()
    expect(randomizer.cityBoardSetup).to.eql(TUTORIAL_SETUP)

    const persistence = randomizer.toPersistence()
    expect(persistence).to.eql(TUTORIAL_SETUP)
  })

  it('randomize', () => {
    const randomizer = MapRandomizer.new()
    randomizer.randomize()

    expect(randomizer.cityBoardSetup.length).to.eq(6)
    for (let i = 0; i++; i<randomizer.cityBoardSetup.length) {
      const setup = randomizer.cityBoardSetup[i]
      if (i == 2 || i == 5) {
        expect(isRiverSide(setup.board)).to.be.true
        expect(setup.rotation).to.eq(CityBoardRotation.THREE)
      }
      else {
        expect(isRiverSide(setup.board)).to.be.false
        expect(setup.rotation).to.not.undefined
      }
      expect(setup.side).to.not.undefined
    }
  })

  it('reset', () => {
    const randomizer = MapRandomizer.fromPersistence([
      { board: CityBoard.CITY_BOARD_7, side: CityBoardSide.B, rotation: CityBoardRotation.ONE },
      { board: CityBoard.CITY_BOARD_6, side: CityBoardSide.A, rotation: CityBoardRotation.TWO },
      { board: CityBoard.CITY_BOARD_8, side: CityBoardSide.B, rotation: CityBoardRotation.THREE },
      { board: CityBoard.CITY_BOARD_3, side: CityBoardSide.A, rotation: CityBoardRotation.THREE },
      { board: CityBoard.CITY_BOARD_2, side: CityBoardSide.B, rotation: CityBoardRotation.NONE},
      { board: CityBoard.CITY_BOARD_4, side: CityBoardSide.A, rotation: CityBoardRotation.THREE }
    ])
    randomizer.reset()
    expect(randomizer.cityBoardSetup).to.eql(TUTORIAL_SETUP)
  })
})
