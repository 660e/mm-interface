<template>
  <div class="scene">酒吧</div>

  <div class="w-300 gap flex">
    <div class="col">
      <br />
      <br />
      <br />
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 1" hoverable>喝一杯</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text>闲聊</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 0" hoverable>离开酒吧</q-text></q-window>
    </div>
  </div>

  <div v-if="command === 0" class="w-500 gap"></div>

  <q-window v-if="command === 1" class="w-500 gap" :border="[0, 1, 0, 1]">
    <br />
    <q-text>全部饮料</q-text>
    <q-banner :th="['名称', '价格']" />
    <q-text v-for="d in $d.drinks" :key="d" between hoverable>
      <span>{{ d }}</span>
      <span>{{ $r(10, 50) }}G</span>
    </q-text>
  </q-window>

  <menu-actor />
</template>

<script>
export default {
  name: 'scene-bar',
  data() {
    return {
      command: 0
    };
  }
};
</script>
