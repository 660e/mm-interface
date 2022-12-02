<template>
  <div class="ui-thead">
    <div v-for="t in th" :key="t">{{ t }}</div>
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
      width: 60px;
    }
  }
}
</style>
