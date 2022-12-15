import { createRouter, createWebHistory } from 'vue-router'
import Standings from '../views/Standings.vue'


const routes = [
  {
    path: '/',
    name: 'standings',
    component: Standings,
  },
  {
    path: '/teams',
    name: 'teams',
    component: () => import ('../views/TeamsView.vue'),
    // children: [
    //   {
    //     path: '/team'
    //   }
    // ]
  },
  {
    path: '/team',
    component: () => import ('../views/Roster.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
