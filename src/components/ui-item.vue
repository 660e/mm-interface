<template>
  <div class="ui-item" :class="{ clickable, 'no-padding': noPadding }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ui-item',
  props: {
    clickable: Boolean,
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
  &.no-padding {
    padding: 0;
  }
  * {
    white-space: pre;
  }
}
</style>
