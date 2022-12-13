<template>
  <q-window class="w-500 gap-x">
    <br />
    <q-text>道具</q-text>
    <q-banner :th="['名称', '持有数']" />
    <q-grid :grid="[10, 1]">
      <q-text v-for="i in $d.items[0]" :key="i" between hoverable icon>
        <span>{{ i }}</span>
        <span>{{ $r(1, 10) }}</span>
      </q-text>
    </q-grid>
    <q-banner :th="['道具说明']" />
  </q-window>
</template>

<script>
export default {
  name: 'menu-item'
};
</script>
