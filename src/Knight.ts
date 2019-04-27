import Piece from "./Piece";

class Knight extends Piece {
  canAttack(enemy: Piece): boolean {
    const delta = [[1, 2], [1, -2], [-1, 2], [-1, -2],
    [2, 1], [2, -1], [-2, 1], [-2, -1]]

    let reachable = false

    delta.forEach(d => {
      const newX = this.x + d[0]
      const newY = this.y + d[1]

      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8
        && enemy.x === newX && enemy.y === newY)
        reachable = true
    })
    return (
      this.isWhite !== enemy.isWhite
      && reachable
    )
  }

  toString(): string {
    if (this.isWhite) return '♘'
    return '♞'
  }
}

export default Knight