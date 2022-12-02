<template>
  <ui-window class="w-400 q-gap flex column">
    <div class="col"></div>
    <ui-thead :th="['装备属性']" />
    <ui-grid :grid="[3, 2]">
      <ui-item v-for="(n, i) in ['攻击', '范围', '守备', '弹仓', '状态', '重量']" :key="i" class="flex justify-between" icon>
        <span>{{ n }}</span>
        <span>{{ [800, '单体', 86, '48/62', '正常', '10.00t'][i] }}</span>
      </ui-item>
    </ui-grid>
  </ui-window>
  <ui-window class="w-400 flex column">
    <div class="col"></div>
    <ui-thead :th="['装备属性']" />
    <ui-grid :grid="[3, 2]">
      <ui-item v-for="(n, i) in ['攻击', '范围', '守备', '弹仓', '状态', '重量']" :key="i" class="flex justify-between" icon>
        <span>{{ n }}</span>
        <span>{{ [800, '单体', 86, '48/62', '正常', '10.00t'][i] }}</span>
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
      equipments: data.equipments
    };
  }
};
</script>
