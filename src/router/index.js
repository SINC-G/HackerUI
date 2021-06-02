import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/homeView/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/analysis/advanced',
    name: 'Advanced',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/advancedView/Advanced.vue'),
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/authView/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/dashboardView/Dashboard.vue'),
    children: [
      {
        path: 'application',
        component: () => import('../views/dashboardView/components/AppOverview.vue'),
        name: 'Application'
      },
      {
        path: 'manager',
        component: () => import('../views/dashboardView/components/AppControl.vue'),
        name: 'Manager'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  //console.log(to)
  if (to.name === 'Login') {
    next();
  } else {
    //console.log(Boolean(to.name !== 'Home'))
    if (!store.state.isLogin && to.name !== 'Home') {
      next({ name: 'Home' });
    } else {
      //console.log(to, from, next)
      next();
    }
  }
});


export default router
