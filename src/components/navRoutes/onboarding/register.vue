<template>
  <div>
    <Skeleton pageTitle="Register" imgWidth="100px">
      <v-form method="post" ref="form" @submit="submitForm" class="">
        <div>
          <div>
            <v-text-field
            class="mt-2"
              outlined
              dense
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </div>

          <div class="d-flex">
            <v-text-field
              outlined
              dense
              class="mr-3"
              v-model="fname"
              type="text"
              label="First Name"
              required
            ></v-text-field>

            <v-text-field
              outlined
              dense
              v-model="lname"
              label="Last Name"
              required
            ></v-text-field>
          </div>

          <div class="d-flex">
            <v-select
              outlined
              dense
              class="mr-3"
              :items="items"
              item-text="name"
              label="Country"
            ></v-select>

            <v-select
              outlined
              dense
              :items="state"
              item-text="name"
              label="State"
            ></v-select>
          </div>

          <div>
            <v-text-field
              outlined
              dense
              type="tel"
              v-model="contact"
              label="Phone Number"
              required
            ></v-text-field>
          </div>

          <div class="d-flex">
            <v-text-field
              outlined
              dense
              type="number"
              v-model="otp"
              label="Verify your Phone Number"
              required
            ></v-text-field>

            <v-btn
              :color="TandC ? 'active_link--text white' : 'success--text white'"
              class="mt-3"
              depressed
            >
              {{ TandC ? "SEND CODE" : "sent" }}</v-btn
            >
          </div>
          <!-- <vue-tel-input v-model="phone"></vue-tel-input> -->
        </div>
        <div v-if="TandC">
          <p class="error--text caption ma-0">This email is already in use!</p>
          <router-link class="caption" :to="{ name: 'forgotPwd' }"
            >Recover password for this email</router-link
          >
        </div>
        <div v-else class="d-flex">
          <v-checkbox class="mt-0 ml-2"> </v-checkbox>
          <p class="mb-0" style="font-size: 10px">
            I have read and I accept the
            <router-link
              :to="{ name: 'privacy' }"
              style="text-decoration: none; color: #2979ff"
            >
              Terms and Conditions, Privacy Policy and Disclaimer</router-link
            >. I also agree to be contacted by one of your customer service
            representatives.
          </p>
        </div>

        <Button btnColor="grey" v-if="TandC" disabled btnTitle="Register" />
        <Button btnColor="success" v-else btnTitle="Register" />
      </v-form>
      <div>
        <div class="text-caption">
          If you have account with Rally Trade please
        </div>
        <router-link
          :to="{
            name: 'login',
          }"
          style="text-decoration: none; color: inherit"
        >
          <div class="text-uppercase success--text body-2 mb-3">Login</div>
        </router-link>
      </div>
    </Skeleton>
  </div>
</template>

<script>
import Skeleton from "@/components/navRoutes/onboarding/skeleton.vue";
import Button from "@/components/navRoutes/onboarding/button.vue";
import csc from "country-state-city";
// Import Interfaces`
// import { ICountry, IState, ICity } from 'country-state-city'

export default {
  components: {
    Skeleton,
    Button,
  },

  data: () => ({
    TandC: true,
    lname: "",
    fname: "",
    contact: "",
    otp: "",
    country: "",
    state: [],
    items: {},
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  created() {
    this.country = csc.getAllCountries();
    this.items = this.country.filter((item) => item);
    this.state = csc.getAllStates();
    console.log("name-", this.state);
    // this.check.forEach((i) => {
    //   this.items = i.name
    // });
  },

  methods: {
    submitForm() {
      console.log("submited");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>