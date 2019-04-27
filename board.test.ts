import ChessBoard from "./src/Board";
import Queen from './src/Queen'

describe('Board', () => {
  it('renders a piece at board', () => {
    const chessBoard = new ChessBoard()
    const queen = new Queen(2, 3, 'black')
    chessBoard.addPiece(queen)
    console.log(chessBoard.toString())
    expect(chessBoard.atPosition(2, 3)).toBe(queen)
  })
})

describe('Piece can attack', () => {
  it('Queen cannot attack', () => {
    const chessBoard = new ChessBoard()
    const queen = new Queen(2, 3, 'black')
    //canAttack(enemy: Piece, board: number[][])

    chessBoard.addPiece(queen)
    console.log(chessBoard.toString())
    expect(queen.canAttack(null, chessBoard.board)).toBe(false)

  })


})