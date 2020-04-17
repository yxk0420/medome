import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import echarts from "echarts";

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
