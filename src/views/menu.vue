<template>
  <div class="col flex justify-between">
    <div style="padding-top: 61px">
      <ui-frame class="w-150">
        <ui-item clickable>传真</ui-item>
        <ui-item clickable>乘降</ui-item>
        <ui-item clickable>道具</ui-item>
        <ui-item clickable>装备</ui-item>
        <ui-item clickable>状态</ui-item>
        <ui-item clickable>战车</ui-item>
        <ui-item clickable>选项</ui-item>
      </ui-frame>
    </div>
    <div class="flex">
      <div style="padding-top: 61px">
        <ui-frame no-padding>
          <ui-item v-for="n in 8" :key="n" clickable>
            <ui-icon :type="[32, n < 5 ? n - 1 : n - 5, n < 5 ? 0 : 1]" />
          </ui-item>
        </ui-frame>
      </div>
      <ui-frame class="w-400 space-left space-right">
        <ui-item>{{ actor }}</ui-item>
        <hr />
        <ui-item v-for="n in 10" :key="n" class="flex justify-between" clickable>
          <span>{{ items[type][n - 1] }}</span>
          <span>{{ type ? '00.00t' : Math.ceil(Math.random() * 10) }}</span>
        </ui-item>
        <hr />
        <ui-item class="text-right">4/10</ui-item>
      </ui-frame>
      <div class="w-400 flex justify-end">
        <ui-frame class="w-250">
          <ui-item class="text-right">{{ Math.ceil(Math.random() * 100000000) }}G</ui-item>
          <hr />
          <ui-item v-for="n in 4" :key="n" clickable no-padding>
            <ui-item class="flex justify-between">
              <span>{{ actors[0][n - 1] }}</span>
              <span>LV.{{ Math.ceil(Math.random() * 90) + 9 }}</span>
            </ui-item>
            <div class="flex">
              <ui-item class="q-pl" no-padding><ui-icon :type="[32, n - 1, 0]" /></ui-item>
              <ui-item class="col"><ui-bar type="hp" /></ui-item>
            </div>
            <div class="flex">
              <ui-item class="q-pl" no-padding><ui-icon :type="[32, n - 1, 1]" /></ui-item>
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
      type: 0,
      actor: ''
    };
  },
  mounted() {
    this.actor = this.actors[this.type][0];
  }
};
</script>
