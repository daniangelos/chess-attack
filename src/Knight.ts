import Piece from "./Piece";

class Knight extends Piece {
  canAttack(enemy: Piece): boolean {
    if (this.color === enemy.color) return false
    const deltaX = Math.abs(this.line - enemy.line)
    const deltaY = Math.abs(this.column - enemy.column)
    return (deltaX === 2 && deltaY === 1) || (deltaX === 1 && deltaY === 2)
  }

  toString(): string {
    if (this.color === 'white') return '♘'
    return '♞'
  }
}

export default Knight