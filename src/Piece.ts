abstract class Piece {
  line: number
  column: number
  color: string

  constructor(line: number, column: number, color: string) {
    this.line = line
    this.column = column
    this.color = color
  }

  abstract canAttack(enemy: Piece, board: number[][]): boolean

  abstract toString(): string
}

export default Piece