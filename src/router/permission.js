
export default [
  {
    path: '/lession-manager',
    component: () => import('@/views/other/lession-manager.vue'),
    meta: {
      auth: 'lession'
    }
  },
  {
    path: '/student-manager',
    component: () => import('@/views/other/student-manager.vue'),
    meta: {
      auth: 'student'
    }
  },
  {
    path: '/points',
    component: () => import('@/views/other/points.vue'),
    meta: {
      auth: 'points'
    }
  },
  {
    path: '/collect',
    component: () => import('@/views/other/collect.vue'),
    meta: {
      auth: 'collect'
    }
  }
]