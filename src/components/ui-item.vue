<template>
  <div class="ui-item" :class="{ hoverable }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ui-item',
  props: {
    icon: [Array, Boolean],
    hoverable: Boolean
  },
  mounted() {
    console.log(this.icon);
  }
};
</script>

<style lang="scss" scoped>
.ui-item {
  min-height: $size;
  font-size: $size;
  padding: $padding;
}
</style>
