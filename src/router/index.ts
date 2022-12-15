import SideTitle from '@/components/SideTitle.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Standings from '../views/Standings.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: SideTitle,
  },
  {
    path: '/standings',
    name: 'standings',
    component: Standings,
  },
  {
    path: '/teams',
    name: 'teams',
    component: () => import ('../views/TeamsView.vue'),
  },
  {
    path: '/teams/:teamName/id/:id',
    name: 'team',
    component: () => import('../views/Roster.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
