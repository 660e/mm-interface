<template>
  <div v-if="scene" class="scene">
    {{
      (() => {
        switch (scene) {
          case 1:
            return '地图';
          case 3:
            return '道具';
          case 4:
            return '装备';
          case 5:
            return '状态';
          case 6:
            return '车库';
        }
      })()
    }}
  </div>

  <div class="w-300 gap flex">
    <div class="col">
      <br />
      <br />
      <br />
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="scene = 1" hoverable>地图</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text>乘降</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="scene = 3" hoverable>道具</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="scene = 4" hoverable>装备</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="scene = 5" hoverable>状态</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="scene = 6" hoverable>车库</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text>选项</q-text></q-window>
    </div>
    <div v-if="[3, 4, 5, 6].includes(scene)">
      <br />
      <br />
      <br />
      <q-window class="padding-a" :border="[1, 1, 1, 1]">
        <q-avatar v-show="[3].includes(scene)" :icon="[0, 2]" @click="$store.commit('active', 'item')" focusable />
        <q-avatar v-show="[3].includes(scene)" :icon="[1, 2]" @click="$store.commit('active', 'important')" focusable />
        <q-avatar v-show="[4, 5].includes(scene)" v-for="n in 3" :key="n" :icon="[n - 1, 0]" @click="$store.commit('active', 'actor')" focusable />
        <q-avatar v-show="[3, 4, 6].includes(scene)" v-for="n in 4" :key="n" :icon="[n - 1, 1]" @click="$store.commit('active', 'tank')" focusable />
      </q-window>
    </div>
  </div>

  <div v-if="scene === 0" class="w-500 gap"></div>
  <menu-map v-if="scene === 1" />
  <menu-item v-if="scene === 3" />
  <menu-equip v-if="scene === 4" />
  <menu-status v-if="scene === 5" />
  <menu-assets v-if="scene === 6" />

  <menu-actor v-if="[0, 3].includes(scene)" />
</template>

<script>
import MenuActor from './actor.vue';
import MenuAssets from './assets.vue';
import MenuEquip from './equip.vue';
import MenuItem from './item.vue';
import MenuMap from './map.vue';
import MenuStatus from './status.vue';

export default {
  name: 'scene-menu',
  components: {
    MenuActor,
    MenuAssets,
    MenuEquip,
    MenuItem,
    MenuMap,
    MenuStatus
  },
  data() {
    return {
      scene: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.q-window > .q-avatar {
  margin-bottom: $padding;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
