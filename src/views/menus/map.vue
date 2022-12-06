<template>
  <ui-window class="w-530 q-gap-x flex column">
    <div class="pad-72"></div>
    <div class="col" style="background-color: rgba(0, 0, 0, 0.618)"></div>
    <div class="pad-72"></div>
  </ui-window>
  <ui-window class="w-282 flex column">
    <div class="pad-26"></div>
    <ui-item>犬系统</ui-item>
    <ui-thead :th="['地点', '委托任务']" />
    <ui-item v-for="n in 12" :key="n" between hoverable>
      <span>村镇-{{ n }}</span>
      <span>{{ $r.integer(1, 5) }}</span>
    </ui-item>
    <div class="col"></div>
  </ui-window>
</template>

<script>
import mockjs from 'mockjs';

export default {
  name: 'menu-map',
  data() {
    return {
      $r: mockjs.Random
    };
  }
};
</script>
