import Vue from 'vue'
import VueRouter from 'vue-router'
import { createRouterLayout } from 'vue-router-layout'


// Create <RouterLayout> component.
const RouterLayout = createRouterLayout((layout) => {
  // Resolves a layout component with layout type string.
  return import('../layouts/' + layout + '.vue')
})

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: RouterLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ]
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
