import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Repos from '@/views/Repo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/repos',
      name: 'repos',
      component: Repos
    }
  ]
})

export default router
