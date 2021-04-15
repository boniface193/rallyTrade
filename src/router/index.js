import Vue from "vue";
import VueRouter from "vue-router";
/*******Index page *******/
import Index from "@/views/index.vue"
/*******Index page *******/

// client page
import Home from "@/views/home.vue"
/**trading**/
import Trading from "@/views/trading.vue"
import Dashboard from "@/components/navRoutes/trading/dashboard.vue"
import Accounts from "@/components/navRoutes/trading/accounts.vue"
import Deposit from "@/components/navRoutes/trading/deposit.vue"

// Deposit Detail Page
import depositPage from "@/components/detailPages/deposits/depositPage.vue"
import depositDetailPage from "@/components/detailPages/deposits/depoitDetails.vue"
import selectCurrency from "@/components/detailPages/deposits/selectCurrency.vue"

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
    name: "index",
    component: Index
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
                path: "",
                name: "deposit",
                component: Deposit,
              },
              {
                path: "",
                name: "selectCurrency",
                component: selectCurrency,
              },
              {
                path: "",
                name: "depositDetails",
                component: depositDetailPage,
                props: true
              }
            ]
          },
          {
            path: "withdrawal",
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
      {
        path: "/profile",
        name: "profile",
        component: Profile
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