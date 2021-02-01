import Vue from "vue";
import Vuex from "vuex";
import onboarding from "./modules/onboarding";
import inventory from "./modules/inventory";
import orders from "./modules/orders"
import settings from "./modules/settings";
// initial state
const initialState = {
  onboarding: onboarding.state,
  inventory: inventory.state,
  orders: orders.state,
  settings: settings
}

//Convert object in string 
const COPY = JSON.stringify(initialState);

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    onboarding: onboarding,
    inventory: inventory,
    orders: orders,
    settings: settings
  },
  mutations: {
    reset(state) {
      //Convert string in object 
      let copyState = JSON.parse(COPY);
      Object.keys(state).forEach(key => {
        Object.assign(state[key], copyState[key]);
      })
    }
  }
});
