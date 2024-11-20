<script setup lang="ts">
  const props = defineProps<{
    row: number;
    column: number;
    moveTarget?: boolean;
    isLake?: boolean;
  }>();

  defineEmits(["move"]);

  const moveTargetClass = ref("move-target");
  const lakeClass = ref("is-lake");

  /* Style related computations */
  const displayRow = computed(() => 10 - props.row + 1);
  const borderRightWidth = computed(() => (props.column === 10 ? "1px" : 0));
  const borderBottomWidth = computed(() => (props.row === 1 ? "1px" : 0));
</script>

<template>
  <div
    :class="[
      { [moveTargetClass]: props.moveTarget, [lakeClass]: props.isLake },
      'arena-tile',
    ]"
    @click="$emit('move')"
  >
    {{ row }}-{{ column }}
  </div>
</template>

<style lang="less" scoped>
  .arena-tile {
    border: 1px solid black;
    border-right-width: v-bind("borderRightWidth");
    border-bottom-width: v-bind("borderBottomWidth");
    grid-row: v-bind("displayRow");
    grid-column: v-bind("props.column");
    gap: 0;

    &.move-target {
      cursor: pointer;
      background-color: fade(red, 20%);
    }

    &.is-lake {
      cursor: default;
      background-color: #9ec0ff;
    }
  }
</style>
