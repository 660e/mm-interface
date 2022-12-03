<template>
  <ui-window class="w-550 q-gap flex column">
    <div class="pad-60"></div>
    <div class="col" style="background-color: rgba(0, 0, 0, 0.618)"></div>
    <div class="pad-60"></div>
  </ui-window>
  <ui-window class="w-250">
    <div class="pad-14"></div>
    <ui-item>犬系统</ui-item>
    <ui-thead :th="['地点']" />
    <ui-item v-for="n in 10" :key="n" hoverable>村镇-{{ n }}</ui-item>
  </ui-window>
</template>

<script>
export default {
  name: 'menu-map'
};
</script>
