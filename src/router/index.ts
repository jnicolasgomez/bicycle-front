import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import BicycleForm from '../components/BicycleForm.vue'
import HomeView from '../views/HomeView.vue'
import BicyclesView from '../views/BicyclesView.vue'
import FormView from '../views/FormView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bicycles',
    name: 'bicycles',
    component: BicyclesView
  },
  {
    path: '/edit',
    name: 'edit',
    component: FormView,
    props: {
      type: "Editar"
    }
  },
  {
    path: '/create',
    name: 'create',
    component: FormView,
    props: {
      type: "Crear"
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
