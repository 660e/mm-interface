<template>
  <q-window class="w-500 gap-x">
    <q-text>道具</q-text>
    <q-banner :th="['名称', '持有数']" />
    <q-grid :grid="[10, 1]"></q-grid>
  </q-window>
</template>

<script>
export default {
  name: 'menu-item'
};
</script>
