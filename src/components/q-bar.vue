<template>
  <div class="q-bar">
    <div>
      <span>{{ label.toUpperCase() }}</span>
      <span>{{ value }}/99999</span>
    </div>
    <div :class="[label]">
      <span :style="{ width: `${(value / 99999) * 100}%` }"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'q-bar',
  props: {
    label: String
  },
  data() {
    return {
      value: this.$r(10000, 99999)
    };
  }
};
</script>

<style lang="scss" scoped>
.q-bar {
  display: flex;
  flex-direction: column;
  & > div:first-child {
    display: flex;
    justify-content: space-between;
  }
  & > div:last-child {
    flex: 1;
    border: 1px $dark solid;
    box-sizing: border-box;
    margin-top: $gap;
    display: flex;
    &.hp span {
      background-color: #166c18;
    }
    &.sp span {
      background-color: #005887;
    }
  }
}
</style>
