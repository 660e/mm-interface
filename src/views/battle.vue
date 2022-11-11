<template>
  <div class="col flex flex-center">
    <div class="relative">
      <div v-if="scene === 'items'" class="absolute-center">
        <ui-border class="w-13">
          <ui-grid :grid="[8, 2]">
            <ui-item v-for="i in items[type]" v-text="i" :key="i" @click="scene = 'standby'" clickable />
          </ui-grid>
        </ui-border>
      </div>
      <ui-grid :grid="[8, 15]">
        <div v-for="n in 120" :key="n" class="grid flex flex-center">{{ (n - 1) % 15 }}-{{ Math.floor(n / 15 - (n % 15 ? 0 : 1)) }}</div>
      </ui-grid>
      <img :style="position(13, 1)" src="@/assets/actor-1.png" class="absolute" />
      <img :style="position(13, 3)" src="@/assets/actor-2.png" class="absolute" />
      <img :style="position(13, 5)" src="@/assets/actor-3.png" class="absolute" />
      <img :style="position(0, 3)" src="@/assets/enemy.png" class="absolute" />
    </div>
  </div>
  <div class="flex relative">
    <ui-border class="col">
      <ui-item @click="scene = 'standby'" class="flex justify-between" clickable><span>隆美尔游魂战车</span><span>1</span></ui-item>
      <ui-item @click="scene = 'standby'" class="flex justify-between" clickable><span>流浪的装甲板</span><span>2</span></ui-item>
    </ui-border>
    <ui-border class="w-11">
      <ui-item v-for="a in actors[type].slice(0, 3)" :key="a" class="flex justify-between" clickable>
        <div>{{ a }}</div>
        <div class="flex">
          <ui-bar class="w-3" type="hp" />
          <ui-bar class="w-3" type="sp" />
        </div>
      </ui-item>
    </ui-border>
    <div class="absolute w-6 flex justify-end">
      <ui-border v-if="scene === 'standby'">
        <ui-grid v-if="type" :grid="[3, 2]" column>
          <ui-item @click="scene = 'aim'" clickable>主炮</ui-item>
          <ui-item @click="scene = 'aim'" clickable>副炮</ui-item>
          <ui-item @click="scene = 'aim'" clickable>特殊</ui-item>
          <ui-item @click="type = 0" clickable>乘降</ui-item>
          <ui-item clickable>防御</ui-item>
          <ui-item clickable>逃走</ui-item>
        </ui-grid>
        <ui-grid v-else :grid="[3, 2]" column>
          <ui-item @click="scene = 'aim'" clickable>攻击</ui-item>
          <ui-item @click="scene = 'items'" clickable>道具</ui-item>
          <ui-item />
          <ui-item @click="type = 1" clickable>乘降</ui-item>
          <ui-item clickable>防御</ui-item>
          <ui-item clickable>逃走</ui-item>
        </ui-grid>
      </ui-border>
    </div>
  </div>
  <div v-if="scene === 'aim'" class="tooltip">220mm盖亚炮 弹仓：15/62 范围：单体</div>
</template>

<script>
import data from './data.json';

export default {
  name: 'scene-battle',
  data() {
    return {
      actors: data.actors,
      items: data.items,
      scene: 'standby',
      type: 0
    };
  },
  methods: {
    position(x, y) {
      return {
        top: `${y * 48}px`,
        left: `${x * 48}px`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.grid {
  width: $xl;
  height: $xl;
  font-size: $md;
  color: $shade;
  &:nth-child(2n) {
    background-color: rgba(255, 255, 255, 0.06);
  }
  &:nth-child(2n + 1) {
    background-color: rgba(255, 255, 255, 0.03);
  }
}
.tooltip {
  background-color: $grey;
  color: $dark;
  padding: $sm $md;
  font-size: $md + $sm;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 156px;
}
</style>
