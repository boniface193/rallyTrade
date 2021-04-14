<template>
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
</template>

<script>
import NavbarTab from "@/components/layouts/navbar.vue";
import MobileNavbar from "@/components/layouts/mNavbar.vue";
export default {
  name: "trading",
  components: {
    NavbarTab,
    MobileNavbar,
  },
  data() {
    return {
      navbar: [
        {
          icon: "mdi-border-all",
          routes: "dashboard",
          text: "Dashboard",
        },
        {
          icon: "mdi-account",
          routes: "accounts",
          text: "Accounts",
        },
        {
          icon: "mdi-drag-variant",
          routes: "deposit",
          text: "Deposit",
        },
        {
          icon: "mdi-credit-card-outline",
          routes: "withdrawal",
          text: "Withdrawals",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 426px) {
  .hide-desktop {
    display: none;
  }
}
</style>