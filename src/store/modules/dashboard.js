import axios from "../../axios/dashboard"
import moment from "moment"

const state = {
    dashboardItems: [],
    dateRange: {
        startDate: moment(new Date()).format("L") ,
        endDate: moment(new Date()).format("L"),
    },
};

const getters = {
    dashboard: state => state.dashboardItems

};

const actions = {
    getSellerPoint(context) {
        return new Promise((resolve, reject) => {
            axios.get('/leaderboard/seller/dashboard', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            }).then((response) => {
                context.commit('setDashboard', response.data.data)
                resolve(response.data.data)
            })
                .catch((error) => {
                    context.commit('error', error)
                    reject(error)
                })
        })
    },

    searchSellerPoint(context) {
        let dateRange = ((state.dateRange.startDate || state.dateRange.endDate !== null) ? `created_between=${state.dateRange.startDate},${state.dateRange.endDate}` : "");

        return new Promise((resolve, reject) => {
            axios.get(`/leaderboard/seller/dashboard?${dateRange}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            }).then((response) => {
                context.commit('setDashboard', response.data.data)
                console.log("Point", response.data.data)
                resolve(response.data.data)
            }).catch((error) => {
                context.commit('error', error)
                reject(error)
            })
        })
    },

    getSellerRank(context) {
        return new Promise((resolve, reject) => {
            axios.get('/leaderboard/seller/rank', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            }).then((response) => {
                context.commit('setDashboard', response.data.data)
                resolve(response.data.data)
                console.log("Rank", response.data.data)
            })
                .catch((error) => {
                    context.commit('error', error)
                    reject(error)
                })
        })
    },


    searchSellerRank(context) {
        let dateRange = ((state.dateRange.startDate || state.dateRange.endDate !== null) ? `created_between=${state.dateRange.startDate},${state.dateRange.endDate}` : "");

        return new Promise((resolve, reject) => {
            axios.get(`/leaderboard/seller/rank?${dateRange}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            }).then((response) => {
                context.commit('setDashboard', response.data.data)
                console.log("Rank", response.data.data)
                resolve(response.data.data)
            }).catch((error) => {
                context.commit('error', error)
                reject(error)
            })
        })
    },

};

const mutations = {
    setDashboard: (state, data) => state.dashboardItems = data,
    filterRange(state, dateRange) {
        state.dateRange = dateRange
    },


};

export default {
    //export all the listed properties
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}