import Piece from "./Piece"

class Pawn extends Piece {

  constructor(line: number, column: number, color: string) {
    super(line, column, color)

  }
  canAttack(enemy: Piece, _board: number[][]): boolean {
    if (this.color === enemy.color) return false
    const right = this.column + 1
    const left = this.column - 1
    if (this.color === 'white') {
      return (enemy.line === this.line - 1 && (enemy.column === right || enemy.column === left))
    }
    return (enemy.line === this.line + 1 && (enemy.column === right || enemy.column === left))
  }

  toString(): string {
    if (this.color === 'white') return '♙'
    return '♟'
  }
}

export default Pawn