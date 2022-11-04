import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '',
      component: () => import('@/views'),
      children: [
        {
          path: '/map',
          component: () => import('@/views/map.vue')
        },
        {
          path: '/message',
          component: () => import('@/views/message.vue')
        },
        {
          path: '/shop-1',
          component: () => import('@/views/shop-1.vue')
        },
        {
          path: '/shop-2',
          component: () => import('@/views/shop-2.vue')
        }
      ]
    }
  ]
});
