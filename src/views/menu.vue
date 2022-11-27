<template>
  <div class="col flex justify-between">
    <div>
      <ui-item />
      <ui-item />
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
      <div>
        <ui-item />
        <ui-item />
        <ui-frame no-padding>
          <ui-item clickable>
            <ui-icon />
          </ui-item>
          <ui-item v-for="(a, i) in actors[1]" :key="i" clickable>
            <ui-icon :type="[32, i, 1]" />
          </ui-item>
        </ui-frame>
      </div>
      <ui-frame class="w-400 space-left space-right">
        <ui-item>包裹</ui-item>
        <hr />
        <ui-item v-for="n in 10" :key="n" class="flex justify-between" clickable>
          <span>{{ items[0][n - 1] }}</span>
          <span>{{ Math.ceil(Math.random() * 10) }}</span>
        </ui-item>
        <hr />
        <ui-item class="text-right">4/20</ui-item>
      </ui-frame>
      <div class="w-400 flex justify-end">
        <ui-frame class="w-250">
          <ui-item class="text-right">{{ Math.ceil(Math.random() * 100000000) }}G</ui-item>
          <hr />
          <template v-for="(a, i) in actors[0]" :key="i">
            <ui-item class="flex justify-between">
              <span>{{ a }}</span>
              <span>LV.{{ Math.ceil(Math.random() * 90) + 10 }}</span>
            </ui-item>
            <ui-item class="flex" clickable no-padding>
              <ui-item class="flex align-center q-pl" no-padding>
                <ui-icon :type="[32, i, 0]" />
              </ui-item>
              <ui-item class="col"><ui-bar type="hp" /></ui-item>
            </ui-item>
            <ui-item class="flex" clickable no-padding>
              <ui-item class="flex align-center q-pl" no-padding>
                <ui-icon :type="[32, i, 1]" />
              </ui-item>
              <ui-item class="col"><ui-bar type="sp" /></ui-item>
            </ui-item>
          </template>
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
      items: data.items
    };
  }
};
</script>
