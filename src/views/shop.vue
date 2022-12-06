<template>
  <div class="w-282 flex" style="padding-top: 100px">
    <div class="col">
      <ui-window class="w-150">
        <template v-if="[1].includes(scene)">
          <ui-item @click="command = 'buy'" hoverable>买</ui-item>
          <ui-item>卖</ui-item>
          <ui-item>离开商店</ui-item>
        </template>
      </ui-window>
    </div>
    <div></div>
  </div>

  <ui-window v-if="command === 'buy'" class="w-530 q-gap-x">
    <div class="pad-26"></div>
    <ui-item>装备</ui-item>
    <ui-thead :th="['名称', '价格']" />
    <div class="line-9">
      <ui-item v-for="(e, i) in equipments[0].slice(0, 3)" :key="i" :icon="[1, i + 1]" between hoverable>
        <span>{{ e }}</span>
        <span>{{ $r.integer(1000, 10000) }}</span>
      </ui-item>
      <ui-item v-for="(e, i) in equipments[1].slice(0, 3)" :key="i" :icon="[2, i + 1]" between hoverable>
        <span>{{ e }}</span>
        <span>{{ $r.integer(10000, 100000) }}</span>
      </ui-item>
    </div>
    <ui-thead :th="['说明']" />
    <ui-grid :grid="[4, 2]">
      <ui-item v-for="(n, i) in dict[0]" :key="i" between icon>
        <span>{{ n }}</span>
        <span>{{ dict[1][i] }}</span>
      </ui-item>
    </ui-grid>
  </ui-window>
  <div v-else class="w-530 q-gap-x"></div>

  <menu-actors class="w-282" />
</template>

<script>
import data from '@/data.json';
import mockjs from 'mockjs';

export default {
  name: 'scene-shop',
  data() {
    return {
      $r: mockjs.Random,
      equipments: data.equipments,
      dict: data.dict,
      scene: Number(this.$route.params.id),
      command: null
    };
  },
  watch: {
    '$route.params.id'(n) {
      this.scene = Number(n);
      this.command = null;
    }
  }
};
</script>
