<template>
  <ui-window class="w-550 q-gap flex column">
    <div class="pad-72"></div>
    <div class="col" style="background-color: rgba(0, 0, 0, 0.618)"></div>
    <div class="pad-72"></div>
  </ui-window>
  <ui-window class="w-250 flex column">
    <div class="pad-26"></div>
    <ui-item>犬系统</ui-item>
    <ui-thead :th="['地点']" />
    <ui-item v-for="n in 12" :key="n" hoverable>村镇-{{ n }}</ui-item>
    <div class="col"></div>
  </ui-window>
</template>

<script>
export default {
  name: 'menu-map'
};
</script>
