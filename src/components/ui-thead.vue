<template>
  <div class="ui-thead">
    <div v-for="(t, i) in th" :key="i" :style="style(i)" class="text-negative">{{ t }}</div>
  </div>
</template>

<script>
export default {
  name: 'ui-thead',
  props: {
    th: {
      type: Array,
      default: () => ['-']
    },
    width: {
      type: Array,
      default: () => [0]
    }
  },
  methods: {
    style(i) {
      return {
        flex: this.width[i] === 0 ? 1 : '0 1 auto',
        width: this.width[i] === 0 ? 'auto' : `${this.width[i] ? this.width[i] - 1 : 100}px`
      };
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
    font-size: 12px;
    text-align: right;
    padding: 2px $padding;
    margin-left: 1px;
    &:first-child {
      text-align: left;
      padding-left: $padding;
      margin-left: 0;
    }
  }
}
</style>
