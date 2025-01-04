import findMandatory from '@brdgm/brdgm-commons/src/util/map/findMandatory'
import Card from './Card'
import Noble from './enum/Noble'
import Guard from './enum/Guard'
import Thief from './enum/Thief'

/**
 * Patrouille boards.
 */
const cards : Card[] = [
  {
    id: 1,
    noble: Noble.NOBLE_1,
    guard: Guard.GUARD_1,
    thief: Thief.THIEF_2
  },
  {
    id: 2,
    noble: Noble.NOBLE_2,
    guard: Guard.GUARD_2,
    thief: Thief.THIEF_3
  },
  {
    id: 3,
    noble: Noble.NOBLE_3,
    guard: Guard.GUARD_3,
    carriage: true,
    thief: Thief.THIEF_1
  },
]

const cardsMap = new Map<number,Card>()
cards.forEach(card => cardsMap.set(card.id, card))

export default {

  /**
   * Get card by ID
   * @param id ID
   * @returns WarCard
   */
  get(id: number) : Card {
    return findMandatory(cardsMap, id)
  },

  /**
   * Get all cards
   * @returns WarCards
   */
  getAll() : Card[] {
    return cards
  }

}
