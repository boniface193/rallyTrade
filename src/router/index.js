import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home.vue"
import Contest from "@/views/contest.vue"
import Trading from "@/views/trading.vue"
import Partnership from "@/views/partnership.vue"
import Profile from "@/views/profile.vue"
import Promotion from "@/views/promotion.vue"
import Document from "@/views/document.vue"
import Announcement from "@/views/announcement.vue"
// import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    component: Home,
    children: [
      {
        path: "",
      },
      {
        path: "contest",
        name: "contest",
        component: Contest
      },
      {
        path: "trading",
        name: "trading",
        component: Trading
      },
      {
        path: "partnership",
        name: "partnership",
        component: Partnership
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "promotion",
        name: "promotion",
        component: Promotion
      },
      {
        path: "documents",
        name: "document",
        component: Document
      },
      {
        path: "announcement",
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