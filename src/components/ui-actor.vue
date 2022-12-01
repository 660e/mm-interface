<template>
  <div class="ui-actor" :class="{ focusable }" :style="style"></div>
</template>

<script>
export default {
  name: 'ui-actor',
  props: {
    focusable: Boolean,
    type: {
      type: Array,
      default: () => [3, 1]
    }
  },
  computed: {
    style() {
      return {
        backgroundPositionX: `${(1 - this.type[1]) * 32}px`,
        backgroundPositionY: `${(1 - this.type[0]) * 32}px`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.ui-actor {
  background-image: url('@/assets/actors.png');
  height: $size * 2;
  width: $size * 2;
}
</style>
