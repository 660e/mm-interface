<template>
  <div class="flex">
    <ui-border class="col">
      <ui-item>Lorem, ipsum.</ui-item>
    </ui-border>
    <ui-border class="w-5">
      <ui-item class="flex justify-between">
        <div>G:</div>
        <div>{{ Math.floor(Math.random() * 123456789) }}</div>
      </ui-item>
    </ui-border>
  </div>
  <ui-border>
    <ui-grid :grid="[1, 5]">
      <ui-item class="text-center" clickable>装备</ui-item>
      <ui-item class="text-center" clickable>道具</ui-item>
      <ui-item class="text-center" clickable>乘降</ui-item>
      <ui-item class="text-center" clickable>传真</ui-item>
      <ui-item class="text-center" clickable>系统</ui-item>
    </ui-grid>
  </ui-border>
</template>

<script>
export default {
  name: 'scene-map'
};
</script>
