import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: 'form',
          name: 'form',
          component: () => import('@/views/Comp/form/index.vue'),
          children: [
            {
              path: 'input',
              name: 'input',
              component: () => import('@/views/Comp/form/Input/index.vue')
            },
            {
              path: 'select',
              name: 'select',
              component: () => import('@/views/Comp/form/Select/index.vue')
            },
            {
              path: 'checkbox',
              name: 'checkbox',
              component: () => import('@/views/Comp/form/Checkbox/index.vue')
            }
          ]
        },
        {
          path: 'table',
          name: 'table',
          component: () => import('@/views/Comp/table/index.vue')
        }
      ]
    }
  ]
})

export default router
