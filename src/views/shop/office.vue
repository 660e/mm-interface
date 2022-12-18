<template>
  <div class="scene">猎人办事处</div>

  <div class="w-300 gap flex">
    <div class="col">
      <br />
      <br />
      <br />
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 1" hoverable>询问情报</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 2" hoverable>领取赏金</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 3" hoverable>委托任务</q-text></q-window>
      <q-window class="w-150 padding-b" :border="[1, 1, 1, 0]" dense><q-text @click="command = 0" hoverable>离开</q-text></q-window>
    </div>
  </div>

  <div v-if="command === 0" class="w-500 gap"></div>

  <q-window v-if="command === 1" class="w-500 gap" :border="[0, 1, 0, 1]">
    <br />
    <q-text>通缉令</q-text>
    <q-banner :th="['名字', '赏金']" />
    <q-grid :grid="[10, 1]">
      <q-text v-for="w in $d.wanted" :key="w" between hoverable>
        <span>{{ w }}</span>
        <span>{{ $r(10000, 500000) }}</span>
      </q-text>
    </q-grid>
    <q-banner :th="['详细情报']" />
    <q-text>Lorem ipsum dolor sit amet.</q-text>
    <q-text>Magnam, dolores molestias praesentium maxime.</q-text>
    <q-text>Quisquam ab ea harum rerum?</q-text>
  </q-window>

  <q-window v-if="command === 2" class="w-500 gap" :border="[0, 1, 0, 1]">
    <br />
    <q-text>领取赏金</q-text>
    <q-banner :th="['信物', '赏金']" />
    <q-text v-for="i in $d.items[3]" :key="i" between hoverable>
      <span>{{ i }}</span>
      <span>{{ $r(10000, 500000) }}</span>
    </q-text>
  </q-window>

  <q-window v-if="command === 3" class="w-500 gap" :border="[0, 1, 0, 1]">
    <br />
    <q-text>委托任务</q-text>
    <q-banner :th="['名称']" />
    <q-grid :grid="[10, 1]">
      <q-text hoverable>Lorem, ipsum, dolor.</q-text>
      <q-text hoverable>Atque vitae, eligendi.</q-text>
      <q-text hoverable>Id, iusto, consequatur.</q-text>
      <q-text hoverable>Vel inventore, veniam.</q-text>
    </q-grid>
    <q-banner :th="['详细信息']" />
    <q-text>Lorem ipsum dolor sit amet.</q-text>
    <q-text>Magnam, dolores molestias praesentium maxime.</q-text>
    <q-text>Quisquam ab ea harum rerum?</q-text>
  </q-window>

  <menu-actor v-if="[2].includes(command)" />
</template>

<script>
export default {
  name: 'scene-office',
  data() {
    return {
      command: 0
    };
  }
};
</script>
