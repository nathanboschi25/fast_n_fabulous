import { createRouter, createWebHistory } from 'vue-router'

// PUBLIC PAGES
import * as Public from '@/views/public'

// DASHBOARD PAGES
import * as Dashboard from '@/views/dashboard'

const routes = [
  // PUBLIC ROUTES
  {
    path: '/',
    name: 'public',
    component: Public.PublicLayout,
    children: [
      {path: '', name: 'About Fast & Fabulous', component: Public.AboutPage}
    ]
  },
  // DASHBOARD ROUTES
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard.DashboardLayout,
  },
  // UNKNOW ROUTE REDIRECT TO PUBLIC HOME
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
