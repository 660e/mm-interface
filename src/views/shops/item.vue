<template>
  <ui-window class="w-530 q-gap-x">
    <div class="pad-26"></div>
    <ui-item>装备/道具</ui-item>
    <ui-thead :th="['名称', '持有数', '价格']" />
    <div v-if="command === 'buy' || command === 'sell'" class="line-9">
      <template v-if="command === 'buy' || (command === 'sell' && mode === null)">
        <ui-item v-for="i in items[0]" :key="i" @click="$emit('mode', null)" style="padding-right: 0" between icon hoverable>
          <span>{{ i }}</span>
          <div class="flex">
            <span class="table-td">3</span>
            <span class="table-td">{{ $r.integer(100, 500) }}</span>
          </div>
        </ui-item>
      </template>
      <template v-if="command === 'buy' || (command === 'sell' && mode === 'actor')">
        <ui-item
          v-for="(e, i) in equipments[0].slice(0, 2)"
          :key="i"
          :icon="[1, i + 1]"
          @click="$emit('mode', 'actor')"
          style="padding-right: 0"
          between
          hoverable
        >
          <span>{{ e }}</span>
          <div class="flex">
            <span class="table-td">1</span>
            <span class="table-td">{{ $r.integer(1000, 10000) }}</span>
          </div>
        </ui-item>
      </template>
      <template v-if="command === 'buy' || (command === 'sell' && mode === 'tank')">
        <ui-item v-for="(e, i) in equipments[1].slice(0, 2)" :key="i" :icon="[2, i + 1]" @click="$emit('mode', 'tank')" between hoverable>
          <span>{{ e }}</span>
          <span>{{ $r.integer(10000, 100000) }}</span>
        </ui-item>
      </template>
    </div>
    <ui-thead :th="['说明']" />
    <ui-grid :grid="[4, 2]">
      <ui-item v-for="(n, i) in dict[0]" :key="i" between icon>
        <span>{{ n }}</span>
        <span>{{ dict[1][i] }}</span>
      </ui-item>
    </ui-grid>
  </ui-window>
</template>

<script>
import data from '@/data.json';
import mockjs from 'mockjs';

export default {
  name: 'shop-item',
  emits: ['mode'],
  props: {
    command: String,
    mode: String
  },
  data() {
    return {
      $r: mockjs.Random,
      items: data.items,
      equipments: data.equipments,
      dict: data.dict
    };
  }
};
</script>
