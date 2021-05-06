<template>
  <div id="app">
  <v-app id="inspire">
    <v-form>
      <v-container>
        <v-row>        
          <v-col cols="12" sm="6" md="3">
            <vue-tel-input v-model="phone" v-on:country-changed="countryChanged"></vue-tel-input>
          </v-col>
        </v-row>
      </v-container>
      <v-btn
        color="success"
        @click="submit"
      >
        submit
      </v-btn>
    </v-form>
  </v-app>
</div>
</template>

<script>
export default {
  data() {
    return {
      phone: null,
      country: null
    }
  },
  methods: {
    countryChanged(country) {
      this.country = country.dialCode
    },
    submit() {
      console.log(this.phone);
      console.log(this.country);
    }
  }

}
</script>

<style>

</style>