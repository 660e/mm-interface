<template>
  <ui-window class="w-400 q-gap flex column">
    <div class="pad-26"></div>
    <ui-item between>
      <span>{{ actors[0][0] }}</span>
      <span>LV.{{ $r.integer(1, 99) }}</span>
    </ui-item>
    <ui-grid :grid="[1, 2]">
      <ui-item>赏金猎人</ui-item>
      <ui-item between>
        <span>升级还需</span>
        <span>{{ $r.integer(1, 999999) }}EXP</span>
      </ui-item>
    </ui-grid>
    <ui-thead :th="['能力值']" />
    <ui-grid :grid="[5, 2]" column>
      <ui-item between icon><span>最大HP</span><span>9999</span></ui-item>
      <ui-item v-for="n in ['战斗', '驾驶', '命中', '回避']" :key="n" between icon>
        <span>{{ n }}</span>
        <span>{{ $r.integer(100, 255) }}</span>
      </ui-item>
      <ui-item />
      <ui-item v-for="n in ['腕力', '体力', '速度']" :key="n" between icon>
        <span>{{ n }}</span>
        <span>{{ $r.integer(100, 255) }}</span>
      </ui-item>
    </ui-grid>
    <ui-thead :th="['特殊技能']" />
    <ui-grid :grid="[4, 1]">
      <ui-item icon>驾驶：可以驾驶车辆</ui-item>
      <ui-item icon />
      <ui-item icon />
      <ui-item icon />
    </ui-grid>
    <div class="flex-center"><img src="@/assets/actor-1.png" /></div>
  </ui-window>
  <div class="w-400"></div>
</template>

<script>
import data from '@/data.json';
import mockjs from 'mockjs';

export default {
  name: 'menu-status',
  data() {
    return {
      $r: mockjs.Random,
      actors: data.actors
    };
  }
};
</script>
