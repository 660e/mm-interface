<template>
  <div v-if="command" class="ui-dialog">
    <div :class="[`w-${width}`]">
      <ui-border v-if="command === 'team'">
        <ui-grid :grid="[4, 2]" column>
          <ui-item v-for="a in actors[0]" :key="a" clickable>{{ a }}</ui-item>
          <div></div>
          <ui-item v-for="a in actors[1]" :key="a" clickable>{{ a }}</ui-item>
        </ui-grid>
      </ui-border>
      <ui-border v-if="command === 'confirm'" class="confirm">confirm</ui-border>
    </div>
  </div>
</template>

<script>
import data from '../views/data.json';

export default {
  name: 'ui-dialog',
  props: {
    command: String,
    text: String,
    width: {
      type: [Number, String],
      default: 9
    }
  },
  data() {
    return {
      actors: data.actors
    };
  }
};
</script>

<style lang="scss" scoped>
.ui-dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
