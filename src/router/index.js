import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Signup from "@/components/onboarding/Signup.vue";
import Signin from "@/components/onboarding/Signin.vue";
import Recoverpassword from "@/components/onboarding/Recoverpassword.vue";
import Forgotpassword from "@/components/onboarding/Forgotpassword.vue";
import Emailverification from "@/components/onboarding/Emailverification.vue";
import Forgotpasswordverification from "@/components/onboarding/Forgotpasswordverification.vue";
import Onboarding from "@/views/onboarding/Onboarding.vue";
// dashbord
import dashboardView from "@/views/dashboard/dashboardView.vue";
import Dashboard from "@/views/dashboard/Dashboard.vue";
import Sales_history from "@/views/dashboard/salesHistory.vue";
import Payment_history from "@/views/dashboard/paymentHistory.vue";
import Reward from "@/views/dashboard/Reward.vue";
import Leaderboard from "@/views/dashboard/Leaderboard.vue";
// order routes
import orderView from "@/views/orders/orderView.vue";
import Orders from "@/views/orders/Orders.vue";
import orderDetails from "@/views/orders/orderDetails.vue";

import Settings from "@/views/Settings.vue";
import ProfilePage from "@/components/settings/ProfilePage.vue";
import Profile from "@/components/settings/Profile.vue";
import Privacy from '@/components/settings/Privacy.vue';
import BankAccount from '@/components/settings/BankAccount.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/dashboard",
    component: dashboardView,
    children: [
      // dashboard
      {
        path: "",
        component: Dashboard,
        children: [
          // sales history
          {
            path: "sales",
            name: "sales_history",
            component: Sales_history
          },
          // payment history
          {
            path: "payment",
            name: "payment_history",
            component: Payment_history
          },
          // reward
          {
            path: "reward",
            name: "reward",
            component: Reward
          },
          // leaderboard
          {
            path: "leader",
            name: "leaderboard",
            component: Leaderboard
          },
        ]
      },
      // orders routes
      {
        path: "/orders",
        component: orderView,
        children: [
          {
            path: "/",
            name: "Orders",
            component: Orders
          },
          {
            path: ":id",
            name: "orderDetails",
            component: orderDetails
          }
        ]
      },
      // settings
      {
        path: "/settings",
        component: Settings,
        children: [
          {
            path: "",
            name: "ProfilePage",
            component: ProfilePage
          },
          {
            path: "profile",
            name: "Profile",
            component: Profile
          },
          {
            path: "privacy",
            name: "Privacy",
            component: Privacy
          },
          {
            path: "bank-account",
            name: "BankAccount",
            component: BankAccount
          }
        ]
      },
    ]
  },
  

  // onboarding routes
  {
    path: '/signup', component: Onboarding,
    children: [
      {
        path: "",
        name: "Signup",
        component: Signup,
      },
      {
        path: "/signin",
        name: "Signin",
        component: Signin,
      },
      {
        path: "/recoverpassword",
        name: "Recoverpassword",
        component: Recoverpassword,
        props: true
      },
      {
        path: "/forgotpassword",
        name: "Forgotpassword",
        component: Forgotpassword,
      },
      {
        path: "/emailverification",
        name: "Emailverification",
        component: Emailverification,
        props: true
      },
      {
        path: "/forgotpasswordverification",
        name: "Forgotpasswordverification",
        component: Forgotpasswordverification,
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
