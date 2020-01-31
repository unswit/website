import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue')
  }, {
    path: '/github',
    name: 'github',
    beforeEnter() {
      window.location = 'https://github.com/Gribbenator/'
    }
  }, {
    path: '/linkedin',
    name: 'linkedin',
    beforeEnter() {
      window.location = 'https://www.linkedin.com/in/michael-gribben/'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
