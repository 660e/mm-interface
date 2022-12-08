<template>
  <div class="ui-thead">
    <div v-for="t in th" :key="t" class="text-negative">{{ t }}</div>
  </div>
</template>

<script>
export default {
  name: 'ui-thead',
  props: {
    th: {
      type: Array,
      default: () => ['-']
    }
  }
};
</script>

<style lang="scss" scoped>
.ui-thead {
  padding: $padding 0;
  display: flex;
  div {
    background-color: $dark;
    box-sizing: border-box;
    font-size: $size-12;
    text-align: right;
    padding: 2px $padding;
    margin-left: 1px;
    width: 99px;
    &:first-child {
      flex: 1;
      text-align: left;
      padding-left: $padding;
      margin-left: 0;
      width: auto;
    }
  }
}
</style>
