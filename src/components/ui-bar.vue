<template>
  <div class="ui-bar" :class="{ empty }">
    <div>
      <span>{{ type.toUpperCase() }}</span>
      <span>{{ value }}/9999</span>
    </div>
    <div :class="[type]">
      <span :style="{ width: `${(value / 9999) * 100}%` }"></span>
    </div>
  </div>
</template>

<script>
import mockjs from 'mockjs';

export default {
  name: 'ui-bar',
  props: {
    empty: Boolean,
    type: String
  },
  data() {
    return {
      value: mockjs.Random.integer(1000, 9999)
    };
  }
};
</script>

<style lang="scss" scoped>
.ui-bar {
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
