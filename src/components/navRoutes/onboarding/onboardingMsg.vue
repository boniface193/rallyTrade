<template>
  <div class="set_bg">
    <div class="row justify-center pt-lg-15 pt-md-15 pt-sm-15">
      <div class="col-lg-4 col-sm-8 col-md-5 rounded-lg white">
        <div class="mx-5">
          <router-link
            :to="{ name: 'login' }"
            class="float-left show-mobile mt-8"
          >
            <v-icon class="float-left">mdi-arrow-left</v-icon>
          </router-link>
          <HeaderLogo width="220px" />
          <div class="text-center">
            <slot>
              <!-- onboarding messages goes here -->
              
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogo from "@/components/navRoutes/onboarding/header.vue";
export default {
  components: {
    HeaderLogo,
  },

  data: () => ({}),

  methods: {},
};
</script>

<style lang="scss" scoped>
@media (min-width: 426px) {
  * {
    margin: 0;
    padding: 0;
  }
  .set_bg {
    background-color: #03b10a;
    background-position: center;
    background-size: cover;
    min-height: 101.7vh;
  }
}
@media (min-width: 426px) {
  .show-mobile {
    display: none;
  }
}
</style>