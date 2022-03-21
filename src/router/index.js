import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Front/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '',
        name: '',
        component: () => import('../views/Front/IndexView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Front/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Backend/AdminView.vue'),
    children: [
      {
        path: '',
        name: '',
        component: () => import('../views/Backend/DashBoard.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
