import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

const app = createApp(App);

import QText from '@/components/q-text.vue';
import QWindow from '@/components/q-window.vue';

const components = [QText, QWindow];

components.forEach(c => app.component(c.name, c));

app.use(router).mount('#app');
