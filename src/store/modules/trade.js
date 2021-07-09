const state = {
    emptyMsg: "",
    chipCard: [
        // {
        //     id: "deposit002",
        //     time: "4:30",
        //     msg: "message goes here",
        //     moneySign: "mdi-currency-ngn",
        //     icon: "wire.svg",
        //     depositType: "WIRE",
        //     color: "success_bg",
        //     status: "mdi-check-circle-outline",
        //     statu: "Status",
        //     statusText: "APPROVED",
        //     statusColor: "success",
        //     bonus: true,
        //     routes: "",
        // acctName: "",
        // acctNum: "",
        // date: "",
        //     active: true,
        // },
        // {
        //     id: "deposit003",
        //     time: "4:30",
        //     msg: "message goes here",
        //     moneySign: "mdi-currency-ngn",
        //     icon: "wire.svg",
        //     depositType: "WIRE",
        //     color: "error_bg",
        //     status: "mdi-close-circle-outline",
        //     statu: "Status",
        //     statusText: "DELETED",
        //     routes: "",
        // acctName: "",
        // acctNum: "",
        // date: "",
        //     statusColor: "error",
        // },
    ],
    depositeType: [
        {
            cols: 12,
            size: "125",
            routes: "",
            image: require("@/assets/images/general/credit-card.svg"),
            text: "INSTANT",
        },
        {
            cols: 6,
            size: "125",
            routes: "bankDetails",
            image: require("@/assets/images/general/wire-deposite.svg"),
            text: "WIRE",
        },
        {
            cols: 6,
            size: "125",
            routes: "",
            image: require("@/assets/images/general/teller.svg"),
            text: "TELLER",
        },
    ],
    selectAccount: [
        {
            id: "001",
            currency: "mdi-currency-ngn",
            currencyColor: "#9EE8FF",
            acctType: "mt4",
            text: 'MT4',
            icon: require('@/assets/images/general/mt4.png'),
        },
        {
            id: "002",
            currency: "mdi-currency-usd",
            currencyColor: "#A0FF9E",
            acctType: "fx",
            text: 'xStation ',
            icon: require("@/assets/images/general/fx.svg"),
        },
        {
            id: "003",
            currency: "mdi-currency-usd",
            currencyColor: "#A0FF9E",
            acctType: "fx",
            text: 'xStation ',
        },
        {
            id: "004",
            currency: "mdi-currency-usd",
            currencyColor: "#A0FF9E",
            acctType: "fx",
            text: 'xStation ',
        },
        {
            id: "005",
            currency: "mdi-currency-usd",
            currencyColor: "#A0FF9E",
            acctType: "fx",
            text: 'xStation ',
        },
        {
            id: "006",
            currency: "mdi-currency-usd",
            currencyColor: "#A0FF9E",
            acctType: "fx",
            text: 'xStation ',
        },
    ],
    selectBank: [
        { text: "GTbank", icon: require("@/assets/images/bank-logo/gtbank.jpg") },
        { text: "Wema", icon: require("@/assets/images/bank-logo/wema.png") },
        { text: "Zenith", icon: require("@/assets/images/bank-logo/zenith.png") },
        {
            text: "Heritage",
            icon: require("@/assets/images/bank-logo/heritage.jpg"),
        },
        {
            text: "Fidelity",
            icon: require("@/assets/images/bank-logo/fidelity.svg"),
        },
        {
            text: "Sterling",
            icon: require("@/assets/images/bank-logo/sterling.jpg"),
        },
        { text: "OTHER BANK" },
    ],
    selectFRNGBank: [
        {
            text: "GTbank",
            icon: require("@/assets/images/bank-logo/gtbank.jpg"),
            class: "my-2 pa-1",
            acctName: "FRNG LIMITED-CLIENT'S ACCOUNT",
            acctNum: "198832466",
            id: "001",
        },
        {
            text: "Wema",
            icon: require("@/assets/images/bank-logo/wema.png"),
            class: "mt-4 mb-4 pa-1",
            acctName: "FRNG LIMITED CLIENT ACCOUNT",
            acctNum: "122598731",
            id: "002",
        },
        {
            text: "Zenith",
            icon: require("@/assets/images/bank-logo/zenith.png"),
            class: "my-2 pa-1",
            acctName: "FRNG LIMITED (CLIENT ACCT)",
            acctNum: "1014414254",
            id: "003",
        },
    ],
    tour: [
        {
            target: "#v-step-0",
            content:
                "<span class='text-body-1'>it is important to add in the remarks or comment field the<div class='orange--text '> rally account number.<br /> 859647!</span></span>",
            params: {
                placement: "top", // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
            },
        },
        {
            target: "#v-step-1",
            content: "<span class='text-caption'>Rally Account Name!</span>",
        },
        {
            target: "#v-step-2",
            content: "<span class='text-caption'>Rally Account Number!</span>",
        },
        {
            target: "#v-step-3",
            content: "<span class='text-caption'>Amount to transfer!</span>",
        },
        {
            target: "#v-step-4",
            content:
                "<span class='text-caption'>Rally Trade Account Number!</span>",
        },
    ]
};
const getters = {
    getChipCard: state => state.chipCard,
    getAccount: state => state.selectAccount,
    getAcct: state => state.depositeType,
    getSelectBank: state => state.selectBank,
    getFRNGBank: state => state.selectFRNGBank,
    getTour: state => state.tour,
};

const actions = {

};

const mutations = {

    setChipCard(state, data) {
        state.chipCard.unshift(data)
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