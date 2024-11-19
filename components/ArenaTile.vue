<script setup lang="ts">
const props = defineProps<{
  row: number;
  column: number;
}>();

const CELL_WIDTH = 80;
const cellWidthStyleProp = `${CELL_WIDTH}px`;

const leftStyleProp = computed(() => `${(props.column - 1) * CELL_WIDTH}px`);
const topStyleProp = computed(() => `${(9 - (props.row - 1)) * CELL_WIDTH}px`);
</script>

<template>
  <div class="arena-tile">
    <!-- {{ row }}-{{ column }} -->
  </div>
</template>

<style lang="less" scoped>
.arena-tile {
  width: v-bind("cellWidthStyleProp");
  height: v-bind("cellWidthStyleProp");
  border: 1px solid black;
  position: absolute;
  left: v-bind(leftStyleProp);
  top: v-bind(topStyleProp);
}
</style>
