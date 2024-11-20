<script setup lang="ts">
  import { onMounted } from "vue";

  const arenaComponentRef = ref();
  const componentHeight = ref();
  const painted = ref(false);
  const soldierActivated = ref(false);
  const soldierPosition = ref<Position>({
    column: 3,
    row: 3,
  });

  const recalculateComponentHeight = () => {
    componentHeight.value = arenaComponentRef.value.clientHeight;
    painted.value = true;
  };

  const tileDimension = computed(() => {
    const value = (componentHeight?.value ?? 0) / 10;
    return value;
  });

  const movableSpots = computed(() => {
    if (!soldierActivated.value) {
      return [];
    }

    const possibleMoves: Position[] = [];
    if (soldierPosition.value.row !== 1) {
      possibleMoves.push({
        row: soldierPosition.value.row - 1,
        column: soldierPosition.value.column,
      });
    }

    if (soldierPosition.value.row !== 10) {
      possibleMoves.push({
        row: soldierPosition.value.row + 1,
        column: soldierPosition.value.column,
      });
    }

    if (soldierPosition.value.column !== 1) {
      possibleMoves.push({
        row: soldierPosition.value.row,
        column: soldierPosition.value.column - 1,
      });
    }

    if (soldierPosition.value.column !== 10) {
      possibleMoves.push({
        row: soldierPosition.value.row,
        column: soldierPosition.value.column + 1,
      });
    }

    return possibleMoves;
  });

  onMounted(() => {
    window.addEventListener("resize", recalculateComponentHeight);
    recalculateComponentHeight();
  });

  const activateSoldier = () => {
    soldierActivated.value = !soldierActivated.value;
  };

  const moveSoldier = (row: number, column: number) => {
    if (!isMoveTarget({ row, column })) {
      return;
    }
    soldierPosition.value = {
      row,
      column,
    };
    soldierActivated.value = false;
  };

  const isMoveTarget = (tile: Position) =>
    movableSpots.value.some(
      (spot: Position) => spot.column === tile.column && spot.row === tile.row
    );

  const tiles: Position[] = Array.from({ length: 100 }).map((_val, index) => ({
    column: (index % 10) + 1,
    row: Math.floor(index / 10) + 1,
  }));

  const widthStyle = computed(() => `${componentHeight?.value ?? 0}px`);
</script>

<template>
  <div
    ref="arenaComponentRef"
    class="arena"
    :style="{
      width: widthStyle,
      opacity: painted ? 1 : 0,
    }"
  >
    <ArenaTile
      v-for="tile in tiles"
      :key="`[${tile.row},${tile.column}]`"
      :column="tile.column"
      :row="tile.row"
      :moveTarget="isMoveTarget(tile)"
      @move="() => moveSoldier(tile.row, tile.column)"
    />
    <Soldier
      :row="soldierPosition.row"
      :column="soldierPosition.column"
      side="red"
      :dead="false"
      :tileDimension="tileDimension"
      :v-if="tileDimension > 0"
      @click="activateSoldier"
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
    position: relative;
  }
</style>
