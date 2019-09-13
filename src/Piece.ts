abstract class Piece {
  line: number
  column: number
  color: string
  whiteSymbol: string
  blackSymbol: string

  constructor(color: string, whiteSymbol: string, blackSymbol: string) {
    this.color = color
    this.whiteSymbol = whiteSymbol
    this.blackSymbol = blackSymbol
  }

  setPosition(line: number, column: number) {
    this.line = line
    this.column = column
  }

  toString(): string {
    if(this.color === 'white') {
      return this.whiteSymbol
    }
    return this.blackSymbol
  }

  abstract canAttack(enemy: Piece, board: number[][]): boolean
}

export default Piece