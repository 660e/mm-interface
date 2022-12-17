<template>
  <div class="w-300 flex justify-end">
    <q-window class="w-250" :border="[0, 0, 0, 1]">
      <q-text end>{{ $r(1, 1000000000) }}G</q-text>
      <br />
      <q-text v-for="n in 4" :key="n" class="column padding-b" hoverable>
        <q-text v-if="!compare" between dense>
          <span>{{ n !== 4 ? $d.actors[0][n - 1] : '牵引车辆' }}</span>
          <span v-if="n !== 4">Lv.{{ $r(10, 99) }}</span>
        </q-text>
        <q-text v-else between dense>
          <span>{{ $d.actors[1][n - 1] }}</span>
          <span class="text-negative">-10.00t</span>
        </q-text>
        <hr />
        <div v-if="!compare" class="flex padding-b">
          <q-avatar :icon="[n - 1, 0]" />
          <q-bar class="col padding-l" label="hp" />
        </div>
        <div class="flex">
          <q-avatar :icon="[n - 1, 1]" />
          <q-bar v-if="!compare" class="col padding-l" label="sp" />
          <div v-else class="col text-12 padding-l">
            <p v-for="n in 5" :key="n" :style="{ paddingBottom: `${n !== 5 ? 3 : 0}px` }" class="flex" style="justify-content: space-between">
              <span>加农炮{{ n }}</span>
              <span v-if="n < 4" class="text-positive">(+{{ $r(100, 200) }}){{ $r(500, 1000) }}</span>
              <span v-else class="text-negative">(-{{ $r(100, 200) }}){{ $r(500, 1000) }}</span>
            </p>
          </div>
        </div>
      </q-text>
    </q-window>
  </div>
</template>

<script>
export default {
  name: 'menu-actor',
  props: {
    compare: Boolean
  }
};
</script>
