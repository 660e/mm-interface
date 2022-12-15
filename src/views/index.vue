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
  background: no-repeat center center;
  background-image: $bg;
  height: $tile * 13;
  width: $tile * 23;
  display: flex;
  position: relative;
  &.battle {
    background-image: none;
    background-color: #000;
  }
}
</style>
