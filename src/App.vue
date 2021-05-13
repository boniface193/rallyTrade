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
</style>

