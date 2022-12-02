<template>
  <ui-window class="w-400 q-gap flex column">
    <div class="col"></div>
    <ui-item>角色名/战车名</ui-item>
    <ui-thead />
    <div class="h-360"></div>
    <ui-thead :th="['当前装备属性']" />
    <ui-grid :grid="[3, 2]">
      <ui-item v-for="(d, i) in dict[0]" :key="i" class="flex justify-between" icon>
        <span>{{ d }}</span>
        <span :class="{ 'text-positive': [0, 2].includes(i), 'text-negative': [1, 5].includes(i) }">{{ dict[1][i] }}</span>
      </ui-item>
    </ui-grid>
  </ui-window>
  <ui-window class="w-400 flex column">
    <div class="col"></div>
    <ui-item>装备分类</ui-item>
    <ui-thead :th="['-', '-']" />
    <div class="h-360"></div>
    <ui-thead :th="['替换装备属性']" />
    <ui-grid :grid="[3, 2]">
      <ui-item v-for="(d, i) in dict[0]" :key="i" class="flex justify-between" icon>
        <span>{{ d }}</span>
        <span>{{ dict[1][i] }}</span>
      </ui-item>
    </ui-grid>
  </ui-window>
</template>

<script>
import data from '@/data.json';

export default {
  name: 'menu-equip',
  data() {
    return {
      equipments: data.equipments,
      dict: data.dict
    };
  }
};
</script>
