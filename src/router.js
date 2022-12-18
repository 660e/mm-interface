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
        }
      ]
    }
  ]
});
