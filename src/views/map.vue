<template>
  <div class="flex">
    <ui-border class="col">
      <ui-item>Lorem ipsum dolor, sit.</ui-item>
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
    <!-- 道具 -->
    <div v-if="scene === 'items' && step === 1" class="w-10">
      <ui-border>
        <ui-grid :grid="[5, 2]">
          <ui-item v-for="i in items[type]" v-text="i" :key="i" @click="command = 'options'" clickable />
        </ui-grid>
      </ui-border>
      <ui-border>
        <ui-item>Lorem, ipsum, dolor.</ui-item>
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
      items: data.items,
      actors: data.actors,
      scene: null,
      command: null,
      type: 0,
      step: 0
    };
  },
  methods: {
    menu(menu) {
      switch (menu) {
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
