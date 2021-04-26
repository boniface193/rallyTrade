const state = {
    emptyMsg: "",
    chipCard: [
        {
            id: "deposit001",
            chip: "4:30",
            time: "",
            moneySign: "mdi-currency-ngn",
            icon: "wire.svg",
            depositType: "WIRE",
            color: "white",
            routes: "",
            active: false,
            outlined: true,
        },
        // {
        //     id: "deposit002",
        //     chip: "4:30",
        //     time: "",
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
        //     active: true,
        // },
        // {
        //     id: "deposit003",
        //     chip: "4:30",
        //     time: "",
        //     msg: "message goes here",
        //     moneySign: "mdi-currency-ngn",
        //     icon: "wire.svg",
        //     depositType: "WIRE",
        //     color: "error_bg",
        //     status: "mdi-close-circle-outline",
        //     statu: "Status",
        //     statusText: "DELETED",
        //     routes: "",
        //     statusColor: "error",
        // },
        // {
        //     id: "deposit004",
        //     chip: "4:30",
        //     time: "",
        //     msg: "message goes here",
        //     moneySign: "mdi-currency-ngn",
        //     icon: "wire.svg",
        //     depositType: "WIRE",
        //     color: "secondary_bg",
        //     status: "mdi-update",
        //     statu: "Status",
        //     statusText: "PROGRESS",
        //     routes: "",
        //     statusColor: "secondary",
        // },
        // {
        //     id: "deposit005",
        //     chip: "4:30",
        //     time: "",
        //     msg: "message goes here",
        //     moneySign: "mdi-currency-ngn",
        //     icon: "wire.svg",
        //     depositType: "WIRE",
        //     color: "primary_bg",
        //     status: "mdi-upload",
        //     statu: "Status",
        //     statusText: "UPLOAD",
        //     routes: "",
        //     statusColor: "primary",
        // },
        // {
        //     id: "deposit006",
        //     chip: "4:30",
        //     time: "",
        //     msg: "message goes here",
        //     moneySign: "mdi-currency-ngn",
        //     icon: "wire.svg",
        //     depositType: "WIRE",
        //     color: "primary_bg",
        //     status: "mdi-upload",
        //     statu: "Status",
        //     statusText: "UPLOAD",
        //     routes: "",
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