<template>
  <q-window class="w-500 gap menu-map" :border="[0, 1, 0, 1]"><b></b></q-window>
  <div class="w-300 flex justify-end">
    <q-window class="w-250" :border="[0, 0, 0, 1]">
      <br />
      <q-text>犬系统</q-text>
      <q-banner :th="['地点']" />
      <q-text v-for="n in 12" :key="n" @click="content = [null, [`要移动到村镇-${n}吗？`], ['是', '否']]" hoverable>村镇-{{ n }}</q-text>
      <hr />
    </q-window>
  </div>
  <q-popup :content="content" @selected="content = []" />
</template>

<script>
export default {
  name: 'menu-map',
  data() {
    return {
      content: []
    };
  }
};
</script>

<style lang="scss" scoped>
.menu-map {
  display: flex;
  flex-direction: column;
  & > b {
    flex: 1;
    background-color: $dark;
  }
  &::before,
  &::after {
    content: '';
    display: block;
    height: $avatar * 2 + $padding;
  }
}
</style>
