import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/scss/style.scss";
import"../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import"../node_modules/@fortawesome/fontawesome-free/js/all.min.js";


new Vue({
  el:'#app',
  router, 
  store,
  render: h => h(App)
});


import"../src/jq/plugin.js";
