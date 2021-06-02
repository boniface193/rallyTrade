<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap");
@media (min-width: 426px) {
  .show-mobile {
    display: none;

  }
}
@media (max-width: 426px) {
  .hide-desktop {
    display: none;
  }
}

@media (min-width: 600px) {
  .show-mobile-ex {
    display: none;

  }
}
@media (max-width: 599px) {
  .hide-desktop-ex {
    display: none;
  }
}
</style>

