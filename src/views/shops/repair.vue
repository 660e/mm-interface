<template>
  <ui-window class="w-530 q-gap-x">
    <div class="pad-26"></div>
    <ui-item>清单</ui-item>
    <ui-thead :th="['装备', '费用']" />
    <ui-item between icon hoverable>
      <span>全部修理</span>
      <span>{{ $r.integer(10000, 50000) }}</span>
    </ui-item>
    <ui-item v-for="(e, i) in equipments[1].slice(0, 3)" :key="i" :icon="[2, i + 1]" between hoverable>
      <span>{{ e }}</span>
      <span>{{ $r.integer(10000, 20000) }}</span>
    </ui-item>
  </ui-window>
</template>

<script>
import data from '@/data.json';
import mockjs from 'mockjs';

export default {
  name: 'shop-repair',
  props: {
    command: String,
    mode: String
  },
  data() {
    return {
      $r: mockjs.Random,
      equipments: data.equipments
    };
  }
};
</script>
