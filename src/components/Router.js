import { createRouter, createWebHistory } from 'vue-router'
import AmericanFootball from 'AmericanFootball.vue'

const routes = [
  {
    path: '/',
    name: 'AmericanFootball',
    component: AmericanFootball
  },
  {
    //path to place other than american football
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './about.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router