<template>
  <div class="w-282 flex" style="padding-top: 100px">
    <div class="col">
      <ui-window class="w-150">
        <template v-if="[1].includes(scene)">
          <ui-item @click="(command = 'buy'), (mode = null)" hoverable>买</ui-item>
          <ui-item @click="(command = 'sell'), (mode = null)" hoverable>卖</ui-item>
          <ui-item @click="(command = null), (mode = null)" hoverable>离开商店</ui-item>
        </template>
      </ui-window>
    </div>
    <div>
      <ui-window v-if="command === 'sell'">
        <ui-actor @click="mode = null" focusable />
        <ui-actor :icon="[3, 2]" @click="mode = 'actor'" class="q-mt" focusable />
        <ui-actor v-for="(a, i) in actors[1]" :key="i" :icon="[2, i + 1]" @click="mode = 'tank'" class="q-mt" focusable />
      </ui-window>
    </div>
  </div>

  <shop-item v-if="command === 'buy' || command === 'sell'" :command="command" :mode="mode" @mode="m => (mode = m)" />
  <div v-else class="w-530 q-gap-x"></div>

  <menu-actors class="w-282" :mode="mode" />
</template>

<script>
import data from '@/data.json';

export default {
  name: 'scene-shop',
  data() {
    return {
      actors: data.actors,
      scene: Number(this.$route.params.id),
      command: null,
      mode: null
    };
  },
  watch: {
    '$route.params.id'(n) {
      this.scene = Number(n);
      this.command = null;
      this.mode = null;
    }
  }
};
</script>
