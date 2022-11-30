<template>
  <div class="ui-bar">
    <div class="flex justify-between">
      <span>{{ type.toUpperCase() }}</span>
      <span>{{ Math.ceil(Math.random() * 9999) }}/9999</span>
    </div>
    <div class="col flex" :class="[type]">
      <span :style="{ width: `${Math.ceil(Math.random() * 50) + 40}%` }"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-bar',
  props: {
    type: String
  }
};
</script>

<style lang="scss" scoped>
.ui-bar {
  font-size: $md + $sm;
  height: $lg;
  display: flex;
  flex-direction: column;
  & > div:last-child {
    border: 1px $dark solid;
    box-sizing: border-box;
    &.hp {
      background-color: #ef0000;
      span {
        background-color: #7bff73;
      }
    }
    &.sp {
      background-color: #ef0000;
      span {
        background-color: #fff76b;
      }
    }
  }
}
</style>
