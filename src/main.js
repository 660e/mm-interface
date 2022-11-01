import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

const app = createApp(App);

import UiBorder from '@/components/ui-border.vue';

const components = [UiBorder];

components.forEach(c => app.component(c.name, c));

app.use(router).mount('#app');
