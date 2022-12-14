<template>
  <div class="w-300 flex">
    <div class="col">
      <br />
      <br />
      <br />
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="scene = 3" hoverable>道具</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="scene = 4" hoverable>装备</q-text></q-window>
    </div>
    <div v-if="[3, 4].includes(scene)">
      <br />
      <br />
      <br />
      <q-window class="padding-a" :border="[1, 1, 1, 1]">
        <q-avatar v-show="[3].includes(scene)" :icon="[0, 2]" @click="$store.commit('active', 'item')" class="padding-b" focusable />
        <q-avatar v-show="[3].includes(scene)" :icon="[1, 2]" @click="$store.commit('active', 'important')" class="padding-b" focusable />
        <q-avatar
          v-show="[4].includes(scene)"
          v-for="n in 3"
          :key="n"
          :icon="[n - 1, 0]"
          @click="$store.commit('active', 'actor')"
          class="padding-b"
          focusable
        />
        <q-avatar
          v-show="[3, 4].includes(scene)"
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

  <div v-if="scene === 0" class="w-500 bit-x"></div>
  <menu-item v-if="scene === 3" />
  <menu-equip v-if="scene === 4" />

  <menu-actor v-if="[0, 3].includes(scene)" />
</template>

<script>
import MenuActor from './actor.vue';
import MenuEquip from './equip.vue';
import MenuItem from './item.vue';

export default {
  name: 'scene-menu',
  components: { MenuActor, MenuEquip, MenuItem },
  data() {
    return {
      scene: 4
    };
  }
};
</script>
