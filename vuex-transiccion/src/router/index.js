import Vue from 'vue'
import VueRouter from 'vue-router'
import Nivell1 from '../views/Nivell1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'nivell1',
    component: Nivell1
  },
  {
    path: '/nivell2',
    name: 'Nivell2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Nivell2.vue')
  },
  {
    path: '/nivell3',
    name: 'Nivell3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Nivell3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
