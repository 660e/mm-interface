<template>
  <div class="q-text" :class="{ between, dense, end, hoverable, icon }">
    <i v-if="icon" class="icon" :style="style"></i>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'q-text',
  props: {
    between: Boolean,
    dense: Boolean,
    end: Boolean,
    hoverable: Boolean,
    icon: [Array, Boolean]
  },
  computed: {
    style() {
      if (this.icon && this.icon.length) {
        return {
          backgroundImage: `url(${require('@/assets/icons.png')})`,
          backgroundPositionX: `${16 * -this.icon[0]}px`,
          backgroundPositionY: `${16 * -this.icon[1]}px`
        };
      } else {
        return {
          backgroundColor: 'red'
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.q-text {
  min-height: $text;
  font-size: $text;
  padding: $padding $text;
  display: flex;
  position: relative;
  &.between {
    justify-content: space-between;
  }
  &.dense {
    padding: 0;
  }
  &.end {
    justify-content: flex-end;
  }
  &.icon {
    padding-left: $text * 2 + $padding;
    & > i {
      height: $text;
      width: $text;
      position: absolute;
      top: $padding;
      left: $text;
      z-index: 1;
    }
  }
}
</style>
