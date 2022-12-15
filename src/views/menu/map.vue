<template>
  <q-window class="w-500 bit-x menu-map" :border="[0, 1, 0, 1]" />
  <div class="w-300 flex justify-end">
    <q-window class="w-250" :border="[0, 0, 0, 1]">
      <br />
      <q-text>犬系统</q-text>
      <q-banner :th="['地点']" />
      <q-grid :grid="[10, 1]">
        <q-text v-for="n in 10" :key="n" hoverable>村镇-{{ n }}</q-text>
      </q-grid>
      <hr />
    </q-window>
  </div>
</template>

<script>
export default {
  name: 'menu-map'
};
</script>

<style lang="scss" scoped>
.menu-map {
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    flex: 1;
    content: '';
    background-color: #000;
    height: $avatar * 15;
  }
}
</style>
