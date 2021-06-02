<template>
  <div>
    <Skeleton logoWidth="220px" pageTitle="Login" imgWidth="180px">
      <v-form method="post" ref="form" @submit.prevent="submitForm()">
        <v-text-field
        class="mt-7"
          outlined
          dense
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          outlined
          dense
          :rules="passwordRules"
          label="Password"
          required
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
          v-model="password"
        ></v-text-field>
        <p class="error--text caption">Email and password doesn’t match!</p>
        <Button btnColor="btn_gold" btnTitle="login" />
        <router-link
          style="text-decoration: none; color: inherit"
          :to="{ name: 'forgotPwd' }"
        >
          <h5>Forgot Password!</h5>
        </router-link>
      </v-form>
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
    show1: false,
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
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
</style>