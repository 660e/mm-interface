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
        }
      ]
    }
  ]
});
