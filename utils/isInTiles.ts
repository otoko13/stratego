export default function (tileSet: Position[], tile: Position) {
  return tileSet.some((t) => t.column === tile.column && t.row === tile.row);
}
