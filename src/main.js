import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store.js';
import mockjs from 'mockjs';

const app = createApp(App);

import QAvatar from '@/components/q-avatar.vue';
import QBar from '@/components/q-bar.vue';
import QText from '@/components/q-text.vue';
import QWindow from '@/components/q-window.vue';

const components = [QAvatar, QBar, QText, QWindow];

components.forEach(c => app.component(c.name, c));

app.config.globalProperties.$r = (min = 1, max = 255) => mockjs.Random.integer(min, max);
app.config.globalProperties.$d = {
  actors: [
    ['雷班纳', '克里夫', '英格丽特'],
    ['LEOPARD', 'ABRAMS', '99A', 'MERKAVA']
  ]
};

app.use(store).use(router).mount('#app');
