<template>
  <ui-window class="w-530 q-gap-x">
    <div class="pad-26"></div>
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
      <ui-item v-for="(d, i) in dict[0]" :key="i" between icon>
        <span>{{ d }}</span>
        <div class="flex">
          <span>{{ dict[1][i] }}</span>
          <span class="text-right" style="width: 70px">
            <b v-if="i === 0" class="text-positive">1000</b>
            <b v-if="i === 1" class="text-negative">48</b>
            <b v-if="i === 2" class="text-positive">120</b>
            <b v-if="i === 3" class="text-positive">10.00t</b>
          </span>
        </div>
      </ui-item>
    </ui-grid>
  </ui-window>
  <ui-window class="w-282">
    <div class="pad-26"></div>
    <ui-item>武器</ui-item>
    <ui-thead :th="['名称', type ? '持有数' : '持有者']" />
    <ui-item icon hoverable>卸除</ui-item>
    <ui-item v-if="type" :icon="[1, 1]" between hoverable>
      <span>{{ equipments[0][0] }}</span>
      <span>3</span>
    </ui-item>
    <ui-item v-else :icon="[2, 1]" between hoverable>
      <span>{{ equipments[1][0] }}</span>
      <span>{{ actors[1][0] }}</span>
    </ui-item>
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
