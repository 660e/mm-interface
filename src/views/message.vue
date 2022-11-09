<template>
  <div></div>
  <ui-border>
    <ui-grid :grid="[3, 1]">
      <ui-item>名字「对话信息...</ui-item>
      <ui-item>「对话信息...</ui-item>
      <ui-item>普通信息</ui-item>
    </ui-grid>
  </ui-border>
  <ui-dialog command="confirm" right />
</template>

<script>
export default {
  name: 'scene-message'
};
</script>
