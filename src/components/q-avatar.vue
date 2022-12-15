<template>
  <div class="q-avatar" :class="{ focusable }" :style="style"></div>
</template>

<script>
export default {
  name: 'q-avatar',
  props: {
    focusable: Boolean,
    icon: [Array, Boolean]
  },
  computed: {
    style() {
      if (this.icon && this.icon.length) {
        return {
          backgroundImage: `url(${require('@/assets/actors.png')})`,
          backgroundPositionX: `${32 * -this.icon[0]}px`,
          backgroundPositionY: `${32 * -this.icon[1]}px`
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
.q-avatar {
  height: $avatar;
  width: $avatar;
  &.focusable {
    opacity: $opacity;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
