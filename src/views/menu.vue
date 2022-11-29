<template>
  <div class="col flex justify-between">
    <div style="padding-top: 61px">
      <ui-frame class="w-150">
        <ui-item clickable>传真</ui-item>
        <ui-item clickable>乘降</ui-item>
        <ui-item @click="(scene = 3), (current = '道具')" clickable>道具</ui-item>
        <ui-item @click="(scene = 4), (current = actors[0][0])" clickable>装备</ui-item>
        <ui-item clickable>状态</ui-item>
        <ui-item clickable>战车</ui-item>
        <ui-item @click="(scene = 0), (current = '')" clickable>选项</ui-item>
      </ui-frame>
    </div>
    <div class="flex">
      <div style="padding-top: 61px">
        <ui-frame v-if="scene === 3 || scene === 4" no-padding>
          <template v-if="scene === 3">
            <ui-item @click="(type = 0), (current = '道具')" focusable>
              <ui-icon :type="[32, 2, 0]" />
            </ui-item>
            <ui-item @click="(type = 0), (current = '重要道具')" focusable>
              <ui-icon :type="[32, 2, 1]" />
            </ui-item>
          </template>
          <template v-if="scene === 4">
            <ui-item v-for="n in 3" :key="n" @click="(type = 0), (current = actors[type][n - 1])" focusable>
              <ui-icon :type="[32, 0, n - 1]" />
            </ui-item>
          </template>
          <ui-item v-for="n in 4" :key="n" @click="(type = 1), (current = actors[type][n - 1])" focusable>
            <ui-icon :type="[32, 1, n - 1]" />
          </ui-item>
        </ui-frame>
      </div>
      <div class="w-400 space-left space-right flex">
        <ui-frame v-if="scene === 3" class="col">
          <ui-item class="flex justify-between">
            <span>{{ current }}</span>
            <span v-if="type">4/10</span>
          </ui-item>
          <hr />
          <ui-item v-for="n in 10" :key="n" class="flex justify-between" clickable>
            <span>{{ items[type][n - 1] }}</span>
            <span>{{ type ? '00.00t' : Math.ceil(Math.random() * 10) }}</span>
          </ui-item>
          <hr />
          <ui-item>道具说明...</ui-item>
        </ui-frame>
        <ui-frame v-if="scene === 4" class="col">
          <ui-item>{{ current }}</ui-item>
          <hr />
          <ui-item
            v-for="(e, i) in type
              ? ['大炮', '机枪', 'S-E', null, null, 'C装置', '引擎', '底盘']
              : ['武器', null, null, '头', '身', '腕', '足', '其他']"
            :key="i"
            :clickable="!!e"
            class="flex"
            no-padding
          >
            <ui-item class="col">{{ e }}</ui-item>
            <ui-item class="col flex align-center">
              <ui-icon v-if="i === 0 && e" :type="[16, type, type ? 3 : 0]" />
              <ui-icon v-if="i === 1 && e" :type="[16, type, 4]" />
              <ui-icon v-if="i === 2 && e" :type="[16, type, 5]" />
              <ui-icon v-if="i === 3 && e" :type="[16, type, 1]" />
              <ui-icon v-if="i === 4 && e" :type="[16, type, 2]" />
              <ui-icon v-if="i === 5 && e" :type="[16, type, type ? 1 : 3]" />
              <ui-icon v-if="i === 6 && e" :type="[16, type, type ? 2 : 4]" />
              <ui-icon v-if="i === 7 && e" :type="[16, type, type ? 0 : 5]" />
              <span class="q-pl">{{ equipments[type][i] }}</span>
            </ui-item>
          </ui-item>
          <hr />
          <ui-grid v-if="type" :grid="[2, 2]" column>
            <ui-item>装甲：9999</ui-item>
            <ui-item>守备：255</ui-item>
            <ui-item>载重：58.00t</ui-item>
            <ui-item>重量：58.00t</ui-item>
          </ui-grid>
          <ui-grid v-else :grid="[4, 2]" column>
            <ui-item>生命：9999</ui-item>
            <ui-item>攻击：354</ui-item>
            <ui-item>守备：479</ui-item>
            <ui-item />
            <ui-item>力量：104</ui-item>
            <ui-item>体力：151</ui-item>
            <ui-item>回避：85</ui-item>
            <ui-item>速度：188</ui-item>
          </ui-grid>
        </ui-frame>
      </div>
      <div class="w-400 flex justify-end">
        <ui-frame v-if="scene === 3" class="w-250">
          <ui-item class="text-right">{{ Math.ceil(Math.random() * 100000000) }}G</ui-item>
          <hr />
          <ui-item v-for="(a, i) in actors[0]" :key="i" class="q-mb" clickable no-padding>
            <ui-item class="flex justify-between">
              <span>{{ a }}</span>
              <span>LV.{{ Math.ceil(Math.random() * 90) + 9 }}</span>
            </ui-item>
            <div class="flex">
              <ui-item class="q-pl" no-padding><ui-icon :type="[32, 0, i]" /></ui-item>
              <ui-item class="col"><ui-bar type="hp" /></ui-item>
            </div>
            <div class="flex">
              <ui-item class="q-pl" no-padding><ui-icon :type="[32, 1, i]" /></ui-item>
              <ui-item class="col"><ui-bar type="sp" /></ui-item>
            </div>
          </ui-item>
          <ui-item clickable no-padding>
            <ui-item>牵引车辆</ui-item>
            <div class="flex">
              <ui-item class="q-pl" no-padding><ui-icon :type="[32, 1, 3]" /></ui-item>
              <ui-item class="col"><ui-bar type="sp" /></ui-item>
            </div>
          </ui-item>
        </ui-frame>
        <ui-frame v-if="scene === 4" class="col"></ui-frame>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../views/data.json';

export default {
  name: 'scene-menu',
  data() {
    return {
      actors: data.actors,
      items: data.items,
      equipments: data.equipments,
      scene: 0,
      type: 0,
      current: ''
    };
  }
};
</script>
