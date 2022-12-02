<template>
  <div class="col flex justify-between" style="padding-top: 80px">
    <div>
      <ui-window class="w-150">
        <ui-item>地图</ui-item>
        <ui-item>乘降</ui-item>
        <ui-item @click="scene = 3" hoverable>道具</ui-item>
        <ui-item>装备</ui-item>
        <ui-item>选项</ui-item>
      </ui-window>
    </div>
    <div v-if="[3].includes(scene)">
      <ui-window>
        <ui-actor focusable />
        <ui-actor :type="[3, 2]" class="q-mt" focusable />
        <ui-actor v-for="n in 4" :key="n" :type="[2, n]" class="q-mt" focusable />
      </ui-window>
    </div>
  </div>
  <div class="w-400 q-gap flex">
    <menu-items v-if="[3].includes(scene)" class="col" />
  </div>
  <div class="w-400 flex justify-end">
    <ui-window class="w-250"></ui-window>
  </div>
</template>

<script>
import MenuItems from './menus/items.vue';

export default {
  name: 'scene-menu',
  components: { MenuItems },
  data() {
    return {
      scene: 0
    };
  }
};
</script>
