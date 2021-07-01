import Vue from "vue";
import Vuex from "vuex";
import trading from "./modules/trade";
import profile from "./modules/profile";

// initial state
const initialState = {
    trading: trading.state,
    profile: profile.state,

}

//Convert object in string 
const COPY = JSON.stringify(initialState);

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        trading: trading,
        profile: profile,
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