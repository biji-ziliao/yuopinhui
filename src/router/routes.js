// 引入路由组件
import Home from "@/views/Home/index.vue";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Search from "@/views/Search/index.vue";
import Detail from "@/views/Detail";
import AddCartSuccess from "@/views/AddCartSuccess";
import ShopCart from "@/views/ShopCart";
import Trade from "@/views/Trade";
import Pay from "@/views/Pay";
import PaySuccess from "@/views/PaySuccess";
import Center from "@/views/Center";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/search/:keyword?', // 确保路径中定义了动态参数 :keyword
    name: 'search',
    component: Search
  },
  {
    path: '/detail/:skuid?',
    name: 'detail',
    component: Detail
  },
  {
    path: '/addCartSuccess',
    name: 'addCartSuccess',
    component: AddCartSuccess
  },
  {
    path: '/trade',
    name: 'trade',
    component: Trade
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay
  },
  {
    path: '/paySuccess',
    name: 'paySuccess',
    component: PaySuccess
  },
  {
    path: '/center',
    name: 'center',
    component: Center,
    // children: [
    //   {
    //     path: 'myOrder', // 访问路径：/center/myOrder
    //     name: 'MyOrder',
    //     component: MyOrder
    //   },
    //   {
    //     path: 'groupOrder', // 访问路径：/center/groupOrder
    //     name: 'GroupBuy',
    //     component: GroupBuy
    //   }
    // ]
  }
]
export default routes