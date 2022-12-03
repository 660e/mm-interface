<template>
  <div class="ui-window">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ui-window'
};
</script>

<style lang="scss" scoped>
.ui-window {
  border: 1px $border solid;
  background-color: $dark;
  backdrop-filter: blur($gap);
  box-sizing: border-box;
  padding: $padding;
}
</style>
