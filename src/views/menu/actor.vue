<template>
  <q-window class="w-250">
    <q-text end>{{ $r(1, 1000000000) }}G</q-text>
    <br />
    <q-text v-for="n in 4" :key="n" class="column" hoverable>
      <q-text between dense>
        <span>{{ n !== 4 ? $d.actors[0][n - 1] : '牵引车辆' }}</span>
        <span v-if="n !== 4">Lv.{{ $r(10, 99) }}</span>
      </q-text>
      <div class="flex padding-y">
        <q-avatar />
      </div>
      <q-text dense>{{ $d.actors[1][n - 1] }}</q-text>
      <div class="flex padding-t">
        <q-avatar />
      </div>
    </q-text>
  </q-window>
</template>

<script>
export default {
  name: 'menu-actor'
};
</script>
