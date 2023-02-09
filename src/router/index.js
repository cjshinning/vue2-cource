import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/index.vue';
import loadable from '@/utils/loadable';
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
    component: loadable(() => import('@/views/lession/index.vue'))
  },
  {
    path: '/profile',
    name: 'profile',
    component: loadable(() => import('@/views/profile/index.vue'))
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;