<template>
  <div class="w-250 flex">
    <div class="w-150">
      <br />
      <br />
      <br />
      <q-window dense><q-text hoverable>道具</q-text></q-window>
    </div>
    <div></div>
  </div>
  <div class="w-500 gap-x"></div>
  <menu-actor />
</template>

<script>
import MenuActor from './actor.vue';

export default {
  name: 'scene-menu',
  components: { MenuActor }
};
</script>
