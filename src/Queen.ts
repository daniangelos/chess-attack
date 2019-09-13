import Piece from "./Piece";

export default class Queen extends Piece {
  canAttack(enemy: Piece, board: number[][]): boolean {
    if (this.color === enemy.color) {
      return false
    }
    return this.attackOnAxis('x', enemy) || this.attackOnAxis('y', enemy) || this.attackOnDiagonal(enemy)
  }

  attackOnAxis(axis: string, enemy: Piece) : boolean {
    if(axis === 'x') {
      return (enemy.line == this.line)
    } else {
      return (enemy.column == this.column)
    }
  }

  attackOnDiagonal(enemy: Piece) : boolean {
    return Math.abs(enemy.column - this.column) === Math.abs(enemy.line - this.line)
  }
}