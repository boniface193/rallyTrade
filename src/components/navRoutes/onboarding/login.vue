<template>
  <div class="set_bg">
    <div class="row justify-center pt-lg-15">
      <div class="col-lg-4 col-sm-8 col-md-5 rounded-lg white">
        <div class="mx-5">
          <HeaderLogo width="220px" />
          <div class="text-center">
            <h2 class="text-uppercase">login</h2>
            <v-form method="post" ref="form" @submit="submitForm">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                :rules="nameRules"
                label="Password"
                required
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                v-model="password"
              ></v-text-field>

              <v-btn large color="btn_gold" dark class="my-5 elevation-0" block>
                Login
              </v-btn>

              <h5>Forgot Password!</h5>
              <div class="caption mt-10">If you don’t have an account with Rally Trade please</div>
              <div class="text-uppercase success--text body-2 mb-3">Register</div>
            </v-form>
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

  data: () => ({
    show1: false,
    valid: true,
    password: "",
    nameRules: [
      (v) => !!v || "Name is required",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    submitForm() {
      console.log("submited");
    },
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 426px) {
  *{
    margin:0;
	padding:0;
  }
  .set_bg {
    background-color: #03b10a;
    background-position: center;
    background-size: cover;
    min-height: 101.7vh;
  }
}
</style>