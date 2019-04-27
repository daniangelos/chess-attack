import Piece from "./Piece"

class Queen extends Piece {
  canAttack(enemy: Piece, board: number[][]): boolean {
    if (board) return false
    return !!enemy
  }

  toString(): string {
    if (this.color === 'white') {
      return '♕'
    }
    return '♛'
  }
}

export default Queen