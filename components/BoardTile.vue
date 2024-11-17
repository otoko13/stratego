<script setup lang="ts">
const props = defineProps<{
  row: number;
  column: number;
}>();

const CELL_WIDTH = 80;
const cellWidthStyleProp = `${CELL_WIDTH}px`;

const leftStyleProp = computed(
  () => `${((props.column - 1) % 10) * CELL_WIDTH}px`
);
const topStyleProp = computed(() => `${((props.row - 1) % 10) * CELL_WIDTH}px`);
</script>

<template>
  <div class="board-tile">{{ row }}-{{ column }}</div>
</template>

<style lang="less" scoped>
.board-tile {
  width: v-bind("cellWidthStyleProp");
  height: v-bind("cellWidthStyleProp");
  border: 1px solid red;
  position: absolute;
  left: v-bind(leftStyleProp);
  top: v-bind(topStyleProp);
  box-sizing: border-box;
}
</style>
