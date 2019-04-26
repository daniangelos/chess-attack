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

  toString(): string {
    let board = ''
    let turn = false
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (turn) { board += '\x1b[45m' }
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