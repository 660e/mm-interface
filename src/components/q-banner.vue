<template>
  <div class="q-banner">
    <div v-for="t in th" :key="t" class="text-info">{{ t }}</div>
  </div>
</template>

<script>
export default {
  name: 'q-banner',
  props: {
    th: {
      type: Array,
      default: () => ['-']
    }
  }
};
</script>

<style lang="scss" scoped>
.q-banner {
  padding: $padding 0;
  display: flex;
  div {
    background-color: $dark;
    box-sizing: border-box;
    font-size: $size-12;
    height: $text;
    width: 99px;
    margin-left: 1px;
    padding: 0 $text 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &:first-child {
      flex: 1;
      justify-content: flex-start;
      padding: 0 0 0 $text;
      margin-left: 0;
      width: auto;
    }
  }
}
</style>
