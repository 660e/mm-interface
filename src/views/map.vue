<template>
  <template v-if="!scene && !command">
    <div class="flex">
      <ui-border class="col">
        <ui-item>地图名称</ui-item>
      </ui-border>
      <ui-border class="w-5">
        <ui-item class="text-right">{{ Math.floor(Math.random() * 12345678) }}G</ui-item>
      </ui-border>
    </div>
    <div class="flex">
      <ui-border>
        <ui-grid :grid="[3, 2]" column>
          <ui-item v-for="m in ['道具', '装备', '战车', '乘降', '传真', '系统']" v-text="m" :key="m" @click="menu(m)" class="text-center" clickable />
        </ui-grid>
      </ui-border>
      <ui-border class="col">
        <ui-item v-for="a in actors[0]" :key="a" class="flex justify-between">
          <div>{{ a }}</div>
          <div class="flex">
            <ui-bar class="w-3" type="hp" />
            <ui-bar class="w-3" type="sp" />
          </div>
        </ui-item>
      </ui-border>
    </div>
  </template>
  <div v-if="scene && command !== 'team'" class="absolute-center">
    <!-- 装备 -->
    <div v-if="scene === 'equipments'" class="flex column relative">
      <div class="title">装备</div>
      <div class="flex">
        <ui-border v-if="type" class="w-8">
          <ui-item>LEOPARD</ui-item>
          <ui-item><ui-bar type="sp" /></ui-item>
          <ui-item />
          <ui-item class="flex justify-between"><span>载重</span><span>58.00t</span></ui-item>
          <ui-item class="flex justify-between"><span>重量</span><span>58.00t</span></ui-item>
          <ui-item class="flex justify-between"><span>主炮</span><span>开启</span></ui-item>
          <ui-item class="flex justify-between disabled"><span>副炮</span><span>封闭</span></ui-item>
          <ui-item class="flex justify-between"><span>特殊</span><span>开启</span></ui-item>
        </ui-border>
        <ui-border v-else class="w-8">
          <ui-item class="flex justify-between"><span>雷班纳</span><span>LV 35</span></ui-item>
          <ui-item><ui-bar type="hp" /></ui-item>
          <ui-item><ui-bar type="exp" /></ui-item>
          <ui-item />
          <ui-grid :grid="[4, 2]" column>
            <ui-item>力量：104</ui-item>
            <ui-item>体力：151</ui-item>
            <ui-item>回避：85</ui-item>
            <ui-item>速度：188</ui-item>
            <ui-item>攻击：354</ui-item>
            <ui-item>守备：479</ui-item>
          </ui-grid>
        </ui-border>
        <ui-border class="w-5">
          <ui-grid :grid="[8, 1]">
            <ui-item v-for="e in equipments[type]" v-text="e" :key="e" @click="command = 'options'" clickable />
          </ui-grid>
        </ui-border>
      </div>
      <ui-border>
        <ui-grid v-if="type" :grid="[2, 3]">
          <ui-item>攻击：800</ui-item>
          <ui-item>范围：单体</ui-item>
          <ui-item>重量：10.00t</ui-item>
          <ui-item>守备：86</ui-item>
          <ui-item>弹仓：62</ui-item>
          <ui-item class="disabled">载重：---</ui-item>
        </ui-grid>
        <ui-grid v-else :grid="[2, 3]">
          <ui-item>攻击：255</ui-item>
          <ui-item class="disabled">守备：---</ui-item>
          <ui-item>范围：单体</ui-item>
        </ui-grid>
      </ui-border>
    </div>
    <!-- 道具 -->
    <div v-if="scene === 'items'" class="w-13 relative">
      <div class="title">道具</div>
      <ui-border>
        <ui-grid :grid="[8, 2]">
          <ui-item v-for="i in items[type]" v-text="i" :key="i" @click="command = 'options'" clickable />
        </ui-grid>
      </ui-border>
      <ui-border>
        <ui-grid :grid="[2, 1]">
          <ui-item>道具说明...</ui-item>
        </ui-grid>
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
      <ui-border class="w-13">
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
      type: 0
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
          break;
        case '传真':
          this.scene = 'navigate';
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
    }
  }
};
</script>
