import Piece from "./Piece";

class Queen extends Piece {
  canAttack(enemy: Piece): boolean {
    return (
      (enemy.x === this.x
        || enemy.y === this.y
        || Math.abs(this.x - enemy.x) === Math.abs(this.y - enemy.y))
      && enemy.isWhite !== this.isWhite
    )
  }

  canAttackAtBoard(enemy: Piece, board: number[][]): boolean {
    if (this.canAttack(enemy)) {
      if (this.x === enemy.x) {
        const start = Math.min(this.y, enemy.y)
        const end = Math.max(this.y, enemy.y)
        for (let i = start + 1; i <= end - 1; i++) {
          if (board[this.x][i] >= 0) return false
        }
      }
      else if (this.y === enemy.y) {
        const start = Math.min(this.x, enemy.x)
        const end = Math.max(this.x, enemy.x)
        for (let i = start + 1; i <= end - 1; i++) {
          if (board[i][this.y] >= 0) return false
        }
      }
      else {
        const startX = Math.min(this.x, enemy.x)
        const startY = Math.min(this.y, enemy.y)
        const endX = Math.max(this.x, enemy.x)
        const endY = Math.max(this.y, enemy.y)
        if (enemy.x - this.x === enemy.y - this.y) {
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
      return true
    }
    return false
  }

  toString(): string {
    if (this.isWhite) return '♕'
    return '♛'
  }
}

export default Queen