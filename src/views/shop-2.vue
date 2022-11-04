<template>
  <div class="flex">
    <ui-border class="col">
      <ui-item>酒吧/旅馆</ui-item>
    </ui-border>
    <ui-border class="w-5">
      <ui-item class="flex justify-between">
        <div>G:</div>
        <div>{{ Math.floor(Math.random() * 123456789) }}</div>
      </ui-item>
    </ui-border>
  </div>
  <div class="col flex">
    <div class="w-5">
      <ui-border>
        <ui-item @click="scene = 'bar'" clickable>喝一杯</ui-item>
        <ui-item @click="scene = 'chat'" clickable>闲聊</ui-item>
        <ui-item @click="scene = 'inn'" clickable>住宿</ui-item>
        <ui-item @click="(scene = null), (command = null)" clickable>离开</ui-item>
      </ui-border>
    </div>
    <div class="col flex column">
      <ui-border v-if="scene === 'bar'" class="col">
        <ui-item v-for="d in drinks" :key="d" @click="command = 'confirm'" class="flex justify-between" clickable>
          <div>{{ d }}</div>
          <div>{{ Math.floor(Math.random() * 12) }}</div>
        </ui-item>
      </ui-border>
      <ui-border v-if="scene === 'inn'" class="col">
        <ui-item v-for="r in rooms" :key="r" @click="command = 'confirm'" class="flex justify-between" clickable>
          <div>{{ r }}</div>
          <div>{{ Math.floor(Math.random() * 12) }}</div>
        </ui-item>
      </ui-border>
    </div>
  </div>
  <ui-border v-if="scene === 'chat' || scene === 'bar' || scene === 'inn'">
    <ui-item>Lorem ipsum dolor sit.</ui-item>
    <ui-item>Ex recusandae placeat tempore?</ui-item>
    <ui-item>Rerum minima nam atque.</ui-item>
  </ui-border>
  <ui-dialog :command="command" @selected="command = null" />
</template>

<script>
import data from './data.json';

export default {
  name: 'scene-shop-2',
  data() {
    return {
      drinks: data.drinks,
      rooms: data.rooms,
      scene: null,
      command: null
    };
  }
};
</script>
