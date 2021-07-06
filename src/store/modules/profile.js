const state = {
    bankDetails: [
        {
            id: 'uuidv4()',
            msg: "Your banking details were rejected due to...",
            currency: "naira",
            acctName: "Razvan",
            acctNum: "0896234256",
            bankLogo: require('@/assets/images/bank-logo/fidelity.svg'),
            bankName: "Fidelity Bank",
            status: 'rejected'
        }
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