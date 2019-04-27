import Piece from './Piece'

class ChessBoard {
  board: number[][] = []
  pieces: Piece[] = []

  constructor() {
    for (let i = 0; i < 8; i++) {
      this.board[i] = []
      for (let j = 0; j < 8; j++) {
        this.board[i][j] = -1
      }
    }
  }

  addPiece(newPiece: Piece) {
    this.pieces.push(newPiece)
    const idx = this.pieces.length - 1
    this.board[newPiece.x][newPiece.y] = idx
  }

  atPosition(x: number, y: number) {
    const idx = this.board[x][y]
    return this.pieces[idx]
  }

  toString(): string {
    let board = ''
    let turn = false
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (turn) { board += '\x1b[45m ' }
        else { board += '\x1b[46m' }
        if (this.board[i][j] === -1) { board += '  ' }
        else { board += this.pieces[this.board[i][j]].toString() }
        board += '\x1b[0m'
        turn = !turn
      }
      if (i < 7) { board += '\n' }
      turn = !turn
    }
    return board
  }
}

export default ChessBoard