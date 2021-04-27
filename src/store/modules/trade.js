const state = {
    emptyMsg: "",
    chipCard: [
        {
            id: "deposit001",
            time: "4:30",
            // day: new Date().toLocaleTimeString().splice('/', ''),
            day: new Date().toLocaleDateString(),
            moneySign: "mdi-currency-ngn",
            icon: "wire.svg",
            depositType: "WIRE",
            color: "white",
            routes: "",
            amount: "10,000,000",
            acctNum: "854715",
            date: "",
            active: false,
            outlined: true,
        },
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
        // {
        //     id: "deposit004",
        //     time: "4:30",
        //     msg: "message goes here",
        //     moneySign: "mdi-currency-ngn",
        //     icon: "wire.svg",
        //     depositType: "WIRE",
        //     color: "secondary_bg",
        //     status: "mdi-update",
        //     statu: "Status",
        //     statusText: "PROGRESS",
        //     routes: "",
        // acctName: "",
        // acctNum: "",
        // date: "",
        //     statusColor: "secondary",
        // },
        {
            id: "deposit005",
            time: "4:30",
            day: new Date().toLocaleDateString(),
            msg: "message goes here",
            moneySign: "mdi-currency-ngn",
            icon: "wire.svg",
            depositType: "WIRE",
            color: "primary_bg",
            status: "mdi-upload",
            statu: "Status",
            statusText: "UPLOAD",
            routes: "",
            amount: "10,000,000",
            acctNum: "854715",
            date: "",
            statusColor: "primary",
        },
        // {
        //     id: "deposit006",
        //     time: "4:30",
        //     msg: "message goes here",
        //     moneySign: "mdi-currency-ngn",
        //     icon: "wire.svg",
        //     depositType: "WIRE",
        //     color: "primary_bg",
        //     status: "mdi-upload",
        //     statu: "Status",
        //     statusText: "UPLOAD",
        //     routes: "",
        // acctName: "",
        // acctNum: "",
        // date: "",
        //     statusColor: "primary",
        // },
    ],
};
const getters = {
    getChipCard: state => state.chipCard
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