<template>
  <ui-window class="flex column">
    <div class="pad-14"></div>
    <ui-item class="text-right q-mb">{{ $r.integer(1, 100000000) }}G</ui-item>
    <div v-for="(a, i) in actors[0]" :key="i" class="hoverable q-mb">
      <ui-item class="flex justify-between">
        <span>{{ a }}</span>
        <span>LV.{{ $r.integer(1, 99) }}</span>
      </ui-item>
      <hr class="q-mx" />
      <ui-item class="flex" style="padding-bottom: 0">
        <ui-actor :icon="[1, i + 1]" />
        <ui-bar class="col q-ml" type="hp" />
      </ui-item>
      <ui-item class="flex">
        <ui-actor :icon="[2, i + 1]" />
        <ui-bar class="col q-ml" type="sp" />
      </ui-item>
    </div>
    <div class="hoverable">
      <ui-item>牵引车辆</ui-item>
      <hr class="q-mx" />
      <ui-item class="flex">
        <ui-actor :icon="[2, 4]" />
        <ui-bar class="col q-ml" type="sp" />
      </ui-item>
    </div>
    <div class="col"></div>
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
