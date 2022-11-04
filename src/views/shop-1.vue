<template>
  <div class="flex">
    <ui-border class="col">
      <ui-item>装备店/道具店</ui-item>
    </ui-border>
    <ui-border class="w-5">
      <ui-item class="flex justify-between">
        <div>G:</div>
        <div>{{ Math.floor(Math.random() * 123456789) }}</div>
      </ui-item>
    </ui-border>
  </div>
  <div class="col flex">
    <div class="w-5 flex column justify-between">
      <ui-border>
        <ui-item @click="scene = 'buy'" clickable>购买装备</ui-item>
        <ui-item @click="scene = 'sell'" clickable>售卖道具</ui-item>
        <ui-item @click="(scene = null), (command = null)" clickable>离开</ui-item>
      </ui-border>
      <ui-border v-if="scene === 'buy' || scene === 'sell'">
        <ui-item v-for="a in actors" :key="a" class="flex justify-between" clickable>
          <div>{{ a }}</div>
          <div>满</div>
        </ui-item>
      </ui-border>
    </div>
    <div class="col flex column">
      <template v-if="scene === 'buy'">
        <ui-border class="col">
          <ui-item v-for="e in equipments" :key="e" class="flex justify-between" clickable>
            <div>{{ e }}</div>
            <div>{{ Math.floor(Math.random() * 123456) }}</div>
          </ui-item>
        </ui-border>
        <ui-border>
          <ui-grid :grid="[2, 3]">
            <ui-item>攻击：800</ui-item>
            <ui-item>范围：一体</ui-item>
            <ui-item>重量：10.00t</ui-item>
            <ui-item>防御：86</ui-item>
            <ui-item>载弹：62</ui-item>
            <ui-item style="color: #555">载重：---</ui-item>
          </ui-grid>
        </ui-border>
      </template>
      <template v-if="scene === 'sell'">
        <ui-border class="col">
          <ui-item v-for="i in items" :key="i" @click="command = 'confirm'" class="flex justify-between" clickable>
            <div>{{ i }}</div>
            <div>{{ Math.floor(Math.random() * 1234) }}</div>
          </ui-item>
        </ui-border>
        <ui-border>
          <ui-item>道具说明</ui-item>
          <ui-item></ui-item>
        </ui-border>
      </template>
    </div>
  </div>
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
