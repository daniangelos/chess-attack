import Piece from "./Piece";

class Queen extends Piece {
  canAttack(enemy: Piece): boolean {
    return !!enemy
  }

  toString(): string {
    if (this.isWhite) return '\x1b[30m♕'
    return '\x1b[30m♛'
  }
}

export default Queen