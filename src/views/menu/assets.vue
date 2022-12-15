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
      <q-banner :th="['名称', '攻击', '属性/范围', '弹仓', '命中/会心', '耐久', '重量']" />
      <q-text :icon="[0, 1]" class="table">
        <span>{{ $d.equipments[1][0] }}</span>
        <span>2000</span>
        <span class="flex justify-end"><i class="type"></i><b>单体</b></span>
        <span>48/62</span>
        <span>30%/30%</span>
        <span>135</span>
        <span>15.00t</span>
      </q-text>
      <br />
      <br />
      <br />
      <br />
      <q-banner :th="['名称', '特性', '耐久', '重量']" />
      <q-text :icon="[0, 1]" class="table">
        <span>{{ $d.equipments[1][3] }}</span>
        <span>会心一击</span>
        <span>100</span>
        <span>10.00t</span>
      </q-text>
      <br />
      <br />
      <q-banner :th="['名称', '载重', '耐久', '重量']" />
      <q-text :icon="[0, 1]" class="table">
        <span>{{ $d.equipments[1][4] }}</span>
        <span>58.00t</span>
        <span>100</span>
        <span>10.00t</span>
      </q-text>
      <br />
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
