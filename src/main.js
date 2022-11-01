import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

const app = createApp(App);

import UiBorder from '@/components/ui-border.vue';
import UiGrid from '@/components/ui-grid.vue';
import UiItem from '@/components/ui-item.vue';

const components = [UiBorder, UiGrid, UiItem];

components.forEach(c => app.component(c.name, c));

app.use(router).mount('#app');
