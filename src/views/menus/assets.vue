<template>
  <ui-window class="w-550 q-gap flex column">
    <div class="pad-26"></div>
    <ui-item>{{ actors[1][0] }}</ui-item>
    <ui-thead :th="['性能']" />
    <ui-grid :grid="[4, 2]" column>
      <ui-item between icon><span>最大载重</span><span>115.36t</span></ui-item>
      <ui-item between icon><span>装备重量</span><span>83.36t</span></ui-item>
      <ui-item between icon><span>装甲重量</span><span>32.00t</span></ui-item>
      <ui-item between icon><span>整体守备</span><span>500</span></ui-item>
    </ui-grid>
    <ui-thead :th="['名称', '攻击']" :width="width" />
    <ui-item :icon="[2, 1]" class="flex">
      <span class="col">{{ equipments[1][0] }}</span>
      <span class="text-right" style="width: 80px">800</span>
    </ui-item>
  </ui-window>
  <ui-window class="w-250 flex column">
    <div class="pad-26"></div>
    <ui-item>货架</ui-item>
    <ui-thead :th="['名称']" />
    <div class="line-9">
      <ui-item v-for="i in items[1]" :key="i" icon>{{ i }}</ui-item>
      <ui-item :icon="[2, 1]">{{ equipments[1][0] }}</ui-item>
    </div>
    <ui-thead :th="['特种炮弹']" />
    <ui-item v-for="n in 4" :key="n">{{ n }}</ui-item>
  </ui-window>
</template>

<script>
import data from '@/data.json';
import mockjs from 'mockjs';

export default {
  name: 'menu-assets',
  props: {
    type: Boolean
  },
  data() {
    return {
      $r: mockjs.Random,
      actors: data.actors,
      equipments: data.equipments,
      dict: data.dict,
      items: data.items,
      width: [0, 100]
    };
  }
};
</script>
