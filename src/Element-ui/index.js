import Vue from 'vue';

import {
  Message,
  Pagination,
} from 'element-ui';

// 按需注册组件
Vue.use(Pagination);

// 如果需要使用组件的方法（如 Message），需手动挂载到 Vue 原型上
Vue.prototype.$message = Message;