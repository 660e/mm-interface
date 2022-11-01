<template>
  <div class="ui-item" :class="{ clickable }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ui-item',
  props: {
    clickable: Boolean
  }
};
</script>

<style lang="scss" scoped>
.ui-item {
  height: $lg;
  padding: $sm;
  white-space: pre;
  &.clickable:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  * {
    white-space: pre;
  }
}
</style>
