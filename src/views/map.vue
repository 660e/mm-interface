<template>
  <template v-if="!command && step === 0">
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
  </template>

  <div v-if="step > 0" class="absolute-center">
    <!-- 装备 -->
    <div v-if="scene === 'equipments'" class="flex column">
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
    <div v-if="scene === 'items'" class="w-12">
      <ui-border>
        <ui-grid :grid="[5, 2]">
          <ui-item v-for="i in items[type]" v-text="i" :key="i" @click="command = 'options'" clickable />
        </ui-grid>
      </ui-border>
      <ui-border>
        <ui-item>道具说明</ui-item>
      </ui-border>
    </div>
    <!-- 乘降 -->
    <div v-if="scene === 'get-on/off'" class="relative">
      <div class="title">乘降</div>
      <ui-border class="w-8">
        <ui-grid :grid="[3, 2]" column>
          <ui-item v-for="c in ['全员上车', '全员下车', '牵引/脱钩']" v-text="c" :key="c" @click="clear" clickable />
          <ui-item v-for="a in actors[0]" v-text="a" :key="a" @click="clear" clickable />
        </ui-grid>
      </ui-border>
    </div>
    <!-- 传真 -->
    <div v-if="scene === 'navigate'" class="relative">
      <div class="title">传真</div>
      <ui-border class="w-12">
        <ui-grid :grid="[5, 3]">
          <ui-item v-for="n in 15" v-text="`城镇-${n}`" :key="n" @click="clear" clickable />
        </ui-grid>
      </ui-border>
    </div>
  </div>

  <ui-dialog :text="text" :command="command" @selected="selected" />
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
      text: null,
      scene: null,
      command: null,
      type: 0,
      step: 0
    };
  },
  methods: {
    menu(menu) {
      this.text = menu;
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
          this.step = 1;
          break;
        case '传真':
          this.scene = 'navigate';
          this.step = 1;
          break;
      }
    },
    selected(type) {
      this.text = null;
      switch (this.scene) {
        case 'equipments': {
          switch (this.command) {
            case 'team':
              this.command = null;
              this.type = type;
              this.step = 1;
              break;
            case 'options':
              switch (type) {
                case 0:
                  this.command = null;
                  break;
                case 1:
                  this.command = this.type ? 'tank' : 'human';
                  break;
                case 2:
                  this.command = 'confirm';
                  break;
              }
              break;
            default:
              this.command = null;
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
              switch (type) {
                case 0:
                case 1:
                  this.command = this.type ? 'tank' : 'human';
                  break;
                case 2:
                  this.command = 'confirm';
                  break;
              }
              break;
            default:
              this.command = null;
          }
          break;
        }
      }
    },
    clear() {
      this.text = null;
      this.scene = null;
      this.command = null;
      this.type = 0;
      this.step = 0;
    }
  }
};
</script>
