<template>
  <div class="ui-scene w-282">{{ scene }}</div>
</template>

<script>
export default {
  name: 'ui-scene',
  props: {
    scene: String
  }
};
</script>

<style lang="scss" scoped>
.ui-scene {
  background-image: linear-gradient(to right, rgba(0, 0, 0, $opacity), rgba(0, 0, 0, 0));
  box-sizing: border-box;
  font-size: $size-24;
  padding: $padding * 2;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>
