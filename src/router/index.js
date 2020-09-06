import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/user/:id',
    name: 'DirectMessage',
    component: () => import('../views/Direct-message.vue')
  },
  {
    path: '/my-message',
    name: 'MyMessage',
    component: () => import('../views/My-message.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
