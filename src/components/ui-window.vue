<template>
  <div class="ui-window" :style="{ borderWidth: border.map(e => `${e}px`).join(' ') }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ui-window',
  props: {
    border: {
      type: Array,
      default: () => [1, 1, 1, 1]
    }
  }
};
</script>

<style lang="scss" scoped>
.ui-window {
  border: $border solid;
  background-color: $dark;
  backdrop-filter: blur($gap);
  box-sizing: border-box;
  padding: $padding;
}
</style>
