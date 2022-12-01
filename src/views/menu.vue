<template>
  <div class="col flex justify-between" style="padding-top: 60px">
    <div>
      <ui-window class="w-150">
        <ui-item>地图</ui-item>
        <ui-item>乘降</ui-item>
        <ui-item hoverable>道具</ui-item>
        <ui-item>装备</ui-item>
        <ui-item>选项</ui-item>
      </ui-window>
    </div>
    <div>
      <ui-window>
        <ui-actor focusable />
        <ui-actor :type="[3, 2]" class="q-mt" focusable />
        <ui-actor v-for="(a, i) in actors[1]" :key="i" :type="[2, i + 1]" class="q-mt" focusable />
      </ui-window>
    </div>
  </div>
  <div class="w-400"></div>
  <div class="w-400 flex justify-end">
    <ui-window class="w-250"></ui-window>
  </div>
</template>

<script>
import data from '@/data.json';

export default {
  name: 'scene-menu',
  data() {
    return {
      actors: data.actors
    };
  }
};
</script>
