<template>
  <q-window class="w-250">
    <q-text end>{{ $r(1, 1000000000) }}G</q-text>
    <br />
    <q-text v-for="n in 4" :key="n" class="column padding-b" hoverable>
      <q-text between dense>
        <span>{{ n !== 4 ? $d.actors[0][n - 1] : '牵引车辆' }}</span>
        <span v-if="n !== 4">Lv.{{ $r(10, 99) }}</span>
      </q-text>
      <hr />
      <div class="flex padding-b">
        <q-avatar :icon="[n - 1, 0]" />
        <q-bar class="col padding-l" label="hp" />
      </div>
      <div class="flex">
        <q-avatar :icon="[n - 1, 1]" />
        <q-bar class="col padding-l" label="sp" />
      </div>
    </q-text>
  </q-window>
</template>

<script>
export default {
  name: 'menu-actor'
};
</script>
