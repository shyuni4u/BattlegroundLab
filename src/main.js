import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/plugins/i18n";
import FlagIcon from "vue-flag-icon";
import BootstrapVue from 'bootstrap-vue';

Vue.use(FlagIcon);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
