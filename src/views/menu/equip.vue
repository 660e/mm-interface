<template>
  <!-- 角色 -->
  <template v-if="$store.getters.active === 'actor'">
    <q-window class="w-500 bit-x" :border="[0, 1, 0, 1]">
      <br />
      <q-text>角色</q-text>
      <q-banner :th="['装备部位']" />
      <q-grid :grid="[1, 2]" hoverable>
        <q-text>武器</q-text><q-text :icon="[0, 0]">{{ $d.equipments[0][0] }}</q-text>
      </q-grid>
      <br />
      <br />
      <q-grid :grid="[1, 2]" hoverable>
        <q-text>头</q-text><q-text :icon="[1, 0]">{{ $d.equipments[0][1] }}</q-text>
      </q-grid>
      <q-grid :grid="[1, 2]" hoverable>
        <q-text>身</q-text><q-text :icon="[2, 0]">{{ $d.equipments[0][2] }}</q-text>
      </q-grid>
      <q-grid :grid="[1, 2]" hoverable>
        <q-text>腕</q-text><q-text :icon="[3, 0]">{{ $d.equipments[0][3] }}</q-text>
      </q-grid>
      <q-grid :grid="[1, 2]" hoverable>
        <q-text>足</q-text><q-text :icon="[4, 0]">{{ $d.equipments[0][4] }}</q-text>
      </q-grid>
      <br />
      <br />
      <q-grid :grid="[1, 2]" hoverable>
        <q-text>饰</q-text><q-text :icon="[5, 0]">{{ $d.equipments[0][5] }}</q-text>
      </q-grid>
      <q-banner :th="['装备说明']" />
      <q-grid :grid="[4, 2]" column>
        <q-text v-for="(d, i) in $d.dicts[0]" :key="i" between icon>
          <span>{{ d }}</span>
          <span :class="{ 'text-positive': [1].includes(i), 'text-negative': [0, 2, 4].includes(i) }">
            {{ $d.dicts[2][i] ? `(${$d.dicts[2][i]})` : '' }}{{ $d.dicts[1][i] }}
          </span>
        </q-text>
      </q-grid>
    </q-window>
    <q-window class="w-300">actor</q-window>
  </template>

  <!-- 战车 -->
  <template v-if="$store.getters.active === 'tank'">
    <q-window class="w-500 bit-x" :border="[0, 1, 0, 1]">
      <br />
      <q-text>战车</q-text>
      <q-banner :th="['装备部位']" />
      <q-grid :grid="[1, 2]" hoverable>
        <q-text>大炮</q-text><q-text :icon="[0, 1]">{{ $d.equipments[1][0] }}</q-text>
      </q-grid>
      <q-grid :grid="[1, 2]" hoverable>
        <q-text>机枪</q-text><q-text :icon="[1, 1]">{{ $d.equipments[1][1] }}</q-text>
      </q-grid>
      <q-grid :grid="[1, 2]" hoverable>
        <q-text>S-E</q-text><q-text :icon="[2, 1]">{{ $d.equipments[1][2] }}</q-text>
      </q-grid>
      <br />
      <br />
      <q-grid :grid="[1, 2]" hoverable>
        <q-text>C装置</q-text><q-text :icon="[3, 1]">{{ $d.equipments[1][3] }}</q-text>
      </q-grid>
      <br />
      <br />
      <br />
      <q-grid :grid="[1, 2]" hoverable>
        <q-text>引擎</q-text><q-text :icon="[4, 1]">{{ $d.equipments[1][4] }}</q-text>
      </q-grid>
      <q-banner :th="['装备说明']" />
      <q-grid :grid="[5, 2]" column>
        <q-text v-for="(d, i) in $d.dicts[3]" :key="i" between icon>
          <span>{{ d }}</span>
          <span :class="{ 'text-positive': [4].includes(i), 'text-negative': [0, 1, 8].includes(i) }">
            {{ $d.dicts[5][i] ? `(${$d.dicts[5][i]})` : '' }}{{ $d.dicts[4][i] }}
          </span>
        </q-text>
      </q-grid>
    </q-window>
    <q-window class="w-300">tank</q-window>
  </template>
</template>

<script>
export default {
  name: 'menu-equip',
  mounted() {
    this.$store.commit('active', 'actor');
  }
};
</script>
