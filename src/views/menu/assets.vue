<template>
  <q-window :class="[command ? 'w-500 gap' : 'w-802']" :border="[0, command, 0, 1]">
    <br />
    <div class="flex">
      <div>
        <q-text>{{ $d.actors[1][3] }}</q-text>
        <q-text>梅卡瓦主战坦克</q-text>
        <div class="flex" style="width: 346px">
          <div style="width: 120px">
            <br />
            <q-text @click="command = 0" style="width: 100px" hoverable icon>总览</q-text>
            <q-text @click="command = 1" style="width: 100px" hoverable icon>货仓</q-text>
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

    <!-- 总览 -->
    <template v-if="!command">
      <q-banner :th="['名称', '攻击', '属性/范围', '弹仓', '命中/会心', '耐久', '重量']" />
      <q-text :icon="[0, 1]" class="table">
        <span>{{ $d.equipments[1][0] }}</span>
        <span>800</span>
        <span class="flex justify-end"><i class="type"></i><b>单体</b></span>
        <span>48/62</span>
        <span>30%/15%</span>
        <span>86</span>
        <span>10.00t</span>
      </q-text>
      <q-text :icon="[1, 1]" class="table">
        <span>{{ $d.equipments[1][1] }}</span>
        <span>400</span>
        <span class="flex justify-end"><i class="type"></i><b>全体</b></span>
        <span>∞</span>
        <span>30%/15%</span>
        <span>45</span>
        <span>3.00t</span>
      </q-text>
      <q-text :icon="[2, 1]" class="table">
        <span>{{ $d.equipments[1][2] }}</span>
        <span>760</span>
        <span class="flex justify-end"><i class="type"></i><b>全体</b></span>
        <span>10/16</span>
        <span>30%/15%</span>
        <span>600</span>
        <span>11.00t</span>
      </q-text>
      <br />
      <br />
      <q-banner :th="['名称', '耐久', '重量']" />
      <q-text :icon="[3, 1]" class="table">
        <span>{{ $d.equipments[1][3] }}</span>
        <span>100</span>
        <span>10.00t</span>
      </q-text>
      <br />
      <br />
      <q-banner :th="['名称', '载重', '耐久', '重量']" />
      <q-text :icon="[4, 1]" class="table">
        <span>{{ $d.equipments[1][4] }}</span>
        <span>58.00t</span>
        <span>100</span>
        <span>10.00t</span>
      </q-text>
      <br />
    </template>

    <!-- 货仓 -->
    <template v-if="command">
      <div class="flex">
        <div class="col">
          <q-banner :th="['名称']" />
          <q-text v-for="n in 12" :key="n" icon>{{ $d.items[1][n - 1] || n }}</q-text>
        </div>
        <div class="col padding-l">
          <q-banner :th="['名称']" />
          <q-text v-for="n in 12" :key="n" icon>{{ n + 12 }}</q-text>
        </div>
      </div>
    </template>
  </q-window>

  <q-window v-if="command" class="w-300" :border="[0, 0, 0, 1]">
    <br />
    <q-text between><span>备用弹仓</span><span>50/128</span></q-text>
    <q-banner :th="['名称', '持有数']" />
    <q-text v-for="i in $d.items[2]" :key="i" between icon>
      <span>{{ i }}</span>
      <span>{{ $r(10, 20) }}</span>
    </q-text>
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
