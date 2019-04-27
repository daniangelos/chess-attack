import Piece from "./Piece"

class Queen extends Piece {
  canAttack(enemy: Piece, board: number[][]): boolean {

    if (!enemy) return false

    if (this.shareLine(enemy.line)) return true

    if (this.shareColumn(enemy.column)) return true

    if (board) return true

    return false
  }

  shareDiagonal(line: number, column: number): boolean {
    const subLine = this.line - line
    const subColumn = this.column - column
    if (subLine === subColumn) {
      return true
    }
    return false
  }

  shareLine(line: number): boolean {
    return this.line === line
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