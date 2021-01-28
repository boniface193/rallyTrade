<template>
  <div class="recoverpassword-container">
    <!-- app logo -->
    <router-link to="/" class="d-flex dark--text app-logo">
      N<v-img src="@/assets/images/fire.svg" max-width="35"></v-img>VA
    </router-link>

    <h3>Reset password</h3>

    <!-- error message -->
    <p class="mt-5 mb-0 error--text" v-show="error">
      {{ errorMessage }}
    </p>
    <!-- form section -->
    <v-form class="form-container" ref="form">
      <!-- Create password -->
      <v-text-field
        class="input mr-5 mt-5"
        v-model="createPassword"
        :rules="createPasswordRules"
        label="Create Password"
        type="password"
        color="primary"
        required
        @keyup.enter="$refs.input2.focus"
      ></v-text-field>

      <!-- Confirm password-->
      <v-text-field
        class="input mr-5 mt-5"
        v-model="confirmPassword"
        :rules="confirmPasswordRules"
        label="Confirm Password"
        type="password"
        color="primary"
        required
        ref="input2"
        @keyup.enter="validate_password()"
      ></v-text-field>

      <!-- button container -->
      <div class="pa-0 mt-5" style="width: 100%">
        <v-btn
          class="primary py-5 mb-5 mx-auto"
          @click="validatePassword()"
          :loading="loading"
          :disabled="loading"
          >Submit</v-btn
        >
      </div>
    </v-form>
  </div>
</template>
<script>
//import modal from "@/components/dashboard/modal.vue";
export default {
  name: "Recoverpassword",
  //components: { modal },
  data: function () {
    return {
      dialog: false,
      dialogMessage: "",
      error: false,
      errorMessage: "",
      loading: false,
      createPassword: "",
      confirmPassword: "",
      createPasswordRules: [
        //verifies password satisfies the requirement
        (v) => !!v || "Password is required",
        (v) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            v
          ) ||
          "Password must contain a minimum of 8 character, at least one uppercase, one lowercase, one number and one special character",
      ],
      confirmPasswordRules: [
        (v) => !!v || "Password is required",
        (v) => v === this.createPassword || "Passwords do not match",
      ],
    };
  },
  methods: {
    //validates form
    validatePassword() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.recoverPassword();
      }
    },
    //submit password
    recoverPassword() {
      this.loading = true;
      this.$store
        .dispatch("onboarding/recoverPassword", {
          email: this.$route.params.email,
          password: this.create_password,
          password_confirmation: this.confirm_password,
          otp: this.$route.params.otp,
        })
        .then((response) => {
          this.loading = false;
          if (response.data.message === "Password reset successful.") {
            this.dialogMessage = "Your password has been successfully changed";
            this.dialog = true;
            this.otp = null;
            //this.$store.commit("onboarding/accessPasswordRecoveryPage", false);
            setTimeout(() => {
              this.$router.push({
                name: "Signin",
              });
            }, 3000);
          }
        })
        .catch((error) => {
          this.loading = false;
          this.error = true;
          if (error.response) {
            this.errorMessage = "something went wrong, pls try again";
          } else {
            this.errorMessage = "No internet Connection!";
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.recoverpassword-container {
  width: 100%;
  text-align: center;
  .app-logo {
    font-size: 40px;
    font-weight: bold;
    color: #000000;
    align-items: baseline;
    text-decoration: none;
    width: 120px;
    margin: 20px auto;
  }
  .form-container {
    width: 85%;
    margin: auto;
    padding: 15px 0px;
  }
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 45px;
  min-width: 70%;
  padding: 0 16px;
}
.status-img {
  width: 140px;
  .v-image {
    width: 100%;
  }
}
</style>