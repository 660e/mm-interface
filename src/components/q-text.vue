<template>
  <div class="q-text" :class="{ between, end, hoverable }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'q-text',
  props: {
    between: Boolean,
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
  &.end {
    justify-content: flex-end;
  }
}
</style>
