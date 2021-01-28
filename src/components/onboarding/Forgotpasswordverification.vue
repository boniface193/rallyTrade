<template>
  <div class="forgotpasswordverification-container">
    <!-- alert -->
    <v-alert type="success" v-show="resendOtpSuccess"
      >OPT has been sent successfully!</v-alert
    >

    <!-- app logo -->
    <router-link to="/" class="d-flex dark--text app-logo">
      N<v-img src="@/assets/images/fire.svg" max-width="35"></v-img>VA
    </router-link>

    <h3>Verify your account</h3>

    <p class="mt-3">Please enter the code sent to {{ $route.params.email }}</p>

    <!-- error message -->
    <p class="error--text mt-3 mb-0" v-show="errorMessage == true">
      {{ message }}
    </p>

    <v-form class="form-container">
      <div class="mb-2 mx-auto">
        <v-otp-input
          ref="otpInput1"
          separator=""
          :num-inputs="5"
          :should-auto-focus="true"
          input-type="number"
          @on-complete="handleOnComplete"
          @on-change="handleOnChange"
        />
      </div>

      <!-- button container -->
      <div class="pa-0 mt-10" style="width: 100%">
        <p>
          Didn't receive the code?
          <a style="text-decoration: none" @click="resendOTP()">Resend Code</a>
        </p>
        <v-btn
          class="primary py-5 mb-5 mx-auto"
          @click="submitCode()"
          :loading="loading"
          :disabled="loading"
          >Verify</v-btn
        >
      </div>
    </v-form>
  </div>
</template>
<script>
import OtpInput from "@/components/onboarding/verifyInput";
export default {
  name: "forgotPasswordVerification",
  components: {
    "v-otp-input": OtpInput,
  },
  data: function () {
    return {
      loading: false,
      verify: false,
      code: null,
      errorMessage: false,
      message: "",
      resendOtpSuccess: false,
    };
  },
  methods: {
    // check if code changes
    handleOnChange(value) {
      this.code = value;
      if (this.code.length != 5) {
        this.verify = false;
      }
    },
    // checks if code is complete
    handleOnComplete(value) {
      this.verify = true;
      this.code = value;
      this.errorMessage = false;
    },
    // submit code
    submitCode() {
      if (this.verify) {
        this.loading = true;
        this.$store
          .dispatch("onboarding/verifyForgotPassword", {
            otp: this.code,
            email: this.$route.params.email,
          })
          .then((response) => {
            this.loading = false;
            if (response.data.message === "OTP verified successfully.") {
              this.$store.commit(
                "onboarding/accessForgotPasswordVerificationPage",
                false
              );
              this.$store.commit("onboarding/accessPasswordRecoveryPage", true);
              this.$router.push({
                name: "Recoverpassword",
                params: {
                  otp: response.data.otp,
                  email: this.$route.params.email,
                },
              });
            }
          })
          .catch((error) => {
            this.loading = false;
            this.errorMessage = true;
            if (error.response) {
              this.message = "OTP is invalid or expired";
            } else {
              this.message = "No internet Connection!";
            }
          });
      } else {
        this.errorMessage = true;
        this.message =
          "Please Enter the 5 digits code sent to your email adddress";
      }
    },
    // resend OTP
    resendOTP() {
      this.$store
        .dispatch("onboarding/resendEmailOTP", {
          email: this.$route.params.email,
        })
        .then((response) => {
          if (response.data.message === "An OTP has been sent to your email.") {
            this.resendOtpSuccess = true;
            setTimeout(() => {
              this.resendOtpSuccess = false;
            }, 3000);
          }
        })
        .catch((error) => {
          this.errorMessage = true;
          if (error.response) {
            this.message = error.response.errors.email[0];
          } else {
            this.message = "No internet Connection!";
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.forgotpasswordverification-container {
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