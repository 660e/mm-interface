<template>
  <div :style="style">
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
    column: Boolean
  },
  computed: {
    style() {
      return {
        display: 'grid',
        grid: `repeat(${this.grid[0]}, 1fr) / repeat(${this.grid[1]}, 1fr)`,
        gridAutoFlow: this.column ? 'column' : 'auto'
      };
    }
  }
};
</script>
