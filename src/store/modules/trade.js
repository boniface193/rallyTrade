const state = {
    chipCard: [
        {
            id: "deposit002",
            chip: "4:30",
            time: "",
            moneySign: "mdi-currency-ngn",
            icon: "wire.svg",
            depositType: "WIRE",
            color: "success_bg",
            status: "mdi-check-circle-outline",
            statusColor: "success",
            routes: "",
            active: true,
        },
        {
            id: "deposit003",
            chip: "4:30",
            time: "",
            moneySign: "mdi-currency-ngn",
            icon: "wire.svg",
            depositType: "WIRE",
            color: "error_bg",
            status: "mdi-close-circle-outline",
            routes: "",
            statusColor: "error",
        },
        {
            id: "deposit004",
            chip: "4:30",
            time: "",
            moneySign: "mdi-currency-ngn",
            icon: "wire.svg",
            depositType: "WIRE",
            color: "secondary_bg",
            status: "mdi-update",
            routes: "",
            statusColor: "secondary",
        },
        {
            id: "deposit005",
            chip: "4:30",
            time: "",
            moneySign: "mdi-currency-ngn",
            icon: "wire.svg",
            depositType: "WIRE",
            color: "primary_bg",
            status: "mdi-upload",
            routes: "",
            statusColor: "primary",
        },
        {
            id: "deposit006",
            chip: "4:30",
            time: "",
            moneySign: "mdi-currency-ngn",
            icon: "wire.svg",
            depositType: "WIRE",
            color: "primary_bg",
            status: "mdi-upload",
            routes: "",
            statusColor: "primary",
        },
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