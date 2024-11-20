<template>
  <div class="board">
    <ClientOnly fallback-tag="span" fallback="Loading your game...">
      <Arena />
    </ClientOnly>
  </div>
</template>

<style lang="less" scoped>
  .board {
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
