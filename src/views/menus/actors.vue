<template>
  <ui-window class="flex column">
    <div class="col"></div>
    <ui-item class="text-right q-mb">{{ $r.integer(1, 100000000) }}G</ui-item>
    <div v-for="(a, i) in actors[1]" :key="i" :style="{ marginBottom: `${i === 3 ? 0 : 2}px` }" class="hoverable">
      <ui-item between>
        <span>{{ i === 3 ? '牵引车辆' : actors[0][i] }}</span>
        <span v-if="i !== 3">LV.{{ $r.integer(1, 99) }}</span>
      </ui-item>
      <hr class="q-mx" />
      <ui-item class="flex" style="padding-bottom: 0">
        <ui-actor :icon="[1, i + 1]" :empty="i === 3" />
        <ui-bar class="col q-ml" type="hp" :empty="i === 3" />
      </ui-item>
      <ui-item class="flex">
        <ui-actor :icon="[2, i + 1]" />
        <ui-bar class="col q-ml" type="sp" />
      </ui-item>
    </div>
  </ui-window>
</template>

<script>
import data from '@/data.json';
import mockjs from 'mockjs';

export default {
  name: 'menu-actors',
  data() {
    return {
      $r: mockjs.Random,
      actors: data.actors
    };
  }
};
</script>
