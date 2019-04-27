import Piece from "./Piece"
import { canAttackAtDiagonal } from "./utils"

class Bishop extends Piece {
  canAttack(enemy: Piece, board: number[][]): boolean {
    if (enemy.color === this.color) return false
    if (canAttackAtDiagonal(this, enemy, board)) return true
    return false
  }

  toString(): string {
    if (this.color === 'white') return '♗'
    return '♝'
  }

}

export default Bishop