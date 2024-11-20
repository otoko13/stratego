<template>
  <div class="fullpage-layout">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
  .fullpage-layout {
    padding: 24px;
    height: 100vh;
    min-height: 800px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: absolute;
    box-sizing: border-box;
  }
</style>
