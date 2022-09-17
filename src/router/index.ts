import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import BicycleForm from '../components/BicycleForm.vue'
import HomeView from '../views/HomeView.vue'
import BicyclesView from '../views/BicyclesView.vue'
import FormView from '../views/FormView.vue'
import LoginView from '../views/LoginView.vue'
import { auth } from '../firebase'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/bicycles',
    name: 'bicycles',
    component: BicyclesView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: FormView,
    props: {
      type: "Editar"
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create',
    name: 'create',
    component: FormView,
    props: {
      type: "Crear"
    },
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})

export default router
