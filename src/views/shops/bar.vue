<template>
  <ui-window class="w-530 q-gap-x">
    <div class="pad-26"></div>
    <ui-item>酒品</ui-item>
    <ui-thead :th="['名称', '价格']" />
    <ui-item v-for="d in drinks" :key="d" between hoverable icon>
      <span>{{ d }}</span>
      <span>{{ $r.integer(10, 50) }}</span>
    </ui-item>
  </ui-window>
</template>

<script>
import data from '@/data.json';
import mockjs from 'mockjs';

export default {
  name: 'shop-bar',
  data() {
    return {
      $r: mockjs.Random,
      drinks: data.drinks
    };
  }
};
</script>
