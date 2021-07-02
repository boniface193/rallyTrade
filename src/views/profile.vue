<template>
  <div>
    <div>
      <div class="hide-desktop mx-8">
        <NavbarTab :navbar="navbar"></NavbarTab>
      </div>
      <v-container>
        <transition>
          <router-view />
        </transition>
      </v-container>
      <MobileNavbar :navbar="navbar" />
    </div>
  </div>
</template>

<script>
import NavbarTab from "@/components/layouts/navbar.vue";
import MobileNavbar from "@/components/layouts/mNavbar.vue";
export default {
  components: {
    MobileNavbar,
    NavbarTab,
  },

  data() {
    return {
      navbar: [
        {
          icon: "mdi-account",
          routes: "profile",
          text: "Bio Details",
        },
        {
          icon: "mdi-bank",
          routes: "bankingDetails",
          text: "Banking Details",
        },
        {
          icon: "mdi-lock",
          routes: "security",
          text: "Security",
        },
        {
          icon: "mdi-progress-wrench",
          routes: "yourActivity",
          text: "Your Activities",
        },
      ],
    };
  },
};
</script>

<style>
</style>