<template>
  <ui-window class="flex column">
    <div class="col"></div>
    <ui-item>{{ current }}</ui-item>
    <ui-thead :th="['名称', type ? '持有数' : '重量']" />
    <div class="h-360">
      <template v-if="current === '道具'">
        <ui-item v-for="i in items[0]" :key="i" class="flex justify-between" hoverable icon>
          <span>{{ i }}</span>
          <span>{{ $r.integer(1, 10) }}</span>
        </ui-item>
      </template>
      <ui-item v-else-if="current === '重要道具'" class="flex justify-between" hoverable icon>
        <span>万能钥匙</span>
        <span>1</span>
      </ui-item>
      <template v-else>
        <ui-item v-for="e in equipments[1]" :key="e" class="flex justify-between" hoverable icon>
          <span>{{ e }}</span>
          <span>{{ $r.integer(5, 15) }}.00t</span>
        </ui-item>
      </template>
    </div>
    <ui-thead :th="[type ? '道具说明' : '装备属性']" />
    <ui-grid v-if="type" :grid="[3, 1]">
      <ui-item>道具说明...</ui-item>
    </ui-grid>
    <ui-grid v-else :grid="[3, 2]">
      <ui-item></ui-item>
    </ui-grid>
  </ui-window>
</template>

<script>
import data from '@/data.json';
import mockjs from 'mockjs';

export default {
  name: 'menu-items',
  props: {
    current: {
      type: String,
      default: '道具'
    }
  },
  data() {
    return {
      $r: mockjs.Random,
      type: true,
      items: data.items,
      equipments: data.equipments
    };
  },
  watch: {
    current() {
      this.type = ['道具', '重要道具'].includes(this.current);
    }
  }
};
</script>
