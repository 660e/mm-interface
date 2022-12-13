<template>
  <div class="w-250 flex">
    <div class="w-150">
      <br />
      <br />
      <br />
      <q-window dense><q-text @click="scene = 3" hoverable>道具</q-text></q-window>
    </div>
    <div></div>
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
