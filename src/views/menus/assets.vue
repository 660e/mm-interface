<template>
  <ui-window :class="command === 'equip' ? ['col', 'q-gap-l'] : ['w-530', 'q-gap-x']" class="flex column">
    <div class="pad-26"></div>
    <div class="flex">
      <div>
        <ui-item>{{ actors[1][3] }}</ui-item>
        <ui-item>梅卡瓦主战坦克</ui-item>
        <div class="flex">
          <div class="w-120 flex">
            <div>
              <ui-item />
              <ui-item @click="command = 'equip'" hoverable icon>装备</ui-item>
              <ui-item @click="command = 'item'" hoverable icon>货架</ui-item>
            </div>
            <div class="col"></div>
          </div>
          <div class="w-268 flex-center"><img src="@/assets/tank-3.png" /></div>
        </div>
      </div>
      <div class="col">
        <ui-item />
        <ui-item />
        <ui-grid v-if="command === 'equip'" :grid="[3, 2]" column>
          <ui-item between icon><span>底盘特性</span><span>会心一击</span></ui-item>
          <ui-item between icon><span>备用弹仓</span><span>10/128</span></ui-item>
          <ui-item between icon><span>货架容量</span><span>4/20</span></ui-item>
          <ui-item between icon><span>最大载重</span><span>115.36</span></ui-item>
          <ui-item between icon><span>装甲重量</span><span>32.00</span></ui-item>
          <ui-item between icon><span>装备重量</span><span>83.36</span></ui-item>
        </ui-grid>
      </div>
    </div>
    <template v-if="command === 'equip'">
      <ui-thead :th="['名称', dict[0][0], dict[0][3], dict[0][2], dict[0][6], dict[0][5]]" />
      <ui-item :icon="[2, 1]" class="flex" style="padding-right: 0">
        <span class="col">{{ equipments[1][0] }}</span>
        <span class="table-td">800</span>
        <span class="table-td">41/62</span>
        <span class="table-td">86</span>
        <span class="table-td">正常</span>
        <span class="table-td">10.00</span>
      </ui-item>
      <ui-item :icon="[2, 2]" class="flex" style="padding-right: 0">
        <span class="col">{{ equipments[1][1] }}</span>
        <span class="table-td">400</span>
        <span class="table-td">∞</span>
        <span class="table-td">45</span>
        <span class="table-td">正常</span>
        <span class="table-td">3.00</span>
      </ui-item>
      <ui-item :icon="[2, 3]" class="flex" style="padding-right: 0">
        <span class="col">{{ equipments[1][2] }}</span>
        <span class="table-td">760</span>
        <span class="table-td">8/16</span>
        <span class="table-td">600</span>
        <span class="table-td">正常</span>
        <span class="table-td">11.00</span>
      </ui-item>
      <ui-item />
      <ui-item />
      <ui-thead :th="['名称', '命中/回避', '载重', dict[0][2], dict[0][6], dict[0][5]]" />
      <ui-item :icon="[2, 4]" class="flex" style="padding-right: 0">
        <span class="col">{{ equipments[1][3] }}</span>
        <span class="table-td">10%/10%</span>
        <span class="table-td">-</span>
        <span class="table-td">190</span>
        <span class="table-td">正常</span>
        <span class="table-td">2.00</span>
      </ui-item>
      <ui-item />
      <ui-item :icon="[2, 5]" class="flex" style="padding-right: 0">
        <span class="col">{{ equipments[1][4] }}</span>
        <span class="table-td">-</span>
        <span class="table-td">58.00</span>
        <span class="table-td">115</span>
        <span class="table-td">正常</span>
        <span class="table-td">1.00</span>
      </ui-item>
      <ui-item :icon="[2, 6]" class="flex" style="padding-right: 0">
        <span class="col">{{ equipments[1][5] }}</span>
        <span class="table-td">-</span>
        <span class="table-td">-</span>
        <span class="table-td">150</span>
        <span class="table-td">正常</span>
        <span class="table-td">13.00</span>
      </ui-item>
    </template>
    <div v-if="command === 'item'" class="col flex">
      <div class="col">
        <ui-thead :th="['名称', '重量']" />
        <ui-item v-for="i in items[1]" :key="i" between icon>
          <span>{{ i }}</span>
          <span>10.00</span>
        </ui-item>
      </div>
      <div class="col q-ml">
        <ui-thead :th="['名称', '重量']" />
        <ui-item v-for="n in 10" :key="n" between icon>
          <span>{{ n }}</span>
          <span>10.00</span>
        </ui-item>
      </div>
    </div>
  </ui-window>
  <ui-window v-if="command === 'item'" class="w-282">
    <div class="pad-26"></div>
    <ui-item between>
      <span>备用弹仓</span>
      <span>10/128</span>
    </ui-item>
    <ui-thead :th="['名称', '持有数']" />
    <ui-item between icon>
      <span>备用弹</span>
      <span>10</span>
    </ui-item>
  </ui-window>
</template>

<script>
import data from '@/data.json';

export default {
  name: 'menu-assets',
  props: {
    type: Boolean
  },
  data() {
    return {
      actors: data.actors,
      equipments: data.equipments,
      items: data.items,
      dict: data.dict,
      command: 'equip'
    };
  }
};
</script>
