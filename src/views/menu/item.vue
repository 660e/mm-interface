<template>
  <q-window class="w-500 gap-x">
    <br />
    <q-text>
      {{
        (() => {
          switch ($store.getters.active) {
            case 'item':
              return '道具';
            case 'important':
              return '重要道具';
            case 'tank':
              return '战车名';
          }
        })()
      }}
    </q-text>
    <q-banner :th="['名称', $store.getters.active === 'tank' ? '重量' : '持有数']" />
    <q-grid :grid="[10, 1]">
      <q-text v-show="$store.getters.active === 'item'" v-for="i in $d.items[0]" :key="i" between hoverable icon>
        <span>{{ i }}</span>
        <span>{{ $r(1, 10) }}</span>
      </q-text>
      <q-text v-show="$store.getters.active === 'important'" between hoverable icon>
        <span>万能钥匙</span>
        <span>1</span>
      </q-text>
      <q-text v-show="$store.getters.active === 'tank'" v-for="e in $d.equipments[1]" :key="e" between hoverable icon>
        <span>{{ e }}</span>
        <span>{{ $r(5, 15) }}.00t</span>
      </q-text>
    </q-grid>
    <q-banner :th="[`${$store.getters.active === 'tank' ? '装备' : '道具'}说明`]" />
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
