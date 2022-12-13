<template>
  <div class="q-avatar" :class="{ focusable }" :style="style"></div>
</template>

<script>
export default {
  name: 'q-avatar',
  props: {
    focusable: Boolean,
    icon: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    style() {
      if (this.icon.length) {
        return {
          backgroundPositionX: `${32 * -this.icon[1]}px`,
          backgroundPositionY: `${32 * -this.icon[0]}px`
        };
      } else {
        return {
          backgroundColor: 'red',
          backgroundImage: 'none'
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.q-avatar {
  background-image: url('@/assets/actors.png');
  height: $avatar;
  width: $avatar;
  &.focusable {
    opacity: 1 - $opacity;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
