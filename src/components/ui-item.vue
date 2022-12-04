<template>
  <div class="ui-item" :class="{ between, hoverable }" :style="{ paddingLeft: icon ? '36px' : '10px' }">
    <div v-if="icon" class="icon" :style="style"></div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ui-item',
  props: {
    between: Boolean,
    hoverable: Boolean,
    icon: [Array, Boolean]
  },
  computed: {
    style() {
      return {
        backgroundColor: this.icon[0] ? 'transparent' : 'red',
        backgroundImage: this.icon[0] ? `url(${require('../assets/icons.png')})` : 'none',
        backgroundPositionX: `${(1 - this.icon[1]) * 16}px`,
        backgroundPositionY: `${(1 - this.icon[0]) * 16}px`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.ui-item {
  min-height: $size;
  font-size: $size;
  padding: $padding;
  position: relative;
  &.between {
    display: flex;
    justify-content: space-between;
  }
  & > .icon {
    height: $size;
    width: $size;
    position: absolute;
    top: $padding;
    left: $padding;
    z-index: 1;
  }
}
</style>
