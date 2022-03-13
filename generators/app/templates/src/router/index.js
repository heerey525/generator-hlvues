import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import ErrorPage from '../views/ErrorPage.vue'

// 注册路由插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/child',
        name: 'child',
        meta: {
          title: '子页面'
        },
        component: () => import('../views/child.vue')
      },
    ]
  },
  {
    path: '/axios',
    name: 'axios',
    meta: {
      title: '接口请求'
    },
    component: () => import('../views/axios.vue')
  },
  {
    path: '/count',
    name: 'count',
    meta: {
      title: '计时器'
    },
    component: () => import('../views/count.vue')
  },
  {
    path: '*',
    name: '404',
    meta: {
      title: '404'
    },
    component: ErrorPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const LOGIN_PAGE_NAME = 'login'

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('self_token')
//   if (!token && to.name != LOGIN_PAGE_NAME) {
//     next({ name: LOGIN_PAGE_NAME })
//   } else {
//     next();
//   }
// })

export default router