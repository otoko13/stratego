<script setup lang="ts">
interface BoardTile {
  row: number;
  column: number;
}

const tiles: BoardTile[] = Array.from({ length: 20 }).map((_val, index) => ({
  column: (index % 10) + 1,
  row: Math.floor(index / 10) + 1,
}));
</script>

<template>
  <div>
    <BoardTile
      v-for="tile in tiles"
      :key="`[${tile.row},${tile.column}]`"
      :column="tile.column"
      :row="tile.row"
    />
  </div>
</template>
