<script setup lang="ts">
import { onMounted } from "vue";

const arenaComponentRef = ref();
const componentHeight = ref();
const painted = ref(false);

const recalculateComponentHeight = () => {
  componentHeight.value = `${arenaComponentRef.value.clientHeight}px`;
  painted.value = true;
};

onMounted(() => {
  window.addEventListener("resize", recalculateComponentHeight);
  recalculateComponentHeight();
});

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
  <div
    class="arena"
    ref="arenaComponentRef"
    :style="{ width: componentHeight, opacity: painted ? 1 : 0 }"
  >
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
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  grid-template-rows: repeat(10, minmax(0, 1fr));
  width: v-bind("componentHeight");
  height: 100%;
}
</style>
