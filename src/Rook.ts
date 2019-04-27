import Piece from "./Piece"
import { canAttackAtLine, canAttackAtColumn } from "./utils"

class Bishop extends Piece {
  canAttack(enemy: Piece, board: number[][]): boolean {
    if (enemy.color === this.color) return false
    if (canAttackAtColumn(this, enemy, board)) return true
    if (canAttackAtLine(this, enemy, board)) return true
    return false
  }

  toString(): string {
    if (this.color === 'white') return '♖'
    return '♜'
  }

}

export default Bishop