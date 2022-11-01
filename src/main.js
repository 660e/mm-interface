import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

const app = createApp(App);

import UiBorder from '@/components/ui-border.vue';
import UiDialog from '@/components/ui-dialog.vue';
import UiGrid from '@/components/ui-grid.vue';
import UiItem from '@/components/ui-item.vue';

const components = [UiBorder, UiDialog, UiGrid, UiItem];

components.forEach(c => app.component(c.name, c));

app.use(router).mount('#app');
