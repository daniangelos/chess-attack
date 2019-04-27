import Piece from "./Piece";

class King extends Piece {
  canAttack(enemy: Piece, _board: number[][]): boolean {
    if (this.color === enemy.color) return false
    return Math.abs(this.line - enemy.line) <= 1 && Math.abs(this.column - enemy.column) <= 1
  }

  toString(): string {
    if (this.color === 'white') return '♔'
    return '♚'
  }


}

export default King