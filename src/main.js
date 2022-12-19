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
import QPopup from '@/components/q-popup.vue';
import QText from '@/components/q-text.vue';
import QWindow from '@/components/q-window.vue';

import MenuActor from '@/views/menu/actor.vue';

const components = [QAvatar, QBanner, QBar, QGrid, QPopup, QText, QWindow, MenuActor];

components.forEach(c => app.component(c.name, c));

app.config.globalProperties.$r = (min = 1, max = 255) => mockjs.Random.integer(min, max);
app.config.globalProperties.$d = {
  actors: [
    ['雷班纳', '克里夫', '英格丽特'],
    ['LEOPARD', 'ABRAMS', '99A', 'MERKAVA']
  ],
  items: [
    ['回复胶囊', '回复饮料', '能量胶囊', '全满饮料', '中和剂', '灭火器', '消防机器人', '碱性喷雾', '麻痹灵', '兴奋剂'],
    ['装甲包40', '装甲包80', '装甲包L', '装甲包LL', '碱性石蜡'],
    ['预备弹', '穿甲弹', '凝固汽油弹', '冷冻弹', '高爆弹'],
    ['猴子的指甲泥', '蛙人的脚蹼', '诺亚系统No.R', '战斗钉鞋']
  ],
  equipments: [
    ['激光炮', '全覆型头盔', '高聚合物服', '铁莲花', '全覆靴', '陶瓷护甲'],
    ['220mm盖亚炮', '雷电风暴', 'S-龙卷风', '索罗门2', 'V100金刚型']
  ],
  dicts: [
    ['攻击', '范围', '属性', '命中', '会心'],
    [255, '单体', '普通', '30%', '10%'],
    [-100, null, null, '+15%', '-5%'],
    ['攻击', '守备', '范围', '属性', '状态', '命中', '会心', '弹仓', '重量'],
    [2000, 300, '单体', '普通', '正常', '30%', '30%', '48/62', '115.00t'],
    [-1000, -100, null, null, null, '-15%', null, null, '-110.00t'],
    ['战斗等级', '腕力', '驾驶等级', '体力', '命中', '速度', '闪避'],
    ['底盘特性', '底盘抗性', '货仓容量', '备用弹仓', '最大载重', '装甲重量', '货仓重量', '装备重量'],
    ['会心一击', '火焰', '5/24', '10/128', '115.36t', '61.36t', '10.00t', '44.00t'],
    ['载重量', '重量', '守备力', '特性'],
    ['200.00t', '50.00t', 300, '金刚奖励'],
    ['+100.00t', '-10.00t', null, null]
  ],
  drinks: ['活力苏打', '猴儿醉', '高飞酒', '特制罗梅罗', '王马格丽塔'],
  wanted: ['沙门菌猿一家', '食人鱼怪', '隆美尔游魂战车', '帕鲁·巴迪斯']
};

app.use(store).use(router).mount('#app');
