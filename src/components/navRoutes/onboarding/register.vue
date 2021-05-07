<template>
  <div class="set_bg">
    <div class="row justify-center pt-lg-5 pt-md-5 pt-sm-5">
      <div class="col-lg-4 col-sm-8 col-md-5 rounded-lg white">
        <div class="mx-5">
          <router-link
            :to="{ name: 'login' }"
            class="float-left show-mobile mt-8"
          >
            <v-icon class="float-left">mdi-arrow-left</v-icon>
          </router-link>
          <HeaderLogo width="150px" />
          <div class="text-center">
            <h2 class="text-uppercase">Register</h2>
            <v-form method="post" ref="form" @submit="submitForm" class="">
              <div>
                <div>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </div>

                <div class="d-flex">
                  <v-text-field
                    class="mr-3"
                    v-model="fname"
                    type="text"
                    label="First Name"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="lname"
                    label="Last Name"
                    required
                  ></v-text-field>
                </div>

                <div class="d-flex">
                  <v-select
                    class="mr-3"
                    :items="items"
                    item-text="name"
                    label="Country"
                  ></v-select>

                  <v-select
                    :items="state"
                    item-text="name"
                    label="State"
                  ></v-select>
                </div>

                <div>
                  <v-text-field
                    type="tel"
                    v-model="contact"
                    label="Phone Number"
                    required
                  ></v-text-field>
                </div>

                <div class="d-flex">
                  <v-text-field
                    type="number"
                    v-model="otp"
                    label="Verify your Phone Number"
                    required
                  ></v-text-field>

                  <v-btn color="active_link--text white" class="mt-1" depressed>
                    SEND CODE</v-btn
                  >
                </div>
                <vue-tel-input v-model="phone"></vue-tel-input>
              </div>

              <v-btn large color="btn_gold" dark class="my-5 elevation-0" block>
                Register
              </v-btn>

              <div>
                <div class="text-caption">
                  If you have an account with Rally Trade please
                </div>
                <router-link
                  :to="{ name: 'login' }"
                  style="text-decoration: none; color: inherit"
                >
                  <div class="text-uppercase success--text body-2 mb-3">
                    Login
                  </div>
                </router-link>
              </div>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogo from "@/components/navRoutes/onboarding/header.vue";
import csc from "country-state-city";
// Import Interfaces`
// import { ICountry, IState, ICity } from 'country-state-city'

export default {
  components: {
    HeaderLogo,
  },

  data: () => ({
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
  .mx-large {
padding: 5px 35% !important;
  }
}
</style>