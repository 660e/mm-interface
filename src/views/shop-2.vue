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
        <ui-item @click="scene = 'refit'" clickable>改底盘</ui-item>
        <ui-item @click="scene = 'upgrade'" clickable>改引擎</ui-item>
        <ui-item @click="scene = 'rent'" clickable>租借</ui-item>
        <ui-item @click="scene = 'return'" clickable>归还</ui-item>
        <ui-item @click="scene = null" clickable>离开</ui-item>
      </ui-border>
      <ui-border v-if="scene === 'refit' || scene === 'upgrade' || scene === 'rent'">
        <ui-item v-for="a in actors" v-text="a" :key="a" class="flex justify-between" clickable />
      </ui-border>
    </div>
    <div class="col flex column">
      <template v-if="scene === 'refit'">
        <ui-border class="col">
          <ui-item @click="command = 'confirm'" class="flex justify-between" clickable>
            <div>增加守备力</div>
            <div>{{ Math.floor(Math.random() * 1234) }}G</div>
          </ui-item>
          <ui-item @click="command = 'confirm'" class="flex justify-between" clickable>
            <div>打开 武器位置1</div>
            <div>{{ Math.floor(Math.random() * 1234) }}G</div>
          </ui-item>
          <ui-item @click="command = 'confirm'" class="flex justify-between" clickable>
            <div>关闭 武器位置2</div>
            <div>{{ Math.floor(Math.random() * 1234) }}G</div>
          </ui-item>
        </ui-border>
        <ui-border>
          <ui-grid :grid="[2, 1]">
            <ui-item class="flex justify-between"><span>重量：13.00t</span><span>+0.10t</span></ui-item>
            <ui-item class="flex justify-between"><span>守备：128</span><span>+12</span></ui-item>
          </ui-grid>
        </ui-border>
      </template>
      <template v-if="scene === 'upgrade'">
        <ui-border class="col">
          <ui-item @click="command = 'confirm'" class="flex justify-between" clickable>
            <div>升级为 引擎名称1</div>
            <div>{{ Math.floor(Math.random() * 1234) }}G</div>
          </ui-item>
          <ui-item @click="command = 'confirm'" class="flex justify-between" clickable>
            <div>升级为 引擎名称2</div>
            <div>{{ Math.floor(Math.random() * 1234) }}G</div>
          </ui-item>
        </ui-border>
        <ui-border>
          <ui-grid :grid="[2, 1]">
            <ui-item class="flex justify-between"><span>重量：1.00t</span><span>+0.10t</span></ui-item>
            <ui-item class="flex justify-between"><span>载重：50.00t</span><span>+8.00t</span></ui-item>
          </ui-grid>
        </ui-border>
      </template>
      <template v-if="scene === 'rent' || scene === 'return'">
        <ui-border class="col">
          <ui-item v-for="n in 4" :key="n" class="flex justify-between" clickable>
            <div>{{ n }}号出租车</div>
            <div>SP 1234/9999</div>
          </ui-item>
        </ui-border>
        <ui-border>
          <ui-grid :grid="[2, 2]" column>
            <ui-item>主炮：220mm盖亚炮</ui-item>
            <ui-item>副炮：雷电风暴</ui-item>
            <ui-item>特殊：S-龙卷风</ui-item>
          </ui-grid>
        </ui-border>
      </template>
    </div>
  </div>
  <ui-border v-if="!scene">
    <ui-grid :grid="[3, 1]">
      <ui-item>「欢迎光临！</ui-item>
    </ui-grid>
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
