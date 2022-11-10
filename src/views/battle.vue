<template>
  <div></div>
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
  }
};
</script>
