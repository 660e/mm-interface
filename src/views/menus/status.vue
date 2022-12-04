<template>
  <ui-window class="w-400 q-gap flex column">
    <div class="pad-14"></div>
    <ui-item>角色名</ui-item>
    <ui-thead :th="['能力值']" />
    <ui-grid :grid="[4, 2]">
      <ui-item between icon><span>最大HP</span><span>9999</span></ui-item>
    </ui-grid>
    <div class="col"></div>
  </ui-window>
  <div class="w-400"></div>
</template>

<script>
export default {
  name: 'menu-status',
  props: {
    type: Boolean
  }
};
</script>
