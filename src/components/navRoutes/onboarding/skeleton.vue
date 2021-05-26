<template>
  <div class="set_bg">
    <div class="row justify-center">
      <div class="col-lg-4 col-xl-3 col-sm-7 col-md-5 rounded-lg white">
        <div class="mx-5">
          <router-link
            :to="{ name: 'login' }"
            class="float-left show-mobile mt-8"
            v-if="this.$route.name == 'forgotPwd'"
          >
            <v-icon class="float-left">mdi-arrow-left</v-icon>
          </router-link>
          <div class="text-center">
            <img
              src="@/assets/images/rally-logo.svg"
              :width="imgWidth"
              :height="imgHeight"
            />
          </div>
          <div class="text-center">
            <h2 class="text-uppercase">{{ pageTitle }}</h2>
            <slot></slot>

            <div class="margin-top" v-if="dontShow">
              <div class="text-caption">
                If you {{ this.$route.name == "register" ? "" : "don’t" }} have
                account with Rally Trade please
              </div>
              <router-link
                :to="{
                  name: this.$route.name == 'register' ? 'login' : 'register',
                }"
                style="text-decoration: none; color: inherit"
              >
                <div class="text-uppercase success--text body-2 mb-3">
                  {{ this.$route.name == "register" ? "Login" : "Register" }}
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["pageTitle", "imgWidth", "imgHeight"],

  data() {
    return {
      dontShow: null,
    };
  },

  created() {
    this.neverShow();
  },

  methods: {
    neverShow() {
      if (
        this.$route.name == "emailverified" ||
        this.$route.name == "register" ||
        this.$route.name == "verifyemail" ||
        this.$route.name == "changepwd"
      ) {
        this.dontShow = false;
      } else {
        this.dontShow = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 598px) {
  .margin-top {
    position: fixed;
    bottom: 5%;
    left: 5%;
    right: 5%;
  }
}
@media (min-width: 599px) {
  * {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .set_bg {
    background-color: #03b10a;
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    padding: 5% 0;
  }
  .margin-top {
    margin-top: 10px;
  }
}
</style>