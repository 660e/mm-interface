<template>
  <div class="flex">
    <ui-border class="col">
      <ui-item>酒吧/旅店/猎人事务所/记录中心</ui-item>
    </ui-border>
    <ui-border class="w-5">
      <ui-item class="text-right">{{ Math.floor(Math.random() * 12345678) }}G</ui-item>
    </ui-border>
  </div>
  <div class="col flex">
    <div class="w-4 flex column justify-between">
      <ui-border>
        <ui-item @click="scene = 'bar'" clickable>喝一杯</ui-item>
        <ui-item @click="scene = null" clickable>闲聊</ui-item>
        <ui-item @click="scene = 'inn'" clickable>住宿</ui-item>
        <ui-item @click="scene = 'info'" clickable>打听情报</ui-item>
        <ui-item @click="scene = null" clickable>领取赏金</ui-item>
        <ui-item @click="scene = 'save'" clickable>保存</ui-item>
        <ui-item @click="(scene = null), (command = null)" clickable>离开</ui-item>
      </ui-border>
      <ui-border v-if="scene === 'bar'">
        <ui-item v-for="a in actors" v-text="a" :key="a" @click="(scene = null), (command = 'confirm')" class="flex justify-between" clickable />
      </ui-border>
    </div>
    <ui-border v-if="scene === 'bar'" class="col">
      <ui-item v-for="d in drinks" :key="d" class="flex justify-between" clickable>
        <div>{{ d }}</div>
        <div>{{ Math.floor(Math.random() * 12) }}G</div>
      </ui-item>
    </ui-border>
    <ui-border v-if="scene === 'inn'" class="col">
      <ui-item v-for="r in rooms" :key="r" @click="(scene = null), (command = 'confirm')" class="flex justify-between" clickable>
        <div>{{ r }}</div>
        <div>{{ Math.floor(Math.random() * 12) }}G</div>
      </ui-item>
    </ui-border>
    <ui-border v-if="scene === 'info'" class="col">
      <ui-item v-for="w in wanted" :key="w" @click="scene = null" class="flex justify-between" clickable>
        <div>{{ w }}</div>
        <div>{{ Math.floor(Math.random() * 123456) }}G</div>
      </ui-item>
    </ui-border>
    <ui-border v-if="scene === 'save'" class="col flex column">
      <ui-item v-for="n in 4" :key="n" @click="(scene = null), (command = 'confirm')" class="col" clickable>存档-{{ n }}</ui-item>
    </ui-border>
  </div>
  <ui-border v-if="!scene">
    <ui-item>Lorem ipsum dolor, sit amet.</ui-item>
    <ui-item>Aliquam, officiis, facere. Atque, adipisci?</ui-item>
    <ui-item>Nobis rerum corrupti, qui incidunt.</ui-item>
  </ui-border>
  <ui-dialog :command="command" @selected="command = null" right />
</template>

<script>
import data from './data.json';

export default {
  name: 'scene-shop-3',
  data() {
    return {
      actors: data.actors[0],
      drinks: data.drinks,
      rooms: data.rooms,
      wanted: data.wanted,
      scene: null,
      command: null
    };
  }
};
</script>
