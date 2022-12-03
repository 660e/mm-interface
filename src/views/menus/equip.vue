<template>
  <ui-window class="w-400 q-gap flex column">
    <div class="col"></div>
    <ui-item>角色名/战车名</ui-item>
    <ui-thead :th="['装备部位']" />
    <div class="line-9">
      <ui-grid v-for="(d, i) in dict[type ? 2 : 3]" :key="i" :grid="[1, 2]" :class="{ hoverable: d }">
        <ui-item>{{ d }}</ui-item>
        <ui-item v-if="i === 0 && d" :icon="type ? [1, 1] : [2, 1]">{{ type ? equipments[0][0] : equipments[1][0] }}</ui-item>
        <ui-item v-if="i === 1 && d" :icon="[2, 2]">{{ equipments[1][1] }}</ui-item>
        <ui-item v-if="i === 2 && d" :icon="[2, 3]">{{ equipments[1][2] }}</ui-item>
        <ui-item v-if="i === 3 && d" :icon="[1, 2]">{{ equipments[0][1] }}</ui-item>
        <ui-item v-if="i === 4 && d" :icon="[1, 3]">{{ equipments[0][2] }}</ui-item>
        <ui-item v-if="i === 5 && d" :icon="type ? [1, 4] : [2, 4]">{{ type ? equipments[0][3] : equipments[1][3] }}</ui-item>
        <ui-item v-if="i === 6 && d" :icon="[1, 5]">{{ equipments[0][4] }}</ui-item>
        <ui-item v-if="i === 7 && d" :icon="type ? [1, 6] : [2, 5]">{{ type ? equipments[0][5] : equipments[1][4] }}</ui-item>
        <ui-item v-if="i === 8 && d" :icon="[2, 6]">{{ equipments[1][5] }}</ui-item>
      </ui-grid>
    </div>
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
