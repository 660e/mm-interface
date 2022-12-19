import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '',
      component: () => import('@/views'),
      children: [
        {
          path: 'menu',
          component: () => import('@/views/menu')
        },
        {
          path: 'shop',
          component: () => import('@/views/shop/shop.vue')
        },
        {
          path: 'inn',
          component: () => import('@/views/shop/inn.vue')
        },
        {
          path: 'bar',
          component: () => import('@/views/shop/bar.vue')
        },
        {
          path: 'office',
          component: () => import('@/views/shop/office.vue')
        },
        {
          path: 'supply',
          component: () => import('@/views/shop/supply.vue')
        },
        {
          path: 'repair',
          component: () => import('@/views/shop/repair.vue')
        },
        {
          path: 'upgrade',
          component: () => import('@/views/shop/upgrade.vue')
        }
      ]
    }
  ]
});
