import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home.vue"
      /**trading**/
import Trading from "@/views/trading.vue"
import Dashboard from "@/components/navRoutes/trading/dashboard.vue"
import Accounts from "@/components/navRoutes/trading/accounts.vue"
import Deposit from "@/components/navRoutes/trading/deposit.vue"
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
    component: Home,
    children: [
      {
        path: "/trading",
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
            name: "deposit",
            component: Deposit
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
        name: "document",
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