import Piece from './Piece'

const BOARD_SIZE = 8

class ChessBoard {
  board: number[][] = []
  pieces: Piece[] = []

  constructor() {
    for (let i = 0; i < BOARD_SIZE; i++) {
      this.board[i] = []
      for (let j = 0; j < BOARD_SIZE; j++) {
        this.board[i][j] = -1
      }
    }
  }

  addPiece(newPiece: Piece) {
    this.pieces.push(newPiece)
    this.board[newPiece.line][newPiece.column] = this.pieces.length - 1
  }

  atPosition(line: number, column: number): Piece {
    const idx = this.board[line][column]
    if (idx == -1) {
      return null
    }
    return this.pieces[idx]
  }

  toString(): string {
    let board = ''
    let turn = false
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        if (turn) { board += '\x1b[47m' }
        else { board += '\x1b[45m' }
        if (this.board[i][j] === -1) { board += '  ' }
        else { board += '\x1b[30m' + this.pieces[this.board[i][j]].toString() + ' ' }
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