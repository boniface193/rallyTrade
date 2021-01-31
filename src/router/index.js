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
import Dashboard from "@/views/dashboard/Dashboard.vue"
// order routes
import orderView from "@/views/orders/orderView.vue";
import Orders from "@/views/orders/Orders.vue";
import orderDetails from "@/views/orders/orderDetails.vue";


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
        name: "Dashboard",
        component: Dashboard
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
