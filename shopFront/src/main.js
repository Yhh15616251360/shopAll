import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "iview"; // 引入iview依赖
import "iview/dist/styles/iview.css"; // 引入iview css样式

// 导入全局样式表
import "./assets/css/global.css";

import axios from "axios";
//配置请求的根路径
axios.defaults.baseURL = "http://localhost:9000/";
Vue.prototype.$http = axios;

Vue.config.productionTip = false;
Vue.use(iView); //使用iview组件

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
