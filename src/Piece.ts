abstract class Piece {
  line: number
  column: number
  color: string
  symbol: string

  constructor(color: string, symbol: string) {
    this.color = color
    this.symbol = symbol
  }

  setPosition(line: number, column: number) {
    this.line = line
    this.column = column
  }

  abstract canAttack(enemy: Piece, board: number[][]): boolean
}

export default Piece