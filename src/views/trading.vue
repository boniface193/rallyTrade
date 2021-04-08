<template>
  <div>
    <div class="hide-desktop mx-8">
      <NavbarTab :navbar="navbar"></NavbarTab>
    </div>
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
          routes: "",
          text: "Dashboard",
          content: "hello mr",
          active: true,
        },
        {
          icon: "mdi-account",
          routes: "",
          text: "Accounts",
          content: "good evening",
        },
        {
          icon: "mdi-drag-variant",
          routes: "",
          text: "Deposit",
          content: "oops",
        },
        {
          icon: "mdi-credit-card-outline",
          routes: "",
          text: "Withdrawals",
          content: "dance",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap");

$font-family: "Inter", sans-serif;
$bg-color: #252954;
$body-color: #9b9ca7;
$main-bg: #0e0e23;
$logo: #4255d4;
:root {
  --delay: 0s;
}

* {
  outline: none;
  box-sizing: border-box;
  color: $body-color;
  font-family: $font-family;
  font-size: 15px;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.active {
  background-color: $logo !important;
}
.on_hover:hover {
  color: $logo !important;
}

@media (max-width: 426px) {
  .hide-desktop {
    display: none;
  }
}
</style>