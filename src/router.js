import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '',
      component: () => import('@/views'),
      children: [
        {
          path: '/menu',
          component: () => import('@/views/menu.vue')
        },
        {
          path: '/shop/:id',
          component: () => import('@/views/shop.vue')
        },
        {
          path: '/battle',
          component: () => import('@/views/battle.vue')
        }
      ]
    }
  ]
});
