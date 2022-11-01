import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '',
      component: () => import('@/views'),
      children: [
        {
          path: '/message',
          component: () => import('@/views/message.vue')
        }
      ]
    }
  ]
});
