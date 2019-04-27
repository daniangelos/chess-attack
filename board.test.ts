import ChessBoard from "./src/Board"
import Queen from "./src/Queen"
import Knight from "./src/Knight"
import Bishop from './src/Bishop'
import Rook from './src/Rook'
import Pawn from "./src/Pawn";
import King from "./src/King";

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

  it('cannot attack a piece that shares a line if another one is on the way', () => {
    const chessBoard = new ChessBoard()
    const whiteQueen = new Queen(4, 3, 'white')
    const blackQueen = new Queen(4, 7, 'black')
    const anotherBlackQueen = new Queen(4, 5, 'black')
    chessBoard.addPiece(whiteQueen)
    chessBoard.addPiece(blackQueen)
    chessBoard.addPiece(anotherBlackQueen)
    console.log(chessBoard.toString())
    expect(whiteQueen.canAttack(blackQueen, chessBoard.board)).toBe(false)
  })

  it('cannot attack a piece that shares a column if another one is on the way', () => {
    const chessBoard = new ChessBoard()
    const whiteQueen = new Queen(6, 7, 'white')
    const blackQueen = new Queen(1, 7, 'black')
    const anotherBlackQueen = new Queen(4, 7, 'black')
    chessBoard.addPiece(whiteQueen)
    chessBoard.addPiece(blackQueen)
    chessBoard.addPiece(anotherBlackQueen)
    console.log(chessBoard.toString())
    expect(whiteQueen.canAttack(blackQueen, chessBoard.board)).toBe(false)
  })

  it('cannot attack a piece that shares a main diagonal if another one is on the way', () => {
    const chessBoard = new ChessBoard()
    const whiteQueen = new Queen(2, 3, 'white')
    const blackQueen = new Queen(6, 7, 'black')
    const anotherBlackQueen = new Queen(3, 4, 'black')
    chessBoard.addPiece(whiteQueen)
    chessBoard.addPiece(blackQueen)
    chessBoard.addPiece(anotherBlackQueen)
    console.log(chessBoard.toString())
    expect(whiteQueen.canAttack(blackQueen, chessBoard.board)).toBe(false)
  })

  it('cannot attack a piece that shares a secondary diagonal if another one is on the way', () => {
    const chessBoard = new ChessBoard()
    const whiteQueen = new Queen(5, 5, 'white')
    const blackQueen = new Queen(7, 3, 'black')
    const anotherBlackQueen = new Queen(6, 4, 'black')
    chessBoard.addPiece(whiteQueen)
    chessBoard.addPiece(blackQueen)
    chessBoard.addPiece(anotherBlackQueen)
    console.log(chessBoard.toString())
    expect(whiteQueen.canAttack(blackQueen, chessBoard.board)).toBe(false)
  })

  it('can attack a piece that shares a secondary diagonal', () => {
    const chessBoard = new ChessBoard()
    const whiteQueen = new Queen(5, 5, 'white')
    const blackQueen = new Queen(7, 3, 'black')
    chessBoard.addPiece(whiteQueen)
    chessBoard.addPiece(blackQueen)
    console.log(chessBoard.toString())
    expect(whiteQueen.canAttack(blackQueen, chessBoard.board)).toBe(true)
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

describe('Bishop', () => {
  it('can attack a queen at same diagonal', () => {
    const queen = new Queen(1, 2, 'white')
    const bishop = new Bishop(4, 5, 'black')
    const chessBoard = new ChessBoard()
    chessBoard.addPiece(queen)
    chessBoard.addPiece(bishop)
    console.log(chessBoard.toString())
    expect(bishop.canAttack(queen, chessBoard.board)).toBe(true)
  })
})

describe('Rook', () => {
  it('can attack a queen at same column', () => {
    const queen = new Queen(1, 5, 'white')
    const rook = new Rook(4, 5, 'black')
    const chessBoard = new ChessBoard()
    chessBoard.addPiece(queen)
    chessBoard.addPiece(rook)
    console.log(chessBoard.toString())
    expect(rook.canAttack(queen, chessBoard.board)).toBe(true)
  })
})

describe('Pawn', () => {
  it('can attack a queen at right diagonal', () => {
    const queen = new Queen(5, 4, 'black')
    const pawn = new Pawn(6, 5, 'white')
    const chessBoard = new ChessBoard()
    chessBoard.addPiece(queen)
    chessBoard.addPiece(pawn)
    console.log(chessBoard.toString())
    expect(pawn.canAttack(queen, chessBoard.board)).toBe(true)
  })

  it('can attack a queen at right diagonal', () => {
    const queen = new Queen(6, 5, 'white')
    const pawn = new Pawn(5, 6, 'black')
    const chessBoard = new ChessBoard()
    chessBoard.addPiece(queen)
    chessBoard.addPiece(pawn)
    console.log(chessBoard.toString())
    expect(pawn.canAttack(queen, chessBoard.board)).toBe(true)
  })
})

describe('King', () => {
  it('can attack a queen at right diagonal', () => {
    const queen = new Queen(5, 4, 'black')
    const king = new King(6, 5, 'white')
    const chessBoard = new ChessBoard()
    chessBoard.addPiece(queen)
    chessBoard.addPiece(king)
    console.log(chessBoard.toString())
    expect(king.canAttack(queen, chessBoard.board)).toBe(true)
  })
})