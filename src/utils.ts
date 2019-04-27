import Piece from './Piece'

export function canAttackAtLine(me: Piece, enemy: Piece, board: number[][]): boolean {
  if (me.line !== enemy.line) return false

  const start = Math.min(me.column, enemy.column)
  const end = Math.max(me.column, enemy.column)
  for (let i = start + 1; i <= end - 1; i++) {
    if (board[me.line][i] >= 0) return false
  }
  return true
}

export function canAttackAtColumn(me: Piece, enemy: Piece, board: number[][]): boolean {
  if (me.column !== enemy.column) return false
  const start = Math.min(me.line, enemy.line)
  const end = Math.max(me.line, enemy.line)
  for (let i = start + 1; i <= end - 1; i++) {
    if (board[i][me.column] >= 0) return false
  }
  return true
}

export function canAttackAtDiagonal(me: Piece, enemy: Piece, board: number[][]): boolean {
  if (Math.abs(me.line - enemy.line) !== Math.abs(me.column - enemy.column)) {
    return false
  }
  const startX = Math.min(me.line, enemy.line)
  const startY = Math.min(me.column, enemy.column)
  const endX = Math.max(me.line, enemy.line)
  const endY = Math.max(me.column, enemy.column)
  if (enemy.line - me.line === enemy.column - me.column) {
    for (let i = startX + 1, j = startY + 1; i <= endX - 1; i++ , j++) {
      if (board[i][j] >= 0) return false
    }
  }
  else {
    for (let i = startX + 1, j = endY - 1; i <= endX - 1; i++ , j--) {
      if (board[i][j] >= 0) return false
    }
  }
  return true
}