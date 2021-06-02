import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueTour from 'vue-tour'
// import VueTelInput from 'vue-tel-input'
// import 'vue-tel-input/dist/vue-tel-input.css'
require('vue-tour/dist/vue-tour.css')

Vue.use(require('vue-moment'));

Vue.use(VueTour)

Vue.config.productionTip = false;

// Vue.use(VueTelInput)

new Vue({
  router,
  store,
  vuetify,

  render: function (h) {
    return h(App);
  }
}).$mount("#app");
