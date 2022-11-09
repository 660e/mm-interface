<template>
  <div class="flex">
    <ui-border class="col">
      <ui-item>改造店/出租店</ui-item>
    </ui-border>
    <ui-border class="w-5">
      <ui-item class="text-right">{{ Math.floor(Math.random() * 12345678) }}G</ui-item>
    </ui-border>
  </div>
  <div class="col flex">
    <div class="w-4 flex column justify-between">
      <ui-border>
        <ui-item @click="scene = 'refit'" clickable>改装底盘</ui-item>
        <ui-item>升级引擎</ui-item>
        <ui-item>出租战车</ui-item>
        <ui-item>归还战车</ui-item>
        <ui-item @click="scene = null" clickable>离开</ui-item>
      </ui-border>
      <ui-border v-if="scene === 'refit'">
        <ui-item v-for="a in actors" v-text="a" :key="a" class="flex justify-between" clickable />
      </ui-border>
    </div>
    <div class="col flex column">
      <template v-if="scene === 'refit'">
        <ui-border class="col">
          <ui-item class="flex justify-between" clickable>
            <div>增加守备力</div>
            <div>{{ Math.floor(Math.random() * 1234) }}G</div>
          </ui-item>
          <ui-item class="flex justify-between" clickable>
            <div>打开 武器位置1</div>
            <div>{{ Math.floor(Math.random() * 1234) }}G</div>
          </ui-item>
          <ui-item class="flex justify-between" clickable>
            <div>关闭 武器位置2</div>
            <div>{{ Math.floor(Math.random() * 1234) }}G</div>
          </ui-item>
        </ui-border>
        <ui-border>
          <ui-grid :grid="[2, 1]">
            <ui-item>重量：13.00 +10.01</ui-item>
            <ui-item>守备：128/256 +12</ui-item>
          </ui-grid>
        </ui-border>
      </template>
      <template v-if="scene === 'sell'">
        <ui-border class="col">
          <ui-item v-for="i in items" :key="i" @click="command = 'confirm'" class="flex justify-between" clickable>
            <div>{{ i }}</div>
            <div>{{ Math.floor(Math.random() * 1234) }}G</div>
          </ui-item>
        </ui-border>
        <ui-border>
          <ui-item>道具说明</ui-item>
          <ui-item></ui-item>
        </ui-border>
      </template>
      <ui-border v-if="scene === 'repair'" class="col">
        <ui-item @click="command = 'confirm'" class="flex" clickable>
          <div class="w-3">1号战车</div>
          <div class="w-5">220mm盖亚炮</div>
          <div class="w-1">破损</div>
          <div class="col text-right">{{ Math.floor(Math.random() * 1234) }}G</div>
        </ui-item>
        <ui-item @click="command = 'confirm'" class="flex" clickable>
          <div class="w-3">1号战车</div>
          <div class="w-5">索罗门2</div>
          <div class="w-1">大破</div>
          <div class="col text-right">{{ Math.floor(Math.random() * 1234) }}G</div>
        </ui-item>
      </ui-border>
      <ui-border v-if="scene === 'supply'" class="col">
        <ui-item @click="command = 'confirm'" class="flex justify-between" clickable><span>装甲片</span><span>1234/9999</span></ui-item>
        <ui-item @click="command = 'confirm'" class="flex justify-between" clickable><span>220mm盖亚炮</span><span>12/62</span></ui-item>
        <ui-item @click="command = 'confirm'" class="flex justify-between" clickable><span>S-龙卷风</span><span>9/16</span></ui-item>
      </ui-border>
    </div>
  </div>
  <ui-border v-if="!scene">
    <ui-item>Lorem ipsum dolor, sit amet.</ui-item>
    <ui-item>Aliquam, officiis, facere. Atque, adipisci?</ui-item>
    <ui-item>Nobis rerum corrupti, qui incidunt.</ui-item>
  </ui-border>
  <ui-dialog :command="command" @selected="command = null" />
</template>

<script>
import data from './data.json';

export default {
  name: 'scene-shop-2',
  data() {
    return {
      actors: data.actors[1],
      items: data.items[1],
      equipments: data.equipments[1].slice(0, 5),
      scene: null,
      command: null
    };
  }
};
</script>
