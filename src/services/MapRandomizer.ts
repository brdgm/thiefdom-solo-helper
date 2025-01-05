import { isEqual, shuffle } from 'lodash'
import { CityBoardSetup } from '@/store/state'
import { ref } from 'vue'
import CityBoard from './enum/CityBoard'
import CityBoardSide from './enum/CityBoardSide'
import CityBoardRotation from './enum/CityBoardRotation'
import randomEnum from '@brdgm/brdgm-commons/src/util/random/randomEnum'
import getAllEnumValues from '@brdgm/brdgm-commons/src/util/enum/getAllEnumValues'

/**
 * Map randomizer (2 player only).
 */
export default class MapRandomizer {

  private readonly _cityBoardSetup

  private constructor(cityBoardSetup : CityBoardSetup[]) {
    this._cityBoardSetup = ref(cityBoardSetup)
  }

  public get cityBoardSetup() : CityBoardSetup[] {
    return this._cityBoardSetup.value
  }

  /**
   * Reset to tutorial setup.
   */
  public reset() : void {
    this._cityBoardSetup.value = TUTORIAL_SETUP
  }

  /**
   * Randomize map.
   */
  public randomize() : void {
    const all = getAllEnumValues(CityBoard).filter(board => !isTheeFourPlayers(board))
    const riverSide : CityBoard[] = shuffle(all.filter(board => isRiverSide(board)))
    const landSide : CityBoard[] = shuffle(all.filter(board => !isRiverSide(board)))
    const selected = [landSide[0], landSide[1], riverSide[0], landSide[2], landSide[3], riverSide[1]]
    this._cityBoardSetup.value = selected.map(board => ({
      board: board,
      side: randomEnum(CityBoardSide),
      rotation: isRiverSide(board) ? CityBoardRotation.THREE : randomEnum(CityBoardRotation)
    }))
  }

  /**
   * @returns true if current setup is tutorial setup.
   */
  public isTutorialSetup() : boolean {
    return isEqual(this._cityBoardSetup.value, TUTORIAL_SETUP)
  }

  /**
   * Gets persistence view of card deck.
   */
  public toPersistence() : CityBoardSetup[] {
    return this._cityBoardSetup.value
  }

  /**
   * Creates a shuffled new card deck.
   */
  public static new() : MapRandomizer {
    return new MapRandomizer(TUTORIAL_SETUP)
  }

  /**
   * Re-creates card deck from persistence.
   */
  public static fromPersistence(persistence : CityBoardSetup[]) : MapRandomizer {
    return new MapRandomizer(
      persistence
    )
  }

}

export const TUTORIAL_SETUP : CityBoardSetup[] = [
  { board: CityBoard.CITY_BOARD_2, side: CityBoardSide.A, rotation: CityBoardRotation.NONE },
  { board: CityBoard.CITY_BOARD_3, side: CityBoardSide.A, rotation: CityBoardRotation.NONE },
  { board: CityBoard.CITY_BOARD_4, side: CityBoardSide.A, rotation: CityBoardRotation.THREE },
  { board: CityBoard.CITY_BOARD_6, side: CityBoardSide.A, rotation: CityBoardRotation.NONE },
  { board: CityBoard.CITY_BOARD_7, side: CityBoardSide.A, rotation: CityBoardRotation.NONE },
  { board: CityBoard.CITY_BOARD_8, side: CityBoardSide.A, rotation: CityBoardRotation.THREE }
]

export function isRiverSide(board : CityBoard) : boolean {
  return board == CityBoard.CITY_BOARD_4 || board == CityBoard.CITY_BOARD_8
}

export function isTheeFourPlayers(board : CityBoard) : boolean {
  return board == CityBoard.CITY_BOARD_1 || board == CityBoard.CITY_BOARD_5
}
