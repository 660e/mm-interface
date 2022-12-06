<template>
  <div class="w-282 flex" style="padding-top: 100px">
    <div class="col">
      <ui-window class="w-150">
        <ui-item>买</ui-item>
        <ui-item>卖</ui-item>
        <ui-item>离开商店</ui-item>
      </ui-window>
    </div>
    <div>{{ $route.params }}</div>
  </div>
</template>

<script>
export default {
  name: 'scene-shop'
};
</script>
