<template>
  <div class="ui-item" :class="{ clickable, focusable, 'no-padding': noPadding }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ui-item',
  props: {
    clickable: Boolean,
    focusable: Boolean,
    noPadding: Boolean
  }
};
</script>

<style lang="scss" scoped>
.ui-item {
  min-height: $lg;
  padding: $md;
  white-space: pre;
  &.clickable:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &.focusable {
    opacity: 0.3;
    &:hover {
      opacity: 1;
    }
  }
  &.no-padding {
    padding: 0;
  }
  * {
    white-space: pre;
  }
}
</style>
