<template>
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
        <q-avatar v-show="[3].includes(scene)" :icon="[0, 2]" @click="$store.commit('active', 'item')" class="padding-b" focusable />
        <q-avatar v-show="[3].includes(scene)" :icon="[1, 2]" @click="$store.commit('active', 'important')" class="padding-b" focusable />
        <q-avatar
          v-show="[4, 5].includes(scene)"
          v-for="n in 3"
          :key="n"
          :icon="[n - 1, 0]"
          @click="$store.commit('active', 'actor')"
          :class="{ 'padding-b': [4].includes(scene) || n !== 3 }"
          focusable
        />
        <q-avatar
          v-show="[3, 4, 6].includes(scene)"
          v-for="n in 4"
          :key="n"
          :icon="[n - 1, 1]"
          :class="{ 'padding-b': n !== 4 }"
          @click="$store.commit('active', 'tank')"
          focusable
        />
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
      scene: 6
    };
  }
};
</script>
