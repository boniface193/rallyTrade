<template>
  <div>
    <Skeleton pageTitle="Register" imgWidth="100px">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="submitRegister"
      >
        <div v-if="nextOTP">
          <div>
            <v-text-field
              class="mt-2"
              outlined
              dense
              type="email"
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
              :rules="nameRules"
            ></v-text-field>

            <v-text-field
              outlined
              dense
              type="text"
              v-model="lname"
              label="Last Name"
              required
              :rules="nameRules"
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
              v-model="selectCountry"
              :rules="nameRules"
            ></v-select>

            <v-select
              outlined
              dense
              :items="state"
              item-text="name"
              label="State"
              v-model="selectState"
              :rules="nameRules"
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
              :rules="nameRules"
            ></v-text-field>
          </div>

          <v-btn color="success" class="mt-5 elevation-0" block @click="nextOTP = false">Next</v-btn>
        </div>

        <div v-else>
          <div class="row justify-center my-3">
            <otp class="col-sm-8 pb-0" :phoneNumber="contact" />
            <h6 class="h6">
              If you did not receive the code
              <span class="active_link--text" style="cursor: pointer"
                >Send Code</span
              >
            </h6>
            <!-- <v-text-field
              outlined
              dense
              type="number"
              v-model="otp"
              label="Verify your Phone Number"
              messages="verification code will be sent to your phone"
              loading=""
              required
              :rules="nameRules"
            ></v-text-field> -->
            <!-- <div>Send Code</div> -->
            <!-- <v-btn
              :color="TandC ? 'active_link--text white' : 'success--text white'"
              class=""
              depressed
            >
              {{ TandC ? "SEND CODE" : "sent" }}</v-btn
            > -->
          </div>
          <!-- <div v-if="TandC">
          <p class="error--text caption ma-0">This email is already in use!</p>
          <router-link class="caption" :to="{ name: 'forgotPwd' }"
            >Recover password for this email</router-link
          >
        </div> -->
          <div class="d-flex">
            <v-checkbox class="mt-0 ml-2 flex" v-model="TandC"> </v-checkbox>
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
          <Button
            btnColor="success"
            type="submit"
            :btnLoading="loadForBtn"
            :disabled="
              email < 1 ||
              fname < 1 ||
              lname < 1 ||
              selectCountry < 1 ||
              selectState < 1 ||
              contact < 1 ||
              TandC == false
            "
            btnTitle="Register"
          />
        </div>
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
import otp from "@/components/general/otp.vue";
import csc from "country-state-city";
// Import Interfaces`
// import { ICountry, IState, ICity } from 'country-state-city'

export default {
  components: {
    Skeleton,
    Button,
    otp,
  },

  data: () => ({
    nextOTP: true,
    loadForBtn: false,
    TandC: false,
    valid: true,
    lname: "",
    fname: "",
    selectCountry: "",
    contact: "",
    otp: "",
    country: "",
    selectState: "",
    state: [],
    items: {},
    nameRules: [(v) => !!v || "this is required"],
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
    // console.log("name-", this.state);
    // this.check.forEach((i) => {
    //   this.items = i.name
    // });
    this.submitRegister();
  },

  methods: {
    submitRegister() {
      console.log("submited");
      this.btnLoading = true;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>