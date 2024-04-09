import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('/src/views/Home.vue')
    },
    {
      path: '/nom',
      name: 'Nom',
      component: () => import('/src/views/Nom.vue')
    },
    {
      path: '/bd',
      name: 'Bd',
      component: () => import('/src/views/Bd.vue')
    },
    {
      path: '/series',
      name: 'Series',
      component: () => import('/src/views/Series.vue')
    }
  ]
})

export default router
