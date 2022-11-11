<template>
  <div class="flex">
    <div class="relative">
      <ui-grid :grid="[9, 17]">
        <div v-for="n in 153" :key="n" class="grid flex flex-center">{{ (n - 1) % 17 }}-{{ Math.floor(n / 17 - (n % 17 ? 0 : 1)) }}</div>
      </ui-grid>
      <img :style="position(14, 2)" src="@/assets/actor-1.png" class="absolute" />
      <img :style="position(14, 4)" src="@/assets/actor-2.png" class="absolute" />
      <img :style="position(14, 6)" src="@/assets/actor-3.png" class="absolute" />
      <img :style="position(1, 4)" src="@/assets/enemy.png" class="absolute" />
    </div>
  </div>
  <div class="flex">
    <ui-border class="col">
      <ui-item class="flex justify-between" clickable><span>隆美尔游魂战车</span><span>1</span></ui-item>
      <ui-item class="flex justify-between" clickable><span>流浪的装甲板</span><span>2</span></ui-item>
    </ui-border>
    <ui-border class="w-11">
      <ui-item v-for="a in actors" :key="a" class="flex justify-between" clickable>
        <div>{{ a }}</div>
        <div class="flex">
          <ui-bar class="w-3" type="hp" />
          <ui-bar class="w-3" type="sp" />
        </div>
      </ui-item>
    </ui-border>
  </div>
</template>

<script>
import data from './data.json';

export default {
  name: 'scene-battle',
  data() {
    return {
      actors: data.actors[0]
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
</style>
