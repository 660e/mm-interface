<template>
  <div class="index">
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
  color: $white;
  width: $xl * 17;
  height: $xl * 13;
  font-size: $lg;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
</style>
