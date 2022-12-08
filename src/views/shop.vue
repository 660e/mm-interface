<template>
  <div class="w-282 flex" style="padding-top: 100px">
    <div class="col">
      <ui-window class="w-150">
        <template v-if="[1].includes(scene)">
          <ui-item @click="(command = 'buy'), (mode = null)" hoverable>买</ui-item>
          <ui-item @click="(command = 'sell'), (mode = null)" hoverable>卖</ui-item>
          <ui-item @click="reset" hoverable>离开商店</ui-item>
        </template>
        <template v-if="[2].includes(scene)">
          <ui-item @click="popup = ['住宿', ['金额：100G', '要住宿吗？'], ['是', '否']]" hoverable>住宿</ui-item>
          <ui-item @click="reset" hoverable>离开旅馆</ui-item>
        </template>
        <template v-if="[3].includes(scene)">
          <ui-item @click="command = 'bar'" hoverable>喝一杯</ui-item>
          <ui-item>闲聊</ui-item>
          <ui-item @click="reset" hoverable>离开酒吧</ui-item>
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
  <shop-bar v-else-if="command === 'bar'" />
  <div v-else class="w-530 q-gap-x"></div>

  <menu-actors class="w-282" :mode="mode" />
  <ui-popup :popup="popup" @selected="reset" />
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
      mode: null,
      popup: []
    };
  },
  methods: {
    reset() {
      this.command = null;
      this.mode = null;
      this.popup = [];
    }
  },
  watch: {
    '$route.params.id'(n) {
      this.scene = Number(n);
      this.reset();
    }
  }
};
</script>
