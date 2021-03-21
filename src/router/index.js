import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import authStore from '@/store/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    async beforeEnter(to, from, next) {
      await authStore.dispatch('user')
      if (authStore.state.authStatus) {
        next()
      }
      next({
        name: 'Home'
      })
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
