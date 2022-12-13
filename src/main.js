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
    ['回复胶囊', '回复饮料', '能量胶囊', '全满饮料'],
    ['装甲包40', '装甲包80', '装甲包L', '装甲包LL']
  ],
  equipments: [
    ['激光炮', '全覆型头盔', '高聚合物服', '铁莲花', '全覆靴', '陶瓷护甲'],
    ['220mm盖亚炮', '雷电风暴', 'S-龙卷风', '索罗门2', 'V100金刚型']
  ]
};

app.use(store).use(router).mount('#app');
