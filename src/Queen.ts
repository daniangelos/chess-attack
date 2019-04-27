import Piece from "./Piece";

class Queen extends Piece {

  canAttack(enemy: Piece, board: number[][]): boolean {
    if (this.color === enemy.color) return false
    if (this.line === enemy.line) {
      const start = Math.min(this.column, enemy.column)
      const end = Math.max(this.column, enemy.column)
      for (let i = start + 1; i <= end - 1; i++) {
        if (board[this.line][i] >= 0) return false
      }
    }
    else if (this.column === enemy.column) {
      const start = Math.min(this.line, enemy.line)
      const end = Math.max(this.line, enemy.line)
      for (let i = start + 1; i <= end - 1; i++) {
        if (board[i][this.column] >= 0) return false
      }
    }
    else if (Math.abs(this.line - enemy.line) === Math.abs(this.column - enemy.column)) {
      const startX = Math.min(this.line, enemy.line)
      const startY = Math.min(this.column, enemy.column)
      const endX = Math.max(this.line, enemy.line)
      const endY = Math.max(this.column, enemy.column)
      if (enemy.line - this.line === enemy.column - this.column) {
        for (let i = startX + 1, j = startY + 1; i <= endX - 1; i++ , j++) {
          if (board[i][j] >= 0) return false
        }
      }
      else {
        for (let i = startX + 1, j = endY - 1; i <= endX - 1; i++ , j--) {
          if (board[i][j] >= 0) return false
        }
      }
    }
    else return false
    return true
  }

  toString(): string {
    if (this.color === 'white') return '♕'
    return '♛'
  }
}

export default Queen