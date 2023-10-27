import { createRouter, createWebHistory } from 'vue-router'

// PUBLIC PAGES
import PublicLayout from '@/views/public/Layout.vue'
import AboutPage from '@/views/public/About.vue'

// DASHBOARD PAGES
import DashboardLayout from '@/views/dashboard/Layout.vue'

const routes = [
  // PUBLIC ROUTES
  {
    path: '/',
    name: 'public',
    component: PublicLayout,
    children: [
      {path: '', name: 'about', component: AboutPage}
    ]
  },
  // DASHBOARD ROUTES
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardLayout,
    children: []
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
