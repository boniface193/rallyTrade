<template>
  <div>
    <Desktop class="hide-desktop" />
    <v-main>
      <router-view />
    </v-main>
    <Mobile class="show-mobile" />
  </div>
</template>

<script>
import Desktop from "@/components/layouts/desktopnav.vue";
import Mobile from "@/components/layouts/mobilenav.vue";
export default {
  components: {
    Desktop,
    Mobile,
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 426px) {
  .hide-desktop {
    display: none;
  }
}

@media (min-width: 426px) {
  .show-mobile {
    display: none;
  }
}
</style>
