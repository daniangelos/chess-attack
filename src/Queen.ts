import Piece from "./Piece"

class Queen extends Piece {
  canAttack(enemy: Piece, board: number[][]): boolean {

    if (!enemy) return false

    if (enemy.color === this.color) return false

    if (this.shareLine(enemy.line, enemy.column, board)) return true

    if (this.shareColumn(enemy.column)) return true

    if (this.shareDiagonal(enemy.line, enemy.column)) return true

    console.log(board[0][0])

    return false
  }

  shareDiagonal(line: number, column: number): boolean {
    const subLine = this.line - line
    const subColumn = this.column - column
    if (Math.abs(subLine) === Math.abs(subColumn)) {
      return true
    }
    return false
  }

  shareLine(line: number, column: number, board: number[][]): boolean {
    const left = Math.min(this.column, column)
    const right = Math.max(this.column, column)

    if (this.line !== line) return false

    for (let i = left + 1; i < right; i++) {
      if (board[this.line][i] !== -1) return false
    }

    return true
  }

  shareColumn(column: number): boolean {
    return this.column === column
  }

  toString(): string {
    if (this.color === 'white') {
      return '♕'
    }
    return '♛'
  }
}

export default Queen