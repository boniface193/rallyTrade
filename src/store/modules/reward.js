import axios from "../../axios/reward"

const state = {
    reward: [],
    rewardHistory: [],
    redeem_airtime: [],
};
const getters = {
    getRewards: (state) => {
        return state.reward
    }
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
                    context.commit("setRewards", response.data)
                    // context.commit("setPageDetails", response.data.meta);
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    redeemReward(context) {
        let redeemAirtime = (state.redeem_airtime !== "") ? `/get?reward_id=${state.redeem_airtime}` : ""
        return new Promise((resolve, reject) => {
            axios.get(`/reward${redeemAirtime}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(response => {
                    context.commit("setRewards", response.data.data)
                    resolve(response.data.data)
                    console.log(response.data.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    getHistory(context) {
        return new Promise((resolve, reject) => {
            axios.get("/reward/history", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(response => {
                    context.commit("setHistory", response.data.data)
                    // context.commit("setPageDetails", response.data.meta);
                    resolve(response.data.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

};
const mutations = {
    setRewards: (state, data) => {
        state.reward = data
    },
    setHistory: (state, status) => {
        state.rewardHistory = status
    },
    setRedeemAirtime: (state, value) => {
        state.redeem_airtime = value
    }
};
export default {
    //export all the listed properties
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};