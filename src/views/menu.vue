<template>
  <div class="col flex" style="padding-top: 80px">
    <div class="col">
      <ui-window class="w-150">
        <ui-item>地图</ui-item>
        <ui-item>乘降</ui-item>
        <ui-item @click="scene = 3" hoverable>道具</ui-item>
        <ui-item @click="scene = 4" hoverable>装备</ui-item>
        <ui-item>选项</ui-item>
      </ui-window>
    </div>
    <div v-if="[3, 4].includes(scene)">
      <ui-window>
        <ui-actor focusable />
        <ui-actor :type="[3, 2]" class="q-mt" focusable />
        <ui-actor v-for="n in 4" :key="n" :type="[2, n]" class="q-mt" focusable />
      </ui-window>
    </div>
  </div>
  <menu-item v-if="scene === 3" />
  <menu-equip v-if="scene === 4" />
</template>

<script>
import MenuItem from './menus/item.vue';
import MenuEquip from './menus/equip.vue';

export default {
  name: 'scene-menu',
  components: { MenuItem, MenuEquip },
  data() {
    return {
      scene: 4
    };
  }
};
</script>
