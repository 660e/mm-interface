<template>
  <ui-window class="w-400 q-gap flex column">
    <div class="col"></div>
    <ui-item>角色名/战车名</ui-item>
    <ui-thead :th="['装备部位']" />
    <div class="line-9"></div>
    <ui-thead :th="['说明']" />
    <ui-grid :grid="[4, 2]">
      <ui-item v-for="(d, i) in dict[0]" :key="i" class="flex justify-between" icon>
        <span>{{ d }}</span>
        <span :class="{ 'text-positive': [0, 2].includes(i), 'text-negative': [1, 5].includes(i) }">{{ dict[1][i] }}</span>
      </ui-item>
    </ui-grid>
  </ui-window>
  <ui-window class="w-400 flex column">
    <div class="col"></div>
    <ui-item>武器/大炮/机枪/S-E/C装置/引擎</ui-item>
    <ui-thead :th="['名称', '攻/守/载']" />
    <div class="line-9">
      <ui-item icon hoverable>卸除</ui-item>
      <ui-item :icon="[2, 1]" class="flex justify-between" hoverable>
        <span>{{ equipments[1][0] }}</span>
        <span>{{ dict[1][0] }}</span>
      </ui-item>
    </div>
    <ui-thead :th="['说明']" />
    <ui-grid :grid="[4, 2]">
      <ui-item v-for="(d, i) in dict[0]" :key="i" class="flex justify-between" icon>
        <span>{{ d }}</span>
        <span>{{ dict[1][i] }}</span>
      </ui-item>
      <ui-item class="flex justify-between" icon>
        <span>持有</span>
        <span>{{ actors[1][3] }}</span>
      </ui-item>
    </ui-grid>
  </ui-window>
</template>

<script>
import data from '@/data.json';

export default {
  name: 'menu-equip',
  props: {
    type: Boolean
  },
  data() {
    return {
      actors: data.actors,
      equipments: data.equipments,
      dict: data.dict
    };
  }
};
</script>
