<template>
  <ui-window class="w-530 q-gap-x flex column">
    <div class="pad-26"></div>
    <ui-item>{{ actors[0][0] }}</ui-item>
    <ui-item>赏金猎人</ui-item>
    <div class="col flex">
      <div class="flex-center"><img src="@/assets/actor-1.png" /></div>
      <div class="col">
        <ui-item between icon>
          <span>当前等级</span>
          <span>{{ $r.integer(1, 99) }}</span>
        </ui-item>
        <ui-item between icon>
          <span>总经验值</span>
          <span>{{ $r.integer(100000, 999999) }}</span>
        </ui-item>
        <ui-item between icon>
          <span>升级还需</span>
          <span>{{ $r.integer(1, 100000) }}</span>
        </ui-item>
      </div>
    </div>
    <ui-thead :th="['能力']" />
    <ui-grid :grid="[5, 2]" column>
      <ui-item between icon><span>最大HP</span><span>9999</span></ui-item>
      <ui-item v-for="n in ['战斗等级', '驾驶等级', '命中', '回避']" :key="n" between icon>
        <span>{{ n }}</span>
        <span>{{ $r.integer(100, 255) }}</span>
      </ui-item>
      <ui-item />
      <ui-item v-for="n in ['腕力', '体力', '速度']" :key="n" between icon>
        <span>{{ n }}</span>
        <span>{{ $r.integer(100, 255) }}</span>
      </ui-item>
    </ui-grid>
    <ui-thead :th="['技能']" />
    <ui-grid :grid="[4, 2]">
      <ui-item icon>车辆驾驶</ui-item>
      <ui-item icon>猎人之眼</ui-item>
      <ui-item icon />
      <ui-item icon />
      <ui-item icon />
      <ui-item icon />
      <ui-item icon />
      <ui-item icon />
    </ui-grid>
  </ui-window>
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
