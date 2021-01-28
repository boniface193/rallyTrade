import axios from "@/axios/onboarding.js";

// decode token
// const decodeToken = (token) => {
//     var base64Payload = token.split('.')[1];
//     var payload = Buffer.from(base64Payload, 'base64');
//     return JSON.parse(payload.toString());
// }

// checkif user account is verified
// const checkIfAccountVerified = () => {
//     if (localStorage.getItem('accessToken')) {
//         const accountStatus = decodeToken(state.token).meta.email_verified
//         return accountStatus;
//     } else {
//         return false;
//     }
// }

// check if user is authenticated
// const checkIfAuthenticated = () => {
//     if (state.token !== null) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // check if token is expired
// const checkIftokenExpired = () => {
//     if (localStorage.getItem('accessToken')) {
//         const expiration = decodeToken(state.token).exp
//         return expiration >= new Date() || false;
//     } else {
//         return false
//     }
// };

//holds the state properties
const state = {
    presentSignupForm: 'form1',
    token: localStorage.getItem('accessToken') || null,
    accessEmailVerifcationPage: false,
    accessForgotPasswordVerificationPage: false,
    accessPasswordRecoveryPage: false,
    doNothing: null,
};

//returns the state properties
const getters = {};

//fetch data 
const actions = {
    // check if an account exist
    checkAccount: (context, data) => {
        return new Promise((resolve, reject) => {
            axios.post("auth/register/validate-email", data).then(response => {
                resolve(response)
            })
                .catch(error => {
                    context.commit("doNothing");
                    reject(error);
                })
        });
    },
    //creates user account
    register(context, data) {
        return new Promise((resolve, reject) => {
            axios.post("auth/register/seller", data)
                .then(response => {
                    context.commit("setToken", response.data.token);
                    resolve(response)
                })
                .catch(error => {
                    context.commit("removeToken");
                    reject(error)
                })
        })
    },
    //allows users to login
    signIn: (context, data) => {
        return new Promise((resolve, reject) => {
            axios.post("auth/login", data).then(response => {
                context.commit("setToken", response.data.token)
                resolve(response)
            })
                .catch(error => {
                    context.commit("removeToken")
                    reject(error);
                })
        })
    },
    // verify email address 
    verifyEmail: (context, data) => {
        return new Promise((resolve, reject) => {
            axios.post("emails/verify", data).then(response => {
                context.commit("setToken", response.data.token)
                resolve(response);
            })
                .catch(error => {
                    reject(error);
                })
        })
    },
    // forgot password
    forgotPassword: (context, data) => {
        return new Promise((resolve, reject) => {
            axios.post("passwords/reset", data).then(response => {
                resolve(response)
            }).catch(error => {
                context.commit("doNothing");
                reject(error)
            })
        })
    },
    // verify forgot password 
    verifyForgotPassword: (context, data) => {
        return new Promise((resolve, reject) => {
            axios.post("passwords/verify-otp", data).then(response => {
                resolve(response)
            }).catch(error => {
                context.commit("doNothing");
                reject(error);
            })
        })
    },
    // resend opt for email verification 
    resendEmailOTP(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.post("emails/send-otp", {
                email: credentials.email
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
    // commit nothing
    doNothing: (state) => (state.doNothing = null),
    // update the present form on signup 
    setPresentSignupForm: (state, form) => (state.presentSignupForm = form),
    //set token
    setToken: (state, token) => {
        localStorage.setItem('accessToken', token)
        state.token = localStorage.getItem('accessToken') || null
    },
    // remove token
    removeToken: () => {
        localStorage.removeItem('accessToken');
        state.token = localStorage.getItem('accessToken') || null
    },
    accessEmailVerifcationPage: (state, status) => (state.accessEmailVerifcationPage = status),
    accessForgotPasswordVerificationPage: (state, status) => (state.accessForgotPasswordVerificationPage = status),
    accessPasswordRecoveryPage: (state, status) => (state.accessPasswordRecoveryPage = status),
};


export default {
    //export all the listed properties
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};  