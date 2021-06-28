<template>
  <div>
    <!-- <v-container class="mt-16">
      <Settings />
    </v-container> -->
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
// import Settings from "@/components/navRoutes/profiles/settings.vue";
import NavbarTab from "@/components/layouts/navbar.vue";
import MobileNavbar from "@/components/layouts/mNavbar.vue";
export default {
  components: {
    // Settings,
    MobileNavbar,
    NavbarTab,
  },

  data() {
    return {
      navbar: [
        {
          icon: "mdi-folder-cog-outline",
          routes: "profile",
          text: "Your Profile",
        },
        {
          icon: "mdi-account-key-outline",
          routes: "forgotPwd",
          text: "password",
        },
        {
          icon: "mdi-email-sync-outline",
          routes: "deposit",
          text: "Email Notification",
        },
        {
          icon: "mdi-cog-outline",
          routes: "withdrawal",
          text: "Settings",
        },
      ],
    };
  },
};
</script>

<style>
</style>