<template>
  <div class="col flex justify-between">
    <div class="w-150 flex column justify-center">
      <ui-frame>
        <ui-item clickable>传真</ui-item>
        <ui-item clickable>乘降</ui-item>
        <ui-item clickable>道具</ui-item>
        <ui-item clickable>装备</ui-item>
        <ui-item clickable>状态</ui-item>
        <ui-item clickable>战车</ui-item>
        <ui-item clickable>选项</ui-item>
      </ui-frame>
    </div>
    <div class="w-250 flex">
      <ui-frame class="col">
        <ui-item class="text-right">{{ Math.ceil(Math.random() * 100000000) }}G</ui-item>
        <ui-item />
        <template v-for="(a, i) in actors[0]" :key="i">
          <ui-item class="flex justify-between">
            <span>{{ a }}</span>
            <span>LV.{{ Math.ceil(Math.random() * 90) + 10 }}</span>
          </ui-item>
          <div class="flex">
            <div class="face" :class="[`face-${i + 1}-1`]"></div>
            <ui-item class="col"><ui-bar type="hp" /></ui-item>
          </div>
          <div class="flex">
            <div class="face" :class="[`face-${i + 1}-2`]"></div>
            <ui-item class="col"><ui-bar type="sp" /></ui-item>
          </div>
        </template>
      </ui-frame>
    </div>
  </div>
</template>

<script>
import data from '../views/data.json';

export default {
  name: 'scene-menu',
  data() {
    return {
      actors: data.actors
    };
  }
};
</script>
