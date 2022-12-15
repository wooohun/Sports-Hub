import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import navbar from '../components/NavBarShow.vue'
import NBATeams from '@/components/NBATeams.vue'
import NBAStandings from '@/components/NBAStandings.vue'
import NBACurrentGames from '@/components/NBACurrentGames.vue'
import NCAACurrentGames from '@/components/NCAACurrentGames.vue'
import NCAATeams from '@/components/NCAATeams.vue'
import NCAAStandings from '@/components/NCAAStandings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/navbar',
      name: 'navbar',
      component: navbar
    },
    {
      path: '/NBAStandings',
      name: 'NBAStandings',
      component: NBAStandings
    },
    {
      path: '/NBATeams',
      name: 'NBATeams',
      component: NBATeams
    },
    {
      path: '/NBACurrentGames',
      name: 'NBACurrentGames',
      component: NBACurrentGames
    },
    {
      path: '/NCAAStandings',
      name: 'NCAAStandings',
      component: NCAAStandings
    },
    {
      path: '/NCAATeams',
      name: 'NCAATeams',
      component: NCAATeams
    },
    {
      path: '/NCAACurrentGames',
      name: 'NCAACurrentGames',
      component: NCAACurrentGames
    }
  ]
})

export default router
