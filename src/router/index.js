import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }, {
    path: '/experience',
    name: 'experience',
    component: () => import('../views/Experience.vue')
  }, {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
