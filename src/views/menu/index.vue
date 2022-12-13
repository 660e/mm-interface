<template>
  <div class="w-250 flex">
    <div class="col">
      <br />
      <br />
      <br />
      <q-window class="w-150" dense><q-text @click="scene = 3" hoverable>道具</q-text></q-window>
    </div>
    <div>
      <br />
      <br />
      <br />
      <q-window class="padding-a">
        <q-avatar :icon="[0, 2]" @click="$store.commit('active', 'item')" class="padding-b" focusable />
        <q-avatar :icon="[1, 2]" @click="$store.commit('active', 'important')" class="padding-b" focusable />
        <q-avatar
          v-for="(a, i) in $d.actors[1]"
          :key="i"
          :icon="[i, 1]"
          :class="{ 'padding-b': i !== $d.actors[1].length - 1 }"
          @click="$store.commit('active', 'tank')"
          focusable
        />
      </q-window>
    </div>
  </div>

  <menu-item v-if="scene === 3" />
  <div v-else class="w-500 gap-x"></div>

  <menu-actor v-if="[0, 3].includes(scene)" />
</template>

<script>
import MenuActor from './actor.vue';
import MenuItem from './item.vue';

export default {
  name: 'scene-menu',
  components: { MenuActor, MenuItem },
  data() {
    return {
      scene: 3
    };
  }
};
</script>
