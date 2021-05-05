<template>
  <div class="set_bg">
    <div class="row justify-center pt-lg-15 pt-md-15 pt-sm-15">
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
            <v-form method="post" ref="form" @submit="submitForm" class="mt-8">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    v-model="fname"
                    type="text"
                    label="First Name"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    v-model="lname"
                    label="Last Name"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-select :items="items" label="Country"></v-select>
                </v-col>

                <v-col cols="6">
                  <v-select :items="items" label="State"></v-select>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                  type="tel"
                    v-model="contact"
                    label="Phone Number"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="8">
                  <v-text-field
                  type="number"
                    v-model="otp"
                    label="Verify your Phone Number"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="4">
                  <v-btn color="active_link--text white" class="mt-3" depressed disabled>
                    SEND CODE</v-btn>
                </v-col>
              </v-row>

              <v-btn large color="btn_gold" dark class="my-5 elevation-0" block>
                Register
              </v-btn>

              <div class="pt-16">
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
export default {
  components: {
    HeaderLogo,
  },

  data: () => ({
    items: ["Nigeria", "France", "Belgium", "Swizaland"],
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
}
</style>