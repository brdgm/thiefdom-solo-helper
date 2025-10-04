import PlayerColor from '@/services/enum/PlayerColor'

/**
 * Get color code for player color.
 * @param playerColor Player color
 * @returns Color code
 */
export default function getPlayerColorCode(playerColor: PlayerColor) : string {
  switch (playerColor) {
    case PlayerColor.YELLOW:
      return '#e3b000'
    case PlayerColor.PURPLE:
      return '#8d3877'
    case PlayerColor.WHITE:
      return '#ececec'
    case PlayerColor.BLUE:
      return '#029cca'
    default:
      throw new Error(`Invalid player color: ${playerColor}.`)
  }
}
