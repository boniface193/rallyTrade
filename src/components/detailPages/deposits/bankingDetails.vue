<template>
  <div class="container mx-4">
    <div class="text-center text-h5 font-weight-bold my-8">Banking Details</div>
    <v-row>
      <v-col cols="3" class="text-body-1">Amount</v-col>
      <v-col cols="2"
        ><div class="chip d-flex justify-center">
          <v-icon class="text-center white--text">mdi-currency-ngn</v-icon>
        </div></v-col
      >
      <v-col cols="7" class="text-h5 text-black ">10,000,000</v-col>
    </v-row>
    <!-- <div class="d-flex">
      <p>Amount </p> <div class="chip d-flex justify-center mx-5">
          <v-icon class="text-center white--text">mdi-currency-ngn</v-icon>
       </div>
       <div>10,000,000</div>
    </div> -->
    <div class="text-body-1">Select FRNG Bank</div>
    <div>
      <v-row class="d-flex justify-center mx-3 my-3">
        <v-col cols="4" class="d-flex justify-center">
          <Gen-Card class="text-center" :link="true">
            <img
              width="50%"
              class="my-2"
              src="@/assets/images/gtbank.jpg"
              alt=""
            />
            <div>GT BANK</div>
            <!-- <v-icon size="70">mdi-currency-ngn</v-icon> -->
          </Gen-Card></v-col
        >
        <v-col cols="4" class="d-flex justify-center">
          <Gen-Card class="text-center" :link="true">
            <img
              width="70%"
              class="mt-2 mb-4"
              src="@/assets/images/wema.png"
              alt=""
            />
            <div>WEMA</div>
            <!-- <v-icon size="70">mdi-currency-ngn</v-icon> -->
          </Gen-Card></v-col
        >
        <v-col cols="4" class="d-flex justify-center">
          <Gen-Card class="text-center" :link="true">
            <img
              width="50%"
              class="my-2"
              src="@/assets/images/zenith.png"
              alt=""
            />
            <div>ZENITH</div>
            <!-- <v-icon size="70">mdi-currency-ngn</v-icon> -->
          </Gen-Card></v-col
        >
      </v-row>
    </div>
    <div>
      <v-row>
        <v-col cols="5">Account Name</v-col>
        <v-col cols="7">FRNG LIMITED-CLIENT'S ACCOUNT</v-col>
      </v-row>
      <v-row>
        <v-col cols="5">Account Number</v-col>
        <v-col cols="7">198832466</v-col>
      </v-row>
    </div>
    <v-divider></v-divider>
  </div>
</template>

<script>
import GenCard from "@/components/general/genCard.vue";
export default {
  components: {
    GenCard,
  },
};
</script>

<style lang="scss" scoped>
$font-family: "Inter", sans-serif;
$bg-color: #252954;
$body-color: #9b9ca7;
$main-bg: #0e0e23;
$blue: #4255d4;
$white: #fff;
$orange: #fb8c00;
:root {
  --delay: 0s;
}

* {
  outline: none;
  box-sizing: border-box;
  font-family: $font-family;
  color: $body-color;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
.chip {
  float: left;
  width: 30px;
  // padding: 10px;
  // height: 100%;
  // margin: 20px;
  shape-outside: circle();
  clip-path: circle();
  background: lightblue;
}
</style>