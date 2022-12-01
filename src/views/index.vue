<template>
  <div class="index" :class="[$route.path === '/battle' && 'index-battle']">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app-index'
};
</script>

<style lang="scss" scoped>
.index {
  background: url('@/assets/bg.png') no-repeat center center;
  box-sizing: border-box;
  color: #fff;
  width: 48px * 23;
  height: 48px * 13;
  font-size: $lg;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  &.index-battle {
    background-image: none;
    background-color: #000;
  }
}
</style>
