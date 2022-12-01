<template>
  <div class="app-index" :class="[$route.path === '/battle' && 'battle']">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app-index'
};
</script>

<style lang="scss" scoped>
.app-index {
  background: url('@/assets/bg.png') no-repeat center center;
  box-sizing: border-box;
  height: 48px * 13;
  width: 48px * 23;
  display: flex;
  position: relative;
  &.battle {
    background-image: none;
    background-color: #000;
  }
}
</style>
