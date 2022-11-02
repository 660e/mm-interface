<template>
  <div class="flex">
    <ui-border class="col">
      <ui-item>地图名称</ui-item>
    </ui-border>
    <ui-border class="w-5">
      <ui-item class="flex justify-between">
        <div>G:</div>
        <div>{{ Math.floor(Math.random() * 123456789) }}</div>
      </ui-item>
    </ui-border>
  </div>
  <ui-border>
    <ui-grid :grid="[1, 5]">
      <ui-item v-for="m in ['装备', '道具', '乘降', '传真', '系统']" v-text="m" :key="m" @click="menu(m)" class="text-center" clickable />
    </ui-grid>
  </ui-border>

  <div v-if="step > 0" class="absolute-center">
    <!-- 装备 -->
    <div v-if="scene === 'equipments' && step === 1" class="flex column">
      <div class="flex">
        <ui-border v-if="type" class="w-7">
          <ui-item>LEOPARD</ui-item>
          <ui-item class="flex justify-between"><span>SP</span><span>1234/9999</span></ui-item>
          <ui-item />
          <ui-item class="flex justify-between"><span>NW</span><span>58.00t</span></ui-item>
          <ui-item class="flex justify-between"><span>MAX</span><span>58.00t</span></ui-item>
          <ui-item class="flex justify-between"><span>DI</span><span>0.00t</span></ui-item>
        </ui-border>
        <ui-border v-else class="w-7">
          <ui-item>雷班纳</ui-item>
          <ui-item class="flex justify-between"><span>LV</span><span>35</span></ui-item>
          <ui-item class="flex justify-between"><span>HP</span><span>1234/5000</span></ui-item>
          <ui-item />
          <ui-item>攻击：354</ui-item>
          <ui-item>防御：479</ui-item>
          <ui-grid :grid="[2, 2]">
            <ui-item>强度：104</ui-item>
            <ui-item>回避：85</ui-item>
            <ui-item>速度：188</ui-item>
            <ui-item>体力：151</ui-item>
          </ui-grid>
        </ui-border>
        <ui-border class="w-5">
          <ui-grid :grid="[8, 1]">
            <ui-item v-for="e in equipments[type]" v-text="e" :key="e" @click="command = 'options'" clickable />
          </ui-grid>
        </ui-border>
      </div>
      <ui-border>
        <ui-grid :grid="[2, 3]">
          <ui-item>攻击：800</ui-item>
          <ui-item>范围：一体</ui-item>
          <ui-item>重量：10.00t</ui-item>
          <ui-item>防御：86</ui-item>
          <ui-item>载弹：62</ui-item>
          <ui-item style="color: #555">载重：---</ui-item>
        </ui-grid>
      </ui-border>
    </div>
    <!-- 道具 -->
    <div v-if="scene === 'items' && step === 1" class="w-10">
      <ui-border>
        <ui-grid :grid="[5, 2]">
          <ui-item v-for="i in items[type]" v-text="i" :key="i" @click="command = 'options'" clickable />
        </ui-grid>
      </ui-border>
      <ui-border>
        <ui-item>道具说明</ui-item>
      </ui-border>
    </div>
  </div>

  <ui-dialog :command="command" @selected="selected" />
</template>

<script>
import data from '../views/data.json';

export default {
  name: 'scene-map',
  data() {
    return {
      actors: data.actors,
      equipments: data.equipments,
      items: data.items,
      scene: null,
      command: null,
      type: 0,
      step: 0
    };
  },
  methods: {
    menu(menu) {
      switch (menu) {
        case '装备':
          this.scene = 'equipments';
          this.command = 'team';
          break;
        case '道具':
          this.scene = 'items';
          this.command = 'team';
          break;
        case '乘降':
          this.scene = 'get-on/off';
          this.command = 'get-on/off';
          break;
        case '传真':
          this.scene = 'navigate';
          this.command = 'navigate';
          break;
      }
    },
    selected(type) {
      switch (this.scene) {
        case 'equipments': {
          switch (this.command) {
            case 'team':
              this.command = null;
              this.type = type;
              this.step = 1;
              break;
          }
          break;
        }
        case 'items': {
          switch (this.command) {
            case 'team':
              this.command = null;
              this.type = type;
              this.step = 1;
              break;
            case 'options':
              if (type === 2) {
                this.command = 'confirm';
              } else {
                this.step = 0;
                this.command = this.type ? 'tank' : 'human';
              }
              break;
            default:
              this.step = 1;
              this.command = null;
          }
          break;
        }
        case 'get-on/off':
        case 'navigate':
          this.clear();
          break;
      }
    },
    clear() {
      this.scene = null;
      this.command = null;
      this.type = 0;
      this.step = 0;
    }
  }
};
</script>
