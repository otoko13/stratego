<script setup lang="ts">
const props = defineProps<{
  row: number;
  column: number;
}>();

const CELL_WIDTH = 80;
const cellWidthStyleProp = `${CELL_WIDTH}px`;

/* Style related computations */
const displayRow = computed(() => 10 - props.row + 1);
const borderRightWidth = computed(() => (props.column === 10 ? "1px" : 0));
const borderBottomWidth = computed(() => (props.row === 1 ? "1px" : 0));
</script>

<template>
  <div class="arena-tile">{{ row }}-{{ column }} Test</div>
</template>

<style lang="less" scoped>
.arena-tile {
  border: 1px solid black;
  border-right-width: v-bind("borderRightWidth");
  border-bottom-width: v-bind("borderBottomWidth");
  grid-row: v-bind("displayRow");
  grid-column: v-bind("props.column");
  gap: 0;
}
</style>
