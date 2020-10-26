import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Alter from "@/components/alert/alert";
Vue.config.productionTip = false;
const notice = Alter.notice;
Vue.prototype.$alert = Object.assign(notice, Alter);
Vue.prototype.$message = Alter.info;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
