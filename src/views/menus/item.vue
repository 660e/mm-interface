<template>
  <ui-window class="w-530 q-gap-x">
    <div class="pad-26"></div>
    <ui-item>道具/贵重物品</ui-item>
    <ui-thead :th="['名称', type ? '持有数' : '重量']" />
    <div class="line-9">
      <template v-if="type">
        <ui-item v-for="i in items[0]" :key="i" between hoverable icon>
          <span>{{ i }}</span>
          <span>{{ $r.integer(1, 10) }}</span>
        </ui-item>
        <ui-item :icon="[1, 1]" between hoverable>
          <span>{{ equipments[0][0] }}</span>
          <span>{{ $r.integer(1, 10) }}</span>
        </ui-item>
      </template>
      <template v-else>
        <ui-item v-for="(e, i) in equipments[1].slice(0, 3)" :key="i" :icon="[2, i + 1]" between hoverable>
          <span>{{ e }}</span>
          <span>{{ $r.integer(5, 15) }}.00</span>
        </ui-item>
      </template>
    </div>
    <ui-thead :th="['说明']" />
    <ui-grid :grid="[4, 2]">
      <ui-item v-for="(n, i) in dict[0]" :key="i" between icon>
        <span>{{ n }}</span>
        <span>{{ dict[1][i] }}</span>
      </ui-item>
    </ui-grid>
  </ui-window>
  <menu-actors class="w-282" />
</template>

<script>
import data from '@/data.json';
import mockjs from 'mockjs';

export default {
  name: 'menu-item',
  props: {
    type: Boolean
  },
  data() {
    return {
      $r: mockjs.Random,
      items: data.items,
      equipments: data.equipments,
      dict: data.dict
    };
  }
};
</script>
