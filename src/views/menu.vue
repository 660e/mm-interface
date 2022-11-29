<template>
  <div class="col flex justify-between">
    <div style="padding-top: 61px">
      <ui-frame class="w-150">
        <ui-item clickable>传真</ui-item>
        <ui-item clickable>乘降</ui-item>
        <ui-item @click="(scene = 3), (current = '道具')" clickable>道具</ui-item>
        <ui-item clickable>装备</ui-item>
        <ui-item clickable>状态</ui-item>
        <ui-item clickable>战车</ui-item>
        <ui-item @click="scene = 0" clickable>选项</ui-item>
      </ui-frame>
    </div>
    <div class="flex">
      <div style="padding-top: 61px">
        <ui-frame v-if="scene === 3" no-padding>
          <ui-item @click="(type = 0), (current = '道具')" clickable>
            <ui-icon :type="[32, 2, 0]" />
          </ui-item>
          <ui-item @click="(type = 0), (current = '重要道具')" clickable>
            <ui-icon :type="[32, 2, 1]" />
          </ui-item>
          <ui-item v-for="n in 4" :key="n" @click="(type = 1), (current = actors[1][n - 1])" clickable>
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
      </div>
      <div class="w-400 flex justify-end">
        <ui-frame class="w-250">
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
      scene: 0,
      type: 0,
      current: ''
    };
  }
};
</script>
