import Guard from './enum/Guard'
import Noble from './enum/Noble'
import Thief from './enum/Thief'

export default interface Card {
  id: number
  noble: Noble
  guard: Guard
  carriage?: boolean
  thief: Thief
}
