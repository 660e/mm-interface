<template>
  <div class="scene">补给店</div>

  <div class="w-300 gap flex">
    <div class="col">
      <br />
      <br />
      <br />
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 1" hoverable>全部补给</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 2" hoverable>选择性补给</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 0" hoverable>离开商店</q-text></q-window>
    </div>
    <div v-if="command === 2" class="options">
      <br />
      <br />
      <br />
      <q-window class="padding-a" :border="[1, 1, 1, 1]">
        <q-avatar v-for="n in 4" :key="n" :icon="[n - 1, 1]" focusable />
      </q-window>
    </div>
  </div>

  <div v-if="[0, 1].includes(command)" class="w-500 gap"></div>

  <q-window v-if="command === 2" class="w-500 gap" :border="[0, 1, 0, 1]">
    <br />
    <q-text>指定</q-text>
    <q-banner :th="['部位', '详情']" extend />
    <q-text icon hoverable>全部补给</q-text>
    <q-text :icon="[5, 1]" between hoverable>
      <span>红狼</span>
      <span>{{ $r(10000, 50000) }}/99999</span>
    </q-text>
    <q-text v-for="(e, i) in $d.equipments[1]" :key="i" :icon="[i, 1]" between hoverable>
      <span>{{ e }}</span>
      <span>{{ $r(10, 20) }}/48</span>
    </q-text>
  </q-window>

  <menu-actor />
</template>

<script>
export default {
  name: 'scene-supply',
  data() {
    return {
      command: 0
    };
  }
};
</script>
