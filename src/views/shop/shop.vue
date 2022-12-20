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
        <q-avatar :icon="[0, 2]" focusable />
        <q-avatar :icon="[1, 2]" focusable />
        <q-avatar v-for="n in 4" :key="n" :icon="[n - 1, 1]" focusable />
      </q-window>
    </div>
  </div>

  <q-window v-if="command" class="w-500 gap" :border="[0, 1, 0, 1]">
    <br />
    <template v-if="command === 1">
      <q-text>全部商品</q-text>
      <q-banner :th="['名称', '贩卖价格']" />
    </template>
    <template v-if="command === 2">
      <q-text>道具/装备/战车</q-text>
      <q-banner :th="['名称', '出售价格']" />
    </template>
    <q-grid :grid="[10, 1]">
      <q-text
        v-for="e in $d.equipments[1]"
        :key="e"
        @click="content = [e, ['购买数量：10', '总计金额：1000000G'], ['是', '否']]"
        between
        icon
        hoverable
      >
        <span>{{ e }}</span>
        <span>{{ $r(10000, 100000) }}G</span>
      </q-text>
    </q-grid>
    <q-banner :th="['说明']" />
    <q-grid :grid="[5, 2]" column>
      <q-text v-for="(d, i) in $d.dicts[3]" :key="i" between icon>
        <span>{{ d }}</span>
        <span>{{ $d.dicts[4][i] }}</span>
      </q-text>
    </q-grid>
  </q-window>
  <div v-else class="w-500 gap"></div>

  <menu-actor :compare="!!command" />
  <q-popup :content="content" @selected="content = []" />
</template>

<script>
export default {
  name: 'scene-shop',
  data() {
    return {
      command: 0,
      content: []
    };
  }
};
</script>
