import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 懒加载
const Login = () => import(/* webpackChunkName: "Login" */ '@/views/login/Login.vue')
const Home = () => import(/* webpackChunkName: "Login" */ '@/views/home/Home.vue')
const Welcome = () => import(/* webpackChunkName: "Login" */ '@/views/welcome/Welcome.vue')

const Users = () => import(/* webpackChunkName: "Login" */ '@/views/user/User.vue')
const Rights = () => import(/* webpackChunkName: "Login" */ '@/views/power/Rights.vue')
const Roles = () => import(/* webpackChunkName: "Login" */ '@/views/power/Roles.vue')

const Cate = () => import(/* webpackChunkName: "Login" */ '@/views/goods/Cate.vue')
const Params = () => import(/* webpackChunkName: "Login" */ '@/views/goods/Params.vue')

const Add = () => import(/* webpackChunkName: "Login" */ '@/views/goods/Add.vue')
const GoodsList = () => import(/* webpackChunkName: "Login" */ '@/views/goods/List.vue')

const Order = () => import(/* webpackChunkName: "Login" */ '@/views/order/Order.vue')
const Report = () => import(/* webpackChunkName: "Login" */ '@/views/report/Report.vue')

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/Welcome',
    children: [
      {
        path: '/home', component: Welcome
      },
      {
        path: '/users', component: Users
      },
      {
        path: '/rights', component: Rights
      },
      {
        path: '/roles', component: Roles
      },
      {
        path: '/categories', component: Cate
      },
      {
        path: '/params', component: Params
      },
      {
        path: '/goods', component: GoodsList
      },
      {
        path: '/goods/add', component: Add
      },
      {
        path: '/orders', component: Order
      },
      {
        path: '/reports', component: Report
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 挂载路由导航守卫,to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作 next('/login')强制跳转login

router.beforeEach((to, from, next) => {
  // 访问登录页，放行
  if (to.path === '/login') return next()
  // 获取token
  const tokenstr = window.sessionStorage.getItem('token')
  // 没有token, 强制跳转到登录页
  if (!tokenstr) return next('/login')
  next()
})

export default router
