<template>
  <div class="scene">改造店</div>

  <div class="w-300 gap flex">
    <div class="col">
      <br />
      <br />
      <br />
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 1" hoverable>改造底盘</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 2" hoverable>升级引擎</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 3" hoverable>改造引擎</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 4" hoverable>改造武器</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 0" hoverable>离开商店</q-text></q-window>
    </div>
    <div v-if="command" class="options">
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
    <q-banner :th="['项目', '改造度']" />
    <q-grid :grid="[10, 1]">
      <q-text between hoverable icon>
        <span>梅卡瓦主战坦克</span>
        <span>{{ $r(0, 100) }}%</span>
      </q-text>
      <q-text v-for="n in 5" :key="n" @click="content = [`穴-${n}`, null, ['机枪', '特殊装备', '封闭']]" hoverable icon>穴-{{ n }}：加农炮</q-text>
    </q-grid>
    <q-banner :th="['改造']" />
    <q-upgrade
      :td="[
        [$d.dicts[3][1], 6, 3],
        [$d.dicts[3][7], 4, 1],
        ['货仓', 8, 3]
      ]"
    />
  </q-window>

  <q-window v-if="[2, 3].includes(command)" class="w-500 gap" :border="[0, 1, 0, 1]">
    <br />
    <q-text>选项</q-text>
    <q-banner :th="['名称', '改造度']" />
    <q-grid :grid="[10, 1]">
      <q-text between hoverable icon>
        <span>气仙型</span>
        <span>{{ $r(0, 100) }}%</span>
      </q-text>
      <q-text between hoverable icon>
        <span>OHC卡门型</span>
        <span>{{ $r(0, 100) }}%</span>
      </q-text>
      <q-text between hoverable icon>
        <span>V48金刚型</span>
        <span>{{ $r(0, 100) }}%</span>
      </q-text>
    </q-grid>
    <template v-if="command === 2">
      <q-banner :th="['说明']" />
      <q-text v-for="(d, i) in $d.dicts[9]" :key="i" between icon>
        <span>{{ d }}</span>
        <span :class="{ 'text-positive': [0, 1].includes(i) }">{{ $d.dicts[11][i] ? `(${$d.dicts[11][i]})` : '' }}{{ $d.dicts[10][i] }}</span>
      </q-text>
    </template>
    <template v-if="command === 3">
      <q-banner :th="['改造']" />
      <q-upgrade :td="[[$d.dicts[3][1], 6, 3]]" />
    </template>
  </q-window>

  <q-window v-if="command === 4" class="w-500 gap" :border="[0, 1, 0, 1]">
    <br />
    <q-text>选项</q-text>
    <q-banner :th="['名称', '改造度']" />
    <q-grid :grid="[10, 1]">
      <q-text v-for="e in $d.equipments[1]" :key="e" between hoverable icon>
        <span>{{ e }}</span>
        <span>{{ $r(0, 100) }}%</span>
      </q-text>
    </q-grid>
    <q-banner :th="['改造']" />
    <q-upgrade
      :td="[
        [$d.dicts[3][0], 8, 3],
        [$d.dicts[3][1], 6, 3],
        [$d.dicts[3][7], 4, 1]
      ]"
    />
  </q-window>

  <menu-actor v-if="[0, 1, 3, 4].includes(command)" />
  <q-window v-if="command === 2" class="w-300 flex column" :border="[0, 0, 0, 1]">
    <br />
    <br />
    <q-banner :th="['名称', '价格']" />
    <q-text between hoverable icon>
      <span>V66金刚型</span>
      <span>{{ $r(100000, 500000) }}G</span>
    </q-text>
    <q-text between hoverable icon>
      <span>V100金刚型</span>
      <span>{{ $r(100000, 500000) }}G</span>
    </q-text>
  </q-window>

  <q-popup :content="content" @selected="content = []" />
</template>

<script>
export default {
  name: 'scene-upgrade',
  data() {
    return {
      command: 0,
      content: []
    };
  }
};
</script>
