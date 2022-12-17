import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store.js';
import mockjs from 'mockjs';

const app = createApp(App);

import QAvatar from '@/components/q-avatar.vue';
import QBanner from '@/components/q-banner.vue';
import QBar from '@/components/q-bar.vue';
import QGrid from '@/components/q-grid.vue';
import QText from '@/components/q-text.vue';
import QWindow from '@/components/q-window.vue';

const components = [QAvatar, QBanner, QBar, QGrid, QText, QWindow];

components.forEach(c => app.component(c.name, c));

app.config.globalProperties.$r = (min = 1, max = 255) => mockjs.Random.integer(min, max);
app.config.globalProperties.$d = {
  actors: [
    ['雷班纳', '克里夫', '英格丽特'],
    ['LEOPARD', 'ABRAMS', '99A', 'MERKAVA']
  ],
  items: [
    ['回复胶囊', '回复饮料', '能量胶囊', '全满饮料', '中和剂', '灭火器', '消防机器人', '碱性喷雾', '麻痹灵', '兴奋剂', '火箭礼花', '铅笔导弹'],
    ['装甲包40', '装甲包80', '装甲包L', '装甲包LL', '碱性石蜡'],
    ['预备弹', '穿甲弹', '凝固汽油弹', '冷冻弹', '高爆弹']
  ],
  equipments: [
    ['激光炮', '全覆型头盔', '高聚合物服', '铁莲花', '全覆靴', '陶瓷护甲'],
    ['220mm盖亚炮', '雷电风暴', 'S-龙卷风', '索罗门2', 'V100金刚型']
  ],
  dicts: [
    ['攻击', '命中', '闪避', '守备', '范围', '抗性'],
    [170, '30%', '10%', 100, '单体', '无'],
    [-100, '+15%', '-5%', -50, null, null],
    ['攻击', '范围', '弹仓', '命中', '耐久', '重量'],
    [2000, '单体', '48/62', '30%', 135, '115.00t'],
    [-1000, null, null, null, -100, '-110.00t'],
    ['战斗等级', '驾驶等级', '命中', '闪避', '腕力', '体力', '速度'],
    ['底盘特性', '底盘抗性', '货架容量', '备用弹仓', '最大载重', '装甲重量', '货架重量', '装备重量'],
    ['会心一击', '火焰', '5/10', '10/128', '115.36t', '61.36t', '10.00t', '44.00t']
  ]
};

app.use(store).use(router).mount('#app');
