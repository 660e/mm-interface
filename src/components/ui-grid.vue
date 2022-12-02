<template>
  <div :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ui-grid',
  props: {
    grid: {
      type: Array,
      default: () => [1, 1]
    }
  },
  computed: {
    style() {
      return {
        display: 'grid',
        grid: `repeat(${this.grid[0]}, 1fr) / repeat(${this.grid[1]}, 1fr)`
      };
    }
  }
};
</script>
