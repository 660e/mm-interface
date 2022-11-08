<template>
  <div class="flex">
    <ui-border class="col">
      <ui-item>装备店/道具店/补给店/修理店</ui-item>
    </ui-border>
    <ui-border class="w-5">
      <ui-item class="text-right">{{ Math.floor(Math.random() * 12345678) }}G</ui-item>
    </ui-border>
  </div>
  <div class="col flex">
    <div class="w-4 flex column justify-between">
      <ui-border>
        <ui-item @click="scene = 'buy'" clickable>购买装备</ui-item>
        <ui-item @click="scene = 'sell'" clickable>售卖道具</ui-item>
        <ui-item @click="scene = null" clickable>全部补满</ui-item>
        <ui-item @click="scene = 'supply'" clickable>部分补给</ui-item>
        <ui-item @click="scene = 'repair'" clickable>修理</ui-item>
        <ui-item @click="scene = null" clickable>离开</ui-item>
      </ui-border>
      <ui-border v-if="scene === 'buy' || scene === 'sell'">
        <ui-item v-for="a in actors" v-text="a" :key="a" class="flex justify-between" clickable />
      </ui-border>
    </div>
    <div class="col flex column">
      <template v-if="scene === 'buy'">
        <ui-border class="col">
          <ui-item v-for="e in equipments" :key="e" class="flex justify-between" clickable>
            <div>{{ e }}</div>
            <div>{{ Math.floor(Math.random() * 123456) }}G</div>
          </ui-item>
        </ui-border>
        <ui-border>
          <ui-grid :grid="[2, 3]">
            <ui-item>攻击：800</ui-item>
            <ui-item>范围：一体</ui-item>
            <ui-item>重量：10.00t</ui-item>
            <ui-item>守备：86</ui-item>
            <ui-item>弹仓：62</ui-item>
            <ui-item style="color: #555">载重：---</ui-item>
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
  name: 'scene-shop-1',
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
