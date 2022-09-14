import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import BicycleMap from '../components/BicycleMap.vue'
import BicycleList from '../components/BicycleList.vue'
import BicycleForm from '../components/BicycleForm.vue'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bicycles',
    name: 'bicycles',
    component: BicycleList
  },
  {
    path: '/register',
    name: 'register',
    component: BicycleForm
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
