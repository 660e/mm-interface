<template>
  <div class="q-text" :class="{ hoverable }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'q-text',
  props: {
    hoverable: Boolean
  }
};
</script>

<style lang="scss" scoped>
.q-text {
  min-height: $text;
  font-size: $text;
  padding: $padding $text;
}
</style>
