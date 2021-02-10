import axios from "../../axios/reward"

const state = {
    reward: []
};
const getters = {

};
const actions = {
    getReward(context) {
        return new Promise((resolve, reject) => {
            axios.get("/reward", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(response => {
                    context.commit("setOrders", response.data.data)
                    // context.commit("setPageDetails", response.data.meta);
                    resolve(response.data.data)
                    console.log(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

};
const mutations = {

};
export default {
    //export all the listed properties
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};