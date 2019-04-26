abstract class Piece {
  x: number
  y: number
  isWhite: boolean

  constructor(x: number, y: number, color: string) {
    this.x = x
    this.y = y
    this.isWhite = color === 'white'
  }

  abstract canAttack(enemy: Piece): boolean
}

export default Piece