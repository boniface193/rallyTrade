const state = {
    bankDetails: [
        
    ]
};
const getters = {
    getBankingDetails: state => state.bankDetails,

};

const actions = {

};

const mutations = {
    setBankingDetails(state, data){
        state.bankDetails.unshift(data)
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