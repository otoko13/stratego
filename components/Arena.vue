<script setup lang="ts">
  import { onMounted } from "vue";

  const tiles: Position[] = Array.from({ length: 100 }).map((_val, index) => ({
    column: (index % 10) + 1,
    row: Math.floor(index / 10) + 1,
  }));

  const lakeTiles: Position[] = [
    { row: 5, column: 3 },
    { row: 5, column: 4 },
    { row: 5, column: 7 },
    { row: 5, column: 8 },
    { row: 6, column: 3 },
    { row: 6, column: 4 },
    { row: 6, column: 7 },
    { row: 6, column: 8 },
  ];

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

    const moveDown = {
      row: soldierPosition.value.row - 1,
      column: soldierPosition.value.column,
    };

    const moveUp = {
      row: soldierPosition.value.row + 1,
      column: soldierPosition.value.column,
    };

    const moveLeft = {
      row: soldierPosition.value.row,
      column: soldierPosition.value.column - 1,
    };

    const moveRight = {
      row: soldierPosition.value.row,
      column: soldierPosition.value.column + 1,
    };

    if (soldierPosition.value.row !== 1 && !isInTiles(lakeTiles, moveDown)) {
      possibleMoves.push(moveDown);
    }

    if (soldierPosition.value.row !== 10 && !isInTiles(lakeTiles, moveUp)) {
      possibleMoves.push(moveUp);
    }

    if (soldierPosition.value.column !== 1 && !isInTiles(lakeTiles, moveLeft)) {
      possibleMoves.push(moveLeft);
    }

    if (
      soldierPosition.value.column !== 10 &&
      !isInTiles(lakeTiles, moveRight)
    ) {
      possibleMoves.push(moveRight);
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
    if (!isInTiles(movableSpots.value, { row, column })) {
      return;
    }
    soldierPosition.value = {
      row,
      column,
    };
    soldierActivated.value = false;
  };

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
      :moveTarget="isInTiles(movableSpots, tile)"
      :isLake="isInTiles(lakeTiles, tile)"
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
