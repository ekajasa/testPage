const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/IndexPage.vue') },
      { path: 'test', component: () => import('@/pages/TestPage.vue') },
      { path: 'test2', component: () => import('@/pages/TestPage2.vue') },
      { path: 'test3', component: () => import('@/pages/TestPage3.vue') },
      { path: 'test4', component: () => import('@/pages/TestPage4.vue') },
      { path: 'test5', component: () => import('@/pages/TestPage5.vue') },
<<<<<<< HEAD
      { path: 'test6', component: () => import('@/pages/TestPage6.vue') },
      { path: 'test7', component: () => import('@/pages/TestPage7.vue') }
=======
      { path: 'test6', component: () => import('@/pages/TestPage6.vue') }
>>>>>>> 7c11fa01c3f9c924627a2414cdb6a9060a2d7232
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue')
  }
]

export default routes
