import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

const app = createApp(App);

import MenuActors from '@/views/menus/actors.vue';
import MenuAssets from '@/views/menus/assets.vue';
import MenuEquip from '@/views/menus/equip.vue';
import MenuItem from '@/views/menus/item.vue';
import MenuMap from '@/views/menus/map.vue';
import MenuStatus from '@/views/menus/status.vue';

import ShopItem from '@/views/shops/item.vue';

import UiActor from '@/components/ui-actor.vue';
import UiBar from '@/components/ui-bar.vue';
import UiGrid from '@/components/ui-grid.vue';
import UiItem from '@/components/ui-item.vue';
import UiThead from '@/components/ui-thead.vue';
import UiWindow from '@/components/ui-window.vue';

const components = [MenuActors, MenuAssets, MenuEquip, MenuItem, MenuMap, MenuStatus, ShopItem, UiActor, UiBar, UiGrid, UiItem, UiThead, UiWindow];

components.forEach(c => app.component(c.name, c));

app.use(router).mount('#app');
