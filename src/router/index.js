import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/multiple',
    name: 'Multiple',
    component: () => import(/* webpackChunkName: "about" */ '../views/MultiplePost.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit.vue')
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Navbar.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilePage.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostPage.vue')
  },
  {
    path: '/loginext',
    name: 'Loginext',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginNext.vue')
  },
  {
    path: '/profilext',
    name: 'Profilext',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileNext.vue')
  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
