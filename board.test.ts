import ChessBoard from "./src/Board"
import Queen from "./src/Queen"

describe('Board', () => {
  it('renders board with queen', () => {
    const board = new ChessBoard()
    const queen = new Queen(0, 0, 'black')
    board.addPiece(queen)
    console.log(board.toString())
    expect(board.atPosition(queen.x, queen.y)).toBe(queen)
  })
})
