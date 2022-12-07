<template>
  <ui-window>
    <div class="pad-26"></div>
    <ui-item class="text-right q-mb">{{ $r.integer(1, 100000000) }}G</ui-item>
    <template v-if="mode">
      <div v-for="(a, i) in actors[mode === 'actor' ? 0 : 1]" :key="i" :style="{ marginBottom: `${i === 3 ? 0 : 2}px` }" class="hoverable">
        <ui-item between>
          <span>{{ a }}</span>
          <span v-if="mode === 'tank' && i === 3" style="color: #e05000">+15.00t</span>
        </ui-item>
        <hr class="q-mx" />
        <ui-item class="flex">
          <ui-actor :icon="[mode === 'actor' ? 1 : 2, i + 1]" />
          <div class="compare">
            <template v-if="mode === 'actor'">
              <p v-for="n in 3" :key="n">
                <span>武器{{ n }}攻击</span>
                <span>{{ $r.integer(100, 255) }}</span>
                <span class="text-positive">+{{ $r.integer(50, 100) }}</span>
              </p>
            </template>
            <template v-if="mode === 'tank'">
              <p v-for="n in 4" :key="n">
                <span>大炮{{ n }}攻击</span>
                <span>{{ $r.integer(500, 800) }}</span>
                <span class="text-positive">+{{ $r.integer(100, 200) }}</span>
              </p>
            </template>
          </div>
        </ui-item>
      </div>
    </template>
    <template v-else>
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
    </template>
  </ui-window>
</template>

<script>
import data from '@/data.json';
import mockjs from 'mockjs';

export default {
  name: 'menu-actors',
  props: {
    mode: String
  },
  data() {
    return {
      $r: mockjs.Random,
      actors: data.actors
    };
  }
};
</script>
