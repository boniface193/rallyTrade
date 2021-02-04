import axios from "@/axios/inventory.js";

//holds the state properties
const state = {
    products: []
};

//returns the state properties
const getters = {
    products: state => state.products,
};

//fetch data 
const actions = {
    // get product form inventory 
    getProducts(context) {
        return new Promise((resolve, reject) => {
            axios.get("/products", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            }).then(response => {
                context.commit("setProducts", response.data.data);
                //context.commit("setPageDetails", response.data.meta);
                resolve(response);
            })
                .catch(error => {
                    reject(error);
                })
        })
    },
    // get a product detail
    getProductDetail(context, data) {
        return new Promise((resolve, reject) => {
            axios.get(`/products/${data.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            }).then(response => {
                resolve(response);
            })
                .catch(error => {
                    context.commit("doNothing");
                    reject(error);
                })
        })
    },
};

//updates the different state properties
const mutations = {
    setProducts: (state, data) => (state.products = data),
};


export default {
    //export all the listed properties
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};  