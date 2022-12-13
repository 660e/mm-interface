<template>
  <div class="q-text" :class="{ between, dense, end, hoverable }">
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
    hoverable: Boolean
  }
};
</script>

<style lang="scss" scoped>
.q-text {
  min-height: $text;
  font-size: $text;
  padding: $padding $text;
  display: flex;
  &.between {
    justify-content: space-between;
  }
  &.dense {
    padding: 0;
  }
  &.end {
    justify-content: flex-end;
  }
  &.hoverable:hover {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1 - $opacity));
  }
}
</style>
