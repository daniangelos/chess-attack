import ChessBoard from "./src/Board";
import Queen from "./src/Queen";
import Piece from "./src/Piece";

describe('Board', () => {
  it('adds a new piece to a chess board', () => {
    const chessboard = new ChessBoard()
    const piece = new Queen('black', '♛')
    chessboard.addPiece(piece, 1, 2)
    expect(chessboard.pieces.length).toEqual(1)
    console.log(chessboard.toString())
  })
})

describe('Piece', () => {
  describe('Queen', () => {
    let chessboard: ChessBoard
    beforeEach(() => {
      chessboard = new ChessBoard()
    })

    afterEach(() => console.log(chessboard.toString()))

    describe('is a friend', () => {
      it('cannot attack a friend', () => {
        const piece = new Queen('black', '♛')
        const enemy = new Queen('black', '♛')
        chessboard.addPiece(piece, 1, 2)
        chessboard.addPiece(enemy, 6, 2)
        expect(piece.canAttack(enemy, chessboard.board)).toBeFalsy()
      })
    })

    describe('is an enemy', () => {
      let piece: Piece
      let enemy: Piece
      beforeEach(() => {
        piece = new Queen('black', '♛')
        enemy = new Queen('blank', '♕')
      })

      it('can attack an enemy on y axis', () => {
        chessboard.addPiece(piece, 1, 2)
        chessboard.addPiece(enemy, 6, 2)
        expect(piece.canAttack(enemy, chessboard.board)).toBeTruthy()
      })

      it('can attack an enemy on x axis', () => {
        chessboard.addPiece(piece, 1, 2)
        chessboard.addPiece(enemy, 1, 4)
        expect(piece.canAttack(enemy, chessboard.board)).toBeTruthy()
      })

      it('can attack an enemy on diagonal axis', () => {
        chessboard.addPiece(piece, 1, 1)
        chessboard.addPiece(enemy, 3, 3)
        expect(piece.canAttack(enemy, chessboard.board)).toBeTruthy()
      })


      it('can attack an enemy on the other diagonal axis', () => {
        chessboard.addPiece(piece, 5, 1)
        chessboard.addPiece(enemy, 3, 3)
        expect(piece.canAttack(enemy, chessboard.board)).toBeTruthy()
      })
    })
  })
})