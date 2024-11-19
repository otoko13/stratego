<script setup lang="ts">
interface Tile {
  row: number;
  column: number;
}

const tiles: Tile[] = Array.from({ length: 100 }).map((_val, index) => ({
  column: (index % 10) + 1,
  row: Math.floor(index / 10) + 1,
}));
</script>

<template>
  <div class="arena">
    <ArenaTile
      v-for="tile in tiles"
      :key="`[${tile.row},${tile.column}]`"
      :column="tile.column"
      :row="tile.row"
    />
  </div>
</template>

<style lang="less" scoped>
.arena {
  position: relative;
  height: 100%;
}
</style>
