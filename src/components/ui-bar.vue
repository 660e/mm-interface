<template>
  <div class="ui-bar">
    <div class="flex justify-between">
      <span>{{ type.toUpperCase() }}</span>
      <span v-if="type === 'exp'">{{ Math.floor(Math.random() * 123456) }}/999999</span>
      <span v-else>{{ Math.floor(Math.random() * 1234) }}/9999</span>
    </div>
    <div :class="[type]">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-bar',
  props: {
    type: {
      type: String,
      default: 'hp'
    }
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
    margin-top: 3px;
    flex: 1;
    display: flex;
    span {
      width: 50%;
    }
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
    &.exp {
      background-color: #003152;
      span {
        background-color: #73fff7;
      }
    }
  }
  & + .ui-bar {
    margin-left: $lg;
  }
}
</style>
