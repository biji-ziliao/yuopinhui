
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
// }

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// 安装 VueRouter
Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',  // 使用 history 模式
  base: process.env.BASE_URL,  // 基础路径配置
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 }
  }
})

export default router

