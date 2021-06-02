<template>
  <div>
    <Skeleton logoWidth="220px" pageTitle="Change Password" imgWidth="180px">
      <v-form method="post" ref="form" @submit.prevent="submitForm()">
        <v-text-field
          class="mt-8"
          :rules="passwordRules"
          label="Password"
          required
          outlined
          dense
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
          v-model="password"
        ></v-text-field>

        <v-layout row class="caption mb-5">
          <v-flex md4 sm4 xs4>Must contain: </v-flex>
          <v-flex md4 sm4 xs4 class="text-left"
            ><span class="error--text">1 uppercase letter</span>
            <br /> <span class="success--text">6 characters</span></v-flex
          >
          <v-flex md4 sm4 xs4 class="text-left"
            ><span class="error--text">1 number</span
            > <br /> <span class="error--text">1 special character</span></v-flex
          >
        </v-layout>

        <Button btnColor="btn_gold" btnTitle="Change" />
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
  data() {
    return {
      show1: false,
      password: "",
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },

  methods: {
    submitForm() {
      console.log("changed password");
    },
  },
};
</script>

<style>
</style>