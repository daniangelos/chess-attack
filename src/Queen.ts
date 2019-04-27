import Piece from "./Piece";

class Queen extends Piece {
  canAttack(enemy: Piece): boolean {
    return !!enemy
  }

  toString() {
    if (this.isWhite) {
      return '♕'
    }
    return '♛'
  }
}

export default Queen