import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueClipboard from 'vue-clipboard2'
// import Flutterwave from  "flutterwave-vue-v3";
import VueTour from 'vue-tour'

require('vue-tour/dist/vue-tour.css')

Vue.use(VueTour)

Vue.use(VueClipboard);

Vue.use(require('vue-moment'));

// Vue.use(Flutterwave, { publicKey: '' } )

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,

  render: function (h) {
    return h(App);
  }
}).$mount("#app");
