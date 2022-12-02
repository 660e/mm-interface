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
    font-size: 12px;
    padding: 5px $padding;
    &:nth-child(1) {
      flex: 1;
    }
    &:nth-child(2) {
      margin-left: 1px;
      text-align: right;
      width: 60px;
    }
  }
}
</style>
