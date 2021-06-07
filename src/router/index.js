import Vue from "vue";
import VueRouter from "vue-router";
/*******Index page *******/
import Index from "@/views/index.vue"
/*******Index page *******/

/******** onboarding **********/
import Onboarding from "@/views/onboarding.vue"
import Login from "@/components/navRoutes/onboarding/login.vue"
import ForgotPwd from "@/components/navRoutes/onboarding/forgotPwd.vue"
import Register from "@/components/navRoutes/onboarding/register.vue"
import emailVerified from "@/components/navRoutes/onboarding/emailVerified.vue"
import verifyEmail from "@/components/navRoutes/onboarding/verifyEmail.vue"
import changePwd from "@/components/navRoutes/onboarding/changePwd.vue"

/******** onboarding **********/

// client page
import Home from "@/views/home.vue"
/**trading**/
import Trading from "@/views/trading.vue"
import Dashboard from "@/components/navRoutes/trading/dashboard.vue"
import Accounts from "@/components/navRoutes/trading/accounts.vue"
import Deposit from "@/components/navRoutes/trading/deposit.vue"
import Stepper from "@/components/navRoutes/profiles/stepper.vue"
// import Settings from "@/components/navRoutes/profiles/settings.vue"

// Deposit Detail Page
import depositPage from "@/components/detailPages/deposits/depositPage.vue"
import depositDetailPage from "@/components/detailPages/deposits/depoitDetails.vue"
import selectCurrency from "@/components/detailPages/deposits/selectCurrency.vue"
import bankDetails from "@/components/detailPages/deposits/bankingDetails.vue"
import depositHistory from "@/components/detailPages/deposits/depositHistory.vue"


import Withdrawal from "@/components/navRoutes/trading/withdrawal.vue"

import Contest from "@/views/contest.vue"
import Partnership from "@/views/partnership.vue"
import Profile from "@/views/profile.vue"
import Promotion from "@/views/promotion.vue"
import Document from "@/views/document.vue"
import Announcement from "@/views/announcement.vue"
// import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Onboarding,
    children: [
      {
        path: "/",
        name: "index",
        component: Index
      },
      {
        path: "login",
        name: "login",
        component: Login
      },
      {
        path: "forgotpassword",
        name: "forgotPwd",
        component: ForgotPwd
      },
      {
        path: "register",
        name: "register",
        component: Register
      },
      {
        path: "emailverified",
        name: "emailverified",
        component: emailVerified
      },
      {
        path: "verifyemail",
        name: "verifyemail",
        component: verifyEmail
      },
      {
        path: "changepwd",
        name: "changepwd",
        component: changePwd
      },
    ]
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "",
        component: Trading,
        children: [
          {
            path: "",
            name: "dashboard",
            component: Dashboard
          },
          {
            path: "accounts",
            name: "accounts",
            component: Accounts
          },
          {
            path: "deposit",
            component: depositPage,
            children: [
              {
                path: "/",
                name: "deposit",
                component: Deposit,
              },
              {
                path: "select_currency",
                name: "selectCurrency",
                component: selectCurrency,
              },
              {
                path: "deposit_details",
                name: "depositDetails",
                component: depositDetailPage,
                props: true
              },
              {
                path: "bank_details",
                name: "bankDetails",
                component: bankDetails,
                props: true
              },
              {
                path: "",
                name: "history",
                component: depositHistory,
              },
            ]
          },
          {
            path: "/withdrawal",
            name: "withdrawal",
            component: Withdrawal
          },
        ]
      },
      {
        path: "/contest",
        name: "contest",
        component: Contest
      },
      {
        path: "/partnership",
        name: "partnership",
        component: Partnership
      },
      { path: "/stepper", name: "stepper", component: Stepper },
      {
        path: "/profile",
        name: "profile",
        component: Profile,
        // children: [
        //   { path: "", name: "settings", component: Settings }
        // ]
      },
      {
        path: "/promotion",
        name: "promotion",
        component: Promotion
      },
      {
        path: "/documents",
        name: "documents",
        component: Document
      },
      {
        path: "/announcement",
        name: "announcement",
        component: Announcement
      },
    ]
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;