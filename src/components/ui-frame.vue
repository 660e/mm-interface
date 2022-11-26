<template>
  <div class="ui-frame">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ui-frame'
};
</script>

<style lang="scss" scoped>
.ui-frame {
  background-color: rgba(29, 29, 29, 160/255);
  border: 2px $grey solid;
  backdrop-filter: blur(2px);
  box-sizing: border-box;
  padding: $md;
}
</style>
