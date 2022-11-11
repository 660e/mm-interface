<template>
  <div class="flex">
    <ui-border class="col">
      <ui-item>装备店/道具店/修理店/补给店</ui-item>
    </ui-border>
    <ui-border class="w-5">
      <ui-item class="text-right">{{ Math.floor(Math.random() * 12345678) }}G</ui-item>
    </ui-border>
  </div>
  <div class="col flex">
    <div class="w-4 flex column justify-between">
      <ui-border>
        <ui-item @click="scene = 'buy'" clickable>买装备</ui-item>
        <ui-item @click="scene = 'sell'" clickable>卖道具</ui-item>
        <ui-item @click="scene = 'repair'" clickable>修理</ui-item>
        <ui-item @click="scene = 'supply'" clickable>补给</ui-item>
        <ui-item @click="scene = null" clickable>离开</ui-item>
      </ui-border>
      <ui-border v-if="scene === 'buy' || scene === 'sell' || scene === 'repair' || scene === 'supply'">
        <ui-item
          v-for="a in actors"
          v-text="a"
          :key="a"
          @click="
            () => {
              if (scene === 'buy') {
                command = 'confirm';
              }
            }
          "
          class="flex justify-between"
          clickable
        />
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
            <ui-item>范围：单体</ui-item>
            <ui-item>重量：10.00t</ui-item>
            <ui-item>守备：86</ui-item>
            <ui-item>弹仓：62</ui-item>
            <ui-item class="disabled">载重：---</ui-item>
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
          <ui-grid :grid="[2, 1]">
            <ui-item>道具说明...</ui-item>
          </ui-grid>
        </ui-border>
      </template>
      <template v-if="scene === 'repair'">
        <ui-border class="col">
          <ui-item v-for="e in equipments" :key="e" @click="command = 'confirm'" class="flex justify-between" clickable>
            <div>{{ e }}</div>
            <div>{{ Math.floor(Math.random() * 12345) }}G</div>
          </ui-item>
        </ui-border>
        <ui-border>
          <ui-grid :grid="[2, 1]">
            <ui-item>状态：破损</ui-item>
          </ui-grid>
        </ui-border>
      </template>
      <template v-if="scene === 'supply'">
        <ui-border class="col">
          <ui-item @click="command = 'confirm'" class="flex justify-between" clickable>
            <div>全部</div>
            <div>{{ Math.floor(Math.random() * 1234) }}G</div>
          </ui-item>
          <ui-item @click="command = 'number'" class="flex justify-between" clickable><span>红狼</span><span>1234/9999</span></ui-item>
          <ui-item @click="command = 'number'" class="flex justify-between" clickable><span>220mm盖亚炮</span><span>12/62</span></ui-item>
          <ui-item @click="command = 'number'" class="flex justify-between" clickable><span>S-龙卷风</span><span>9/16</span></ui-item>
        </ui-border>
        <ui-border>
          <ui-grid :grid="[2, 1]">
            <ui-item>单价：{{ Math.floor(Math.random() * 1234) }}G/枚</ui-item>
          </ui-grid>
        </ui-border>
      </template>
    </div>
  </div>
  <ui-border v-if="!scene || scene === 'full'">
    <ui-grid :grid="[3, 1]">
      <ui-item>「欢迎光临！</ui-item>
    </ui-grid>
  </ui-border>
  <ui-dialog :command="command" @selected="command = null" :right="scene === 'full'" />
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
