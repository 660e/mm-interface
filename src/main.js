import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store';

const app = createApp(App);

import QText from '@/components/q-text.vue';
import QWindow from '@/components/q-window.vue';

const components = [QText, QWindow];

components.forEach(c => app.component(c.name, c));

app.use(store).use(router).mount('#app');
