<template>
  <div class="scene">改造店</div>

  <div class="w-300 gap flex">
    <div class="col">
      <br />
      <br />
      <br />
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 1" hoverable>改造底盘</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 2" hoverable>改造引擎</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 3" hoverable>改造武器</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 0" hoverable>离开商店</q-text></q-window>
    </div>
    <div v-if="[1].includes(command)" class="options">
      <br />
      <br />
      <br />
      <q-window class="padding-a" :border="[1, 1, 1, 1]">
        <q-avatar v-for="n in 4" :key="n" :icon="[n - 1, 1]" focusable />
      </q-window>
    </div>
  </div>

  <div v-if="command === 0" class="w-500 gap"></div>

  <q-window v-if="command === 1" class="w-500 gap" :border="[0, 1, 0, 1]">
    <br />
    <q-text>选项</q-text>
    <q-banner :th="['项目', '详情']" />
    <q-text v-for="n in 5" :key="n" between hoverable>
      <span>穴{{ n }}</span>
      <span>加农炮</span>
    </q-text>
    <q-text between hoverable><span>扩大货仓</span><span>10/24</span></q-text>
    <q-text between hoverable><span>扩大备用弹仓</span><span>64/128</span></q-text>
    <q-text between hoverable><span>调整守备力</span><span>200</span></q-text>
  </q-window>

  <q-window v-if="command === 2" class="w-500 gap" :border="[0, 1, 0, 1]">
    <br />
    <q-text>选项</q-text>
    <q-banner :th="['项目']" />
    <q-grid :grid="[10, 1]">
      <q-text v-for="n in 3" :key="n" hoverable icon>引擎-{{ n }}</q-text>
    </q-grid>
    <q-banner :th="['说明']" />
    <q-text v-for="(d, i) in $d.dicts[9]" :key="i" between icon>
      <span>{{ d }}</span>
      <span :class="{ 'text-positive': [0, 1].includes(i) }">{{ $d.dicts[11][i] ? `(${$d.dicts[11][i]})` : '' }}{{ $d.dicts[10][i] }}</span>
    </q-text>
  </q-window>

  <menu-actor v-if="[0, 1].includes(command)" />
  <q-window v-if="command === 2" class="w-300 flex column" :border="[0, 0, 0, 1]">
    <br />
    <br />
    <q-banner :th="['名称', '价格']" />
    <q-text between hoverable icon>
      <span>引擎A</span>
      <span>{{ $r(100000, 500000) }}G</span>
    </q-text>
  </q-window>
</template>

<script>
export default {
  name: 'scene-upgrade',
  data() {
    return {
      command: 0
    };
  }
};
</script>
