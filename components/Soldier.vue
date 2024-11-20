<script setup lang="ts">
  const props = defineProps<{
    row: number;
    column: number;
    side: Side;
    dead: boolean;
    tileDimension: number;
  }>();

  defineEmits(["click"]);

  /* Style related computations */
  const positionLeft = computed(() => {
    const left =
      props.tileDimension * (props.column - 1) + props.tileDimension * 0.1;
    return `${left}px`;
  });
  const positionTop = computed(() => {
    const top =
      props.tileDimension * (10 - props.row) + props.tileDimension * 0.1;
    return `${top}px`;
  });
  const height = computed(() => `${props.tileDimension * 0.8}px`);
</script>

<template>
  <button class="soldier" @click="$emit('click')"></button>
</template>

<style lang="less" scoped>
  .soldier {
    position: absolute;
    border-radius: 100%;
    background-color: v-bind("$props.side");
    height: v-bind("height");
    width: v-bind("height");
    left: v-bind("positionLeft");
    top: v-bind("positionTop");
    border: 1px solid black;
  }
</style>
