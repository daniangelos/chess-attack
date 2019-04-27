import ChessBoard from "./src/Board"
import Queen from "./src/Queen"
import Knight from "./src/Knight";

describe('Board', () => {
  it('renders board with queen', () => {
    const chessBoard = new ChessBoard()
    const queen = new Queen(0, 0, 'black')
    chessBoard.addPiece(queen)
    console.log(chessBoard.toString())
    expect(chessBoard.atPosition(queen.line, queen.column)).toBe(queen)
  })
})

describe('Queen', () => {
  it('can attack another piece', () => {
    const chessBoard = new ChessBoard()
    const whiteQueen = new Queen(2, 3, 'white')
    const blackQueen = new Queen(6, 7, 'black')
    chessBoard.addPiece(whiteQueen)
    chessBoard.addPiece(blackQueen)
    console.log(chessBoard.toString())
    expect(whiteQueen.canAttack(blackQueen, chessBoard.board)).toBe(true)
  })

  it('cannot attack another piece', () => {
    const chessBoard = new ChessBoard()
    const whiteQueen = new Queen(2, 3, 'white')
    const blackQueen = new Queen(6, 5, 'black')
    chessBoard.addPiece(whiteQueen)
    chessBoard.addPiece(blackQueen)
    console.log(chessBoard.toString())
    expect(whiteQueen.canAttack(blackQueen, chessBoard.board)).toBe(false)
  })

  it('cannot attack a friendly piece', () => {
    const chessBoard = new ChessBoard()
    const whiteQueen = new Queen(2, 3, 'white')
    const anotherWhiteQueen = new Queen(6, 3, 'white')
    chessBoard.addPiece(whiteQueen)
    chessBoard.addPiece(anotherWhiteQueen)
    console.log(chessBoard.toString())
    expect(whiteQueen.canAttack(anotherWhiteQueen, chessBoard.board)).toBe(false)
  })

  it('cannot attack a piece if another one is on the way', () => {
    const chessBoard = new ChessBoard()
    const whiteQueen = new Queen(2, 3, 'white')
    const blackQueen = new Queen(2, 5, 'black')
    const anotherBlackQueen = new Queen(2, 4, 'black')
    chessBoard.addPiece(whiteQueen)
    chessBoard.addPiece(blackQueen)
    chessBoard.addPiece(anotherBlackQueen)
    console.log(chessBoard.toString())
    expect(whiteQueen.canAttack(blackQueen, chessBoard.board)).toBe(false)
  })

  it('cannot attack a piece if another one is on the way', () => {
    const chessBoard = new ChessBoard()
    const whiteQueen = new Queen(0, 3, 'white')
    const blackQueen = new Queen(4, 7, 'black')
    const anotherBlackQueen = new Queen(2, 5, 'black')
    chessBoard.addPiece(whiteQueen)
    chessBoard.addPiece(blackQueen)
    chessBoard.addPiece(anotherBlackQueen)
    console.log(chessBoard.toString())
    expect(whiteQueen.canAttack(blackQueen, chessBoard.board)).toBe(false)
  })
})

describe('Knight', () => {
  it('can attack another piece', () => {
    const knight = new Knight(3, 4, 'white')
    const queen = new Queen(5, 5, 'black')
    const chessBoard = new ChessBoard()
    chessBoard.addPiece(knight)
    chessBoard.addPiece(queen)
    console.log(chessBoard.toString())
    expect(knight.canAttack(queen)).toBe(true)
  })

  it('cannot attack another piece', () => {
    const knight = new Knight(3, 4, 'white')
    const queen = new Queen(4, 5, 'black')
    const chessBoard = new ChessBoard()
    chessBoard.addPiece(knight)
    chessBoard.addPiece(queen)
    console.log(chessBoard.toString())
    expect(knight.canAttack(queen)).toBe(false)
  })
})