<template>
  <div v-if="['inn'].includes(command)" class="ui-popup">
    <ui-window class="text-center" style="width: 350px">
      <ui-item>住宿</ui-item>
      <hr class="q-mt q-mb" />
      <ui-item>金额：100G</ui-item>
      <ui-item>要住宿吗？</ui-item>
      <div class="button">
        <span>是</span>
        <span>否</span>
      </div>
    </ui-window>
  </div>
</template>

<script>
export default {
  name: 'ui-popup',
  props: {
    command: String
  }
};
</script>

<style lang="scss" scoped>
.ui-popup {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  .ui-item:first-child {
    font-size: 24px;
  }
  .button {
    padding: $padding;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      display: block;
      border: $border solid;
      background-color: $dark;
      box-sizing: border-box;
      padding: $padding;
      margin-bottom: $gap;
      width: 120px;
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 1 - $opacity);
      }
    }
  }
}
</style>
