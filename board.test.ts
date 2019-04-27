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

  it('Queen can attack in line', () => {
    const chessBoard = new ChessBoard()
    const queen = new Queen(2, 3, 'black')
    chessBoard.addPiece(queen)
    const queen2 = new Queen(2, 4, 'white')
    chessBoard.addPiece(queen2)

    console.log(chessBoard.toString())
    expect(queen.canAttack(queen2, chessBoard.board)).toBe(true)

  })

  it('Queen can attack in line same color', () => {
    const chessBoard = new ChessBoard()
    const queen = new Queen(2, 3, 'black')
    chessBoard.addPiece(queen)
    const queen2 = new Queen(2, 4, 'black')
    chessBoard.addPiece(queen2)

    console.log(chessBoard.toString())
    expect(queen.canAttack(queen2, chessBoard.board)).toBe(false)

  })

  it('Queen can attack in column', () => {
    const chessBoard = new ChessBoard()
    const queen = new Queen(3, 3, 'black')
    chessBoard.addPiece(queen)
    const queen2 = new Queen(2, 3, 'white')
    chessBoard.addPiece(queen2)


    console.log(chessBoard.toString())
    expect(queen.canAttack(queen2, chessBoard.board)).toBe(true)

  })

  it('Queen can attack in diagonal', () => {
    const chessBoard = new ChessBoard()
    const queen = new Queen(3, 3, 'black')
    chessBoard.addPiece(queen)
    const queen2 = new Queen(2, 2, 'white')
    chessBoard.addPiece(queen2)


    console.log(chessBoard.toString())
    expect(queen.canAttack(queen2, chessBoard.board)).toBe(true)

  })

  it('Queen can attack in diagonal', () => {
    const chessBoard = new ChessBoard()
    const queen = new Queen(2, 2, 'black')
    chessBoard.addPiece(queen)
    const queen2 = new Queen(3, 1, 'white')
    chessBoard.addPiece(queen2)


    console.log(chessBoard.toString())
    expect(queen.canAttack(queen2, chessBoard.board)).toBe(true)

  })


  it('Queen can attack in diagonal', () => {
    const chessBoard = new ChessBoard()
    const whiteQueen = new Queen(2, 2, 'white')
    chessBoard.addPiece(whiteQueen)
    const blackQueen = new Queen(2, 5, 'black')
    chessBoard.addPiece(blackQueen)
    const anotherBlackQueen = new Queen(2, 6, 'black')
    chessBoard.addPiece(anotherBlackQueen)


    console.log(chessBoard.toString())
    expect(whiteQueen.canAttack(anotherBlackQueen, chessBoard.board)).toBe(false)

  })

})