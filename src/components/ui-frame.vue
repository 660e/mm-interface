<template>
  <div class="ui-frame" :class="{ 'no-padding': noPadding }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ui-frame',
  props: {
    noPadding: Boolean
  }
};
</script>

<style lang="scss" scoped>
.ui-frame {
  background-color: rgba(29, 29, 29, 160/255);
  border: 1px $grey solid;
  backdrop-filter: blur(4px);
  box-sizing: border-box;
  padding: $md;
  &.no-padding {
    padding: 0;
  }
}
</style>
