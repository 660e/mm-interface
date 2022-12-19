<template>
  <div class="scene">修理店</div>

  <div class="w-300 gap flex">
    <div class="col">
      <br />
      <br />
      <br />
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 1" hoverable>全部修理</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 2" hoverable>选择性修理</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 3" hoverable>拖车救援</q-text></q-window>
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
    <q-banner :th="['部位', '详情']" />
    <q-text icon hoverable>全部修理</q-text>
    <q-text :icon="[5, 1]" between hoverable><span>红狼</span><span>破损</span></q-text>
    <q-text v-for="(e, i) in $d.equipments[1]" :key="i" :icon="[i, 1]" between hoverable>
      <span>{{ e }}</span>
      <span>破损</span>
    </q-text>
  </q-window>

  <q-window v-if="command === 3" class="w-500 gap" :border="[0, 1, 0, 1]">
    <br />
    <q-text>选择</q-text>
    <q-banner :th="['名字']" />
    <q-text v-for="a in $d.actors[1]" :key="a" hoverable>{{ a }}</q-text>
  </q-window>

  <menu-actor />
</template>

<script>
export default {
  name: 'scene-repair',
  data() {
    return {
      command: 0
    };
  }
};
</script>
