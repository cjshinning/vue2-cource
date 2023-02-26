import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/index.vue';
import loadable from '@/utils/loadable';
import hooks from './hooks';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/lession',
    name: 'lession',
    component: loadable(() => import('@/views/lession/index.vue')),
    meta: {
      needLogin: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: loadable(() => import('@/views/profile/index.vue'))
  },
  {
    path: '/login',
    name: 'login',
    component: loadable(() => import('@/views/login/index.vue'))
  },
  {
    path: '/reg',
    name: 'reg',
    component: loadable(() => import('@/views/reg/index.vue'))
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Object.values(hooks).forEach(hook => {
  router.beforeEach(hook);
})

export default router;