<template>
  <div v-if="content[2]" class="q-popup">
    <q-window :border="[1, 1, 1, 1]">
      <template v-if="content[0]">
        <q-text>
          <h4>{{ content[0] }}</h4>
        </q-text>
        <hr />
      </template>
      <q-text v-for="c in content[1]" :key="c">{{ c }}</q-text>
      <div class="button">
        <div v-for="c in content[2]" :key="c" @click="$emit('selected')">{{ c }}</div>
      </div>
    </q-window>
  </div>
</template>

<script>
export default {
  name: 'q-popup',
  emits: ['selected'],
  props: {
    content: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.q-popup {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  & > .q-window {
    width: 300px;
    text-align: center;
    h4 {
      font-size: 20px;
    }
    .q-text {
      justify-content: center;
    }
    .button {
      padding: $padding 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        background-color: $dark;
        border: 1px $border solid;
        box-sizing: border-box;
        height: $avatar;
        width: 50%;
        margin-bottom: $padding;
        display: flex;
        justify-content: center;
        align-items: center;
        &:last-child {
          margin-bottom: 0;
        }
        &:hover {
          background-color: rgba(255, 255, 255, 1 - 0.618);
        }
      }
    }
  }
}
</style>
