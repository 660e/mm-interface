<template>
  <q-window :class="[command ? 'w-500' : 'w-802']" :border="[0, command, 0, 1]">
    <br />
    <div class="flex">
      <div>
        <q-text>{{ $d.actors[1][3] }}</q-text>
        <q-text>梅卡瓦主战坦克</q-text>
        <div class="flex" style="width: 366px">
          <div style="width: 100px">
            <br />
            <q-text @click="command = 0" hoverable icon>装备</q-text>
            <q-text @click="command = 1" hoverable icon>货架</q-text>
          </div>
          <div class="flex-center"><img src="@/assets/tank3.png" /></div>
        </div>
      </div>
      <div class="col">
        <br />
        <q-grid v-if="!command" :grid="[4, 2]" column>
          <q-text v-for="(d, i) in $d.dicts[7]" :key="i" between icon>
            <span>{{ d }}</span>
            <span>{{ $d.dicts[8][i] }}</span>
          </q-text>
        </q-grid>
      </div>
    </div>

    <!-- 装备 -->
    <template v-if="!command">
      <q-banner :th="['武器']" />
      <q-text v-for="n in 5" :key="n" icon>
        <span>{{ n }}</span>
      </q-text>
      <q-banner :th="['C装置']" />
      <q-text v-for="n in 3" :key="n" icon>
        <span>{{ n }}</span>
      </q-text>
      <q-banner :th="['引擎']" />
      <q-text v-for="n in 2" :key="n" icon>
        <span>{{ n }}</span>
      </q-text>
    </template>

    <!-- 货架 -->
    <template v-else></template>
  </q-window>
</template>

<script>
export default {
  name: 'menu-assets',
  data() {
    return {
      command: 0
    };
  }
};
</script>
