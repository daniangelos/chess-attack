import ChessBoard from "./src/Board"
import Queen from "./src/Queen"
import Knight from "./src/Knight";

describe('Board', () => {
  it('renders board with queen', () => {
    const board = new ChessBoard()
    const queen = new Queen(0, 0, 'black')
    board.addPiece(queen)
    console.log(board.toString())
    expect(board.atPosition(queen.x, queen.y)).toBe(queen)
  })
})

describe('Queen', () => {
  it('can attack another piece', () => {
    const board = new ChessBoard()
    const whiteQueen = new Queen(2, 3, 'white')
    const blackQueen = new Queen(6, 7, 'black')
    board.addPiece(whiteQueen)
    board.addPiece(blackQueen)
    console.log(board.toString())
    expect(whiteQueen.canAttack(blackQueen)).toBe(true)
  })

  it('cannot attack another piece', () => {
    const board = new ChessBoard()
    const whiteQueen = new Queen(2, 3, 'white')
    const blackQueen = new Queen(6, 5, 'black')
    board.addPiece(whiteQueen)
    board.addPiece(blackQueen)
    console.log(board.toString())
    expect(whiteQueen.canAttack(blackQueen)).toBe(false)
  })

  it('cannot attack a friendly piece', () => {
    const board = new ChessBoard()
    const whiteQueen = new Queen(2, 3, 'white')
    const anotherWhiteQueen = new Queen(6, 3, 'white')
    board.addPiece(whiteQueen)
    board.addPiece(anotherWhiteQueen)
    console.log(board.toString())
    expect(whiteQueen.canAttack(anotherWhiteQueen)).toBe(false)
  })

  it('cannot attack a piece if another one is on the way', () => {
    const board = new ChessBoard()
    const whiteQueen = new Queen(2, 3, 'white')
    const blackQueen = new Queen(2, 5, 'black')
    const anotherBlackQueen = new Queen(2, 4, 'black')
    board.addPiece(whiteQueen)
    board.addPiece(blackQueen)
    board.addPiece(anotherBlackQueen)
    console.log(board.toString())
    expect(whiteQueen.canAttackAtBoard(blackQueen, board.board)).toBe(false)
  })

  it('cannot attack a piece if another one is on the way', () => {
    const board = new ChessBoard()
    const whiteQueen = new Queen(0, 3, 'white')
    const blackQueen = new Queen(4, 7, 'black')
    const anotherBlackQueen = new Queen(2, 5, 'black')
    board.addPiece(whiteQueen)
    board.addPiece(blackQueen)
    board.addPiece(anotherBlackQueen)
    console.log(board.toString())
    expect(whiteQueen.canAttackAtBoard(blackQueen, board.board)).toBe(false)
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