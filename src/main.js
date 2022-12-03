import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

const app = createApp(App);

import MenuActors from '@/views/menus/actors.vue';
import MenuEquip from '@/views/menus/equip.vue';
import MenuItem from '@/views/menus/item.vue';

import UiActor from '@/components/ui-actor.vue';
import UiBar from '@/components/ui-bar.vue';
import UiGrid from '@/components/ui-grid.vue';
import UiItem from '@/components/ui-item.vue';
import UiThead from '@/components/ui-thead.vue';
import UiWindow from '@/components/ui-window.vue';

const components = [MenuActors, MenuEquip, MenuItem, UiActor, UiBar, UiGrid, UiItem, UiThead, UiWindow];

components.forEach(c => app.component(c.name, c));

app.use(router).mount('#app');
