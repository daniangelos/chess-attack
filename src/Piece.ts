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
    this.line = line - 1
    this.column = column - 1
  }

  abstract canAttack(enemy: Piece, board: number[][]): boolean
}

export default Piece