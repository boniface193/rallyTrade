const state = {
    bankDetails: [
        {
            id: "deposit002",
            time: "4:30",
            msg: "message goes here",
            moneySign: "mdi-currency-ngn",
            icon: "wire.svg",
            depositType: "WIRE",
            color: "success_bg",
            status: "mdi-check-circle-outline",
            statu: "Status",
            statusText: "APPROVED",
            statusColor: "success",
            bonus: true,
            routes: "",
            acctName: "",
            acctNum: "",
            date: "",
            active: true,
        },
    ]
};
const getters = {
    getBankingDetails: state => state.bankDetails,

};

const actions = {

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