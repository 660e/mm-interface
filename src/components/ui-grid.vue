<template>
  <div class="ui-grid" :style="style">
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
    },
    gap: {
      type: Array,
      default: () => [0, 0]
    },
    column: Boolean
  },
  computed: {
    style() {
      return {
        grid: `repeat(${this.grid[0]}, 1fr) / repeat(${this.grid[1]}, 1fr)`,
        rowGap: `${this.gap[0]}px`,
        columnGap: `${this.gap[1]}px`,
        gridAutoFlow: this.column ? 'column' : 'auto'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.ui-grid {
  display: grid;
}
</style>
