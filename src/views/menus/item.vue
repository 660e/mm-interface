<template>
  <ui-window class="w-400 q-gap flex column">
    <div class="col"></div>
    <ui-item>道具/重要道具</ui-item>
    <ui-thead :th="['名称', '持有数/重量']" />
    <div class="h-360">
      <ui-item v-for="i in items[0]" :key="i" class="flex justify-between" icon hoverable>
        <span>{{ i }}</span>
        <span>{{ $r.integer(1, 10) }}</span>
      </ui-item>
      <ui-item class="flex justify-between" :icon="[1, 1]" hoverable>
        <span>{{ equipments[0][0] }}</span>
        <span>{{ $r.integer(1, 10) }}</span>
      </ui-item>
      <ui-item v-for="(e, i) in equipments[1].slice(0, 3)" :key="i" class="flex justify-between" :icon="[2, i + 1]" hoverable>
        <span>{{ e }}</span>
        <span>{{ $r.integer(5, 15) }}.00t</span>
      </ui-item>
    </div>
    <ui-thead :th="['道具说明/装备属性']" />
    <ui-grid :grid="[3, 2]">
      <ui-item v-for="(n, i) in ['攻击', '范围', '守备', '弹仓', '状态', '重量']" :key="i" class="flex justify-between" icon>
        <span>{{ n }}</span>
        <span>{{ [800, '单体', 86, '48/62', '正常', '10.00t'][i] }}</span>
      </ui-item>
    </ui-grid>
  </ui-window>
  <div class="w-400 flex justify-end">
    <ui-window class="w-250"></ui-window>
  </div>
</template>

<script>
import data from '@/data.json';
import mockjs from 'mockjs';

export default {
  name: 'menu-item',
  data() {
    return {
      $r: mockjs.Random,
      items: data.items,
      equipments: data.equipments
    };
  }
};
</script>
