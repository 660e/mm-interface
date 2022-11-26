<template>
  <div class="col flex justify-between">
    <div class="w-150 flex column justify-center">
      <ui-frame>
        <ui-item clickable>传真</ui-item>
        <ui-item clickable>乘降</ui-item>
        <ui-item clickable>道具</ui-item>
        <ui-item clickable>装备</ui-item>
        <ui-item clickable>状态</ui-item>
        <ui-item clickable>战车</ui-item>
        <ui-item clickable>选项</ui-item>
      </ui-frame>
    </div>
    <div class="w-250 flex">
      <ui-frame class="col">status</ui-frame>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scene-menu'
};
</script>
