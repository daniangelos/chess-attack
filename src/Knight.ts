import Piece from "./Piece";

class Knight extends Piece {
  canAttack(enemy: Piece): boolean {
    if (this.color === enemy.color) return false
    const delta = [[1, 2], [1, -2], [-1, 2], [-1, -2],
    [2, 1], [2, -1], [-2, 1], [-2, -1]]

    let reachable = false

    delta.forEach(d => {
      const newLine = this.line + d[0]
      const newColumn = this.column + d[1]

      if (newLine >= 0 && newLine < 8 && newColumn >= 0 && newColumn < 8
        && enemy.line === newLine && enemy.column === newColumn)
        reachable = true
    })
    return reachable
  }

  toString(): string {
    if (this.color === 'white') return '♘'
    return '♞'
  }
}

export default Knight