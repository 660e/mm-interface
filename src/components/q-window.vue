<template>
  <div class="q-window" :class="{ dense }" :style="{ borderWidth: border.map(() => `${0}px`).join(' ') }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'q-window',
  props: {
    dense: Boolean,
    border: {
      type: Array,
      default: () => [0, 0, 0, 0]
    }
  }
};
</script>

<style lang="scss" scoped>
.q-window {
  background-color: $dark;
  backdrop-filter: blur($bit * 2);
  border: $border solid;
  box-sizing: border-box;
  padding: $padding $text;
  &.dense {
    padding: 0;
  }
}
</style>
