import Piece from "./Piece"
import { canAttackAtLine, canAttackAtColumn, canAttackAtDiagonal } from "./utils"

class Queen extends Piece {

  canAttack(enemy: Piece, board: number[][]): boolean {
    if (this.color === enemy.color) return false
    if (canAttackAtLine(this, enemy, board)) return true
    if (canAttackAtColumn(this, enemy, board)) return true
    if (canAttackAtDiagonal(this, enemy, board)) return true
    return false
  }

  toString(): string {
    if (this.color === 'white') return '♕'
    return '♛'
  }
}

export default Queen