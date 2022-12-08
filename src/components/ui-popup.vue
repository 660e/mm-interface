<template>
  <div v-if="popup[2]" class="ui-popup">
    <ui-window class="w-350 text-center">
      <template v-if="popup[0]">
        <ui-item class="title">{{ popup[0] }}</ui-item>
        <hr class="q-mt q-mb" />
      </template>
      <ui-item v-for="p in popup[1]" :key="p">{{ p }}</ui-item>
      <div class="button">
        <span v-for="b in popup[2]" :key="b" @click="$emit('selected')">{{ b }}</span>
      </div>
    </ui-window>
  </div>
</template>

<script>
export default {
  name: 'ui-popup',
  emits: ['selected'],
  props: {
    popup: {
      type: Array,
      default: () => []
    }
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
  .title {
    font-size: $size-24;
  }
  .button {
    padding: $padding;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      display: block;
      border: 1px $border solid;
      background-color: $dark;
      box-sizing: border-box;
      font-size: $size-14;
      padding: $padding;
      margin-bottom: $gap;
      width: 50%;
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
