/*
 * @Author: your name
 * @Date: 2020-10-23 11:45:19
 * @LastEditTime: 2020-10-26 15:52:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \compoent\src\main.ts
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Alter from "@/components/alert/alert";
Vue.config.productionTip = false;
const notice = Alter.notice;
Vue.prototype.$message = Object.assign(notice, Alter);
// Vue.prototype.$message = Alter.info;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
