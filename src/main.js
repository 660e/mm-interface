import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

const app = createApp(App);

import UiActor from '@/components/ui-actor.vue';
import UiGrid from '@/components/ui-grid.vue';
import UiItem from '@/components/ui-item.vue';
import UiThead from '@/components/ui-thead.vue';
import UiWindow from '@/components/ui-window.vue';

const components = [UiActor, UiGrid, UiItem, UiThead, UiWindow];

components.forEach(c => app.component(c.name, c));

app.use(router).mount('#app');
