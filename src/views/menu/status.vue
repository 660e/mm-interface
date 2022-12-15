<template>
  <q-window class="w-500 gap" :border="[0, 1, 0, 1]">
    <br />
    <div class="flex">
      <div class="col">
        <q-text>{{ $d.actors[0][0] }}</q-text>
        <q-text>赏金猎人</q-text>
        <div class="flex-center"><img src="@/assets/actor1.png" /></div>
      </div>
      <div class="col">
        <br />
        <br />
        <q-text between icon>
          <span>当前等级</span>
          <span>{{ $r(1, 99) }}</span>
        </q-text>
        <q-text between icon>
          <span>总经验值</span>
          <span>{{ $r(100000, 999999) }}</span>
        </q-text>
        <q-text between icon>
          <span>升级还需</span>
          <span>{{ $r(1, 100000) }}</span>
        </q-text>
      </div>
    </div>
    <q-banner :th="['能力']" />
    <q-grid :grid="[4, 2]">
      <q-text v-for="d in $d.dicts[6]" :key="d" between icon>
        <span>{{ d }}</span>
        <span>{{ $r(100, 255) }}</span>
      </q-text>
    </q-grid>
    <q-banner :th="['技能']" />
    <q-text icon>车辆驾驶</q-text>
    <q-text icon>猎人之眼</q-text>
  </q-window>
</template>

<script>
export default {
  name: 'menu-status'
};
</script>
