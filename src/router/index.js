import { createRouter, createWebHistory } from 'vue-router'
import NavBar from '@/views/NavBar.vue'
import Dashboard from '../views/tabs/Dashboard.vue'
import Project from '../views/tabs/Project.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'nav-bar',
      component: NavBar,
      children: [
        {path: "/", redirect: '/project'},
        {path: "/dashboard", component: Dashboard},
        {path: "/project", component: Project},
      ]
    }
  ]
})

export default router
