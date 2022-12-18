<template>
  <div class="scene">装备店/道具店</div>

  <div class="w-300 gap flex">
    <div class="col">
      <br />
      <br />
      <br />
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 1" hoverable>买</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 2" hoverable>卖</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 0" hoverable>离开商店</q-text></q-window>
    </div>
    <div v-if="command === 2" class="options">
      <br />
      <br />
      <br />
      <q-window class="padding-a" :border="[1, 1, 1, 1]">
        <q-avatar :icon="[0, 2]" @click="$store.commit('active', 'item')" focusable />
        <q-avatar :icon="[1, 2]" @click="$store.commit('active', 'important')" focusable />
        <q-avatar v-for="n in 4" :key="n" :icon="[n - 1, 1]" @click="$store.commit('active', 'tank')" focusable />
      </q-window>
    </div>
  </div>

  <q-window v-if="command" class="w-500 gap" :border="[0, 1, 0, 1]">
    <br />
    <q-text v-if="command === 1">全部商品</q-text>
    <q-text v-if="command === 2">道具/装备/战车</q-text>
    <q-banner :th="['名称', '价格']" />
    <q-grid :grid="[10, 1]">
      <q-text v-for="i in $d.items[1]" :key="i" between icon hoverable>
        <span>{{ i }}</span>
        <span>{{ $r(1000, 5000) }}</span>
      </q-text>
      <q-text v-for="e in $d.equipments[1]" :key="e" between icon hoverable>
        <span>{{ e }}</span>
        <span>{{ $r(10000, 100000) }}G</span>
      </q-text>
    </q-grid>
    <q-banner :th="['装备说明']" />
    <q-grid :grid="[5, 2]" column>
      <q-text v-for="(d, i) in $d.dicts[3]" :key="i" between icon>
        <span>{{ d }}</span>
        <span>{{ $d.dicts[4][i] }}</span>
      </q-text>
    </q-grid>
  </q-window>
  <div v-else class="w-500 gap"></div>

  <menu-actor :compare="!!command" />
</template>

<script>
export default {
  name: 'scene-shop',
  data() {
    return {
      command: 0
    };
  }
};
</script>
