<template>
  <div>
    <Skeleton logoWidth="220px" pageTitle="Forgot Password" imgWidth="180px">
      <v-form
        v-if="!emailSent"
        method="post"
        ref="form"
        @submit.prevent="submitForm()"
      >
        <v-text-field
          class="mt-7"
          outlined
          dense
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <p class="error--text caption">
          This email is not registered with Rally Trade
        </p>

        <Button btnColor="btn_gold" btnTitle="Recover Password" />
      </v-form>

      <div class="mt-8" v-show="emailSent">
        <p class="text-h6">
          An email has been sent to you in order to change your password.
        </p>
      </div>
    </Skeleton>
  </div>
</template>

<script>
import Skeleton from "@/components/navRoutes/onboarding/skeleton.vue";
import Button from "@/components/navRoutes/onboarding/button.vue";
export default {
  components: {
    Skeleton,
    Button,
  },

  data: () => ({
    emailSent: null,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    submitForm() {
      this.$router.push({ name: "emailverified" });
      console.log("Email submited");
      this.emailSent = true;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>