<template>
  <q-window class="w-500 gap" :border="[0, 1, 0, 1]">
    <br />

    <!-- 道具 -->
    <template v-if="$store.getters.active === 'item'">
      <q-text>道具</q-text>
      <q-banner :th="['名称', '持有数']" />
      <q-grid :grid="[10, 1]">
        <q-text v-for="i in $d.items[0]" :key="i" between hoverable icon>
          <span>{{ i }}</span>
          <span>{{ $r(1, 10) }}</span>
        </q-text>
      </q-grid>
      <q-banner :th="['道具说明']" />
      <q-text>道具说明...</q-text>
    </template>

    <!-- 重要道具 -->
    <template v-if="$store.getters.active === 'important'">
      <q-text>重要道具</q-text>
      <q-banner :th="['名称', '持有数']" />
      <q-grid :grid="[10, 1]">
        <q-text between hoverable icon>
          <span>万能钥匙</span>
          <span>1</span>
        </q-text>
      </q-grid>
      <q-banner :th="['道具说明']" />
      <q-text>道具说明...</q-text>
    </template>

    <!-- 战车 -->
    <template v-if="$store.getters.active === 'tank'">
      <q-text>战车</q-text>
      <q-banner :th="['名称', '重量']" />
      <q-grid :grid="[10, 1]">
        <q-text v-for="(e, i) in $d.equipments[1]" :key="i" :icon="[i, 1]" between hoverable>
          <span>{{ e }}</span>
          <span>{{ $r(5, 15) }}.00t</span>
        </q-text>
        <q-text v-for="i in $d.items[1]" :key="i" between icon hoverable>
          <span>{{ i }}</span>
          <span>{{ $r(1, 5) }}.00t</span>
        </q-text>
      </q-grid>
      <q-banner :th="['装备说明']" />
      <q-grid :grid="[5, 2]">
        <q-text v-for="(d, i) in $d.dicts[3]" :key="i" between icon>
          <span>{{ d }}</span>
          <span>{{ $d.dicts[4][i] }}</span>
        </q-text>
      </q-grid>
    </template>
  </q-window>
</template>

<script>
export default {
  name: 'menu-item',
  mounted() {
    this.$store.commit('active', 'item');
  }
};
</script>
