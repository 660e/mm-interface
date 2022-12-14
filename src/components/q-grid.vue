<template>
  <div class="q-grid" :style="style" :class="{ hoverable }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'q-grid',
  props: {
    grid: {
      type: Array,
      default: () => [1, 1]
    },
    column: Boolean,
    hoverable: Boolean
  },
  computed: {
    style() {
      return {
        grid: `repeat(${this.grid[0]}, 1fr) / repeat(${this.grid[1]}, 1fr)`,
        gridAutoFlow: this.column ? 'column' : 'auto'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.q-grid {
  display: grid;
  &.hoverable:hover {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1 - $opacity));
  }
}
</style>
