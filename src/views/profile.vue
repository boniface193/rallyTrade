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
          icon: "",
          routes: "profile",
          text: "Bio Details",
        },
        {
          icon: "",
          routes: "bankingDetails",
          text: "Banking Details",
        },
        {
          icon: "",
          routes: "security",
          text: "Security",
        },
        {
          icon: "",
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