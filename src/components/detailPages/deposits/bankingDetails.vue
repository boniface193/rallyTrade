<template>
  <div class="mx-3-forSmallerScreen">
    <div class="text-center text-h5 font-weight-bold my-8">Banking Details</div>
    <v-row class="mb-1">
      <v-col cols="3" class="text-body-1 pr-0">Amount</v-col>
      <v-col cols="2"><Chip :currencyChip="'mdi-currency-ngn'" /> </v-col>
      <v-col
        cols="7"
        class="text-h6 pl-0 pt-2 grey--text darken-4 font-weight-bold"
        >10,000,000</v-col
      >
    </v-row>
    <div class="text-body-1">Select FRNG Bank</div>
    <div>
      <v-row class="d-flex justify-center my-1 mxforSmallerScreen">
        <v-col cols="4" class="d-flex justify-center">
          <Gen-Card class="text-center" :link="true">
            <img
              width="50%"
              class="my-2 pa-1 forSmallerScreen"
              src="@/assets/images/bank-logo/gtbank.jpg"
              alt=""
            />
            <div class="text-caption">GT BANK</div>
            <!-- <v-icon size="70">mdi-currency-ngn</v-icon> -->
          </Gen-Card></v-col
        >
        <v-col cols="4" class="d-flex justify-center">
          <Gen-Card :width="125" class="text-center" :link="true">
            <img
              width="70%"
              class="mt-2 mb-4 pa-1 forSmallerScreen"
              src="@/assets/images/bank-logo/wema.png"
              alt=""
            />
            <div class="text-caption">WEMA</div>
            <!-- <v-icon size="70">mdi-currency-ngn</v-icon> -->
          </Gen-Card></v-col
        >
        <v-col cols="4" class="d-flex justify-center">
          <Gen-Card class="text-center" :link="true">
            <img
              width="50%"
              class="my-2 pa-1 forSmallerScreen"
              src="@/assets/images/bank-logo/zenith.png"
              alt=""
            />
            <div class="text-caption">ZENITH</div>
            <!-- <v-icon size="70">mdi-currency-ngn</v-icon> -->
          </Gen-Card></v-col
        >
      </v-row>
    </div>
    <div>
      <v-row>
        <v-col cols="5" class="text-body-2">Account Name</v-col>
        <v-col
          cols="7"
          class="grey--text darken-4 font-weight-bold text-caption"
          >FRNG LIMITED-CLIENT'S ACCOUNT</v-col
        >
      </v-row>
      <v-row>
        <v-col cols="5" class="text-body-2">Account Number</v-col>
        <v-col
          cols="7"
          class="grey--text darken-4 font-weight-bold text-caption"
          >198832466</v-col
        >
      </v-row>
    </div>
    <v-divider class="my-2"></v-divider>
    <div class="mt-5">
      <v-row>
        <v-col cols="5" class="text-body-2 pt-6">Select your bank</v-col>
        <v-col cols="7">
          <v-select
            :items="items"
            item-text="text"
            label="Select your bank"
            dense
            outlined
            class="text-caption pa-0"
          >
            <template v-slot:selection="{ item }">
              <img :src="item.icon" width="20px" />
              <span class="ml-1">{{ item.text }}</span>
            </template>

            <template v-slot:item="{ item }">
              <img :src="item.icon" width="20px" class="mr-2" />
              <span class="" style="font-size: 8px">{{ item.text }}</span>
            </template>
            <!-- <template v-slot:prepend-item>
              <img
                src="@/assets/images/wema.png"
                width="20px"
              />
            </template> -->
          </v-select>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import GenCard from "@/components/general/genCard.vue";
import Chip from "@/components/general/currencyChip.vue";
export default {
  components: {
    GenCard,
    Chip,
  },
  data: () => ({
    items: [
      { text: "GTbank", icon: require("@/assets/images/bank-logo/gtbank.jpg") },
      { text: "Wema", icon: require("@/assets/images/bank-logo/wema.png") },
      { text: "Zenith", icon: require("@/assets/images/bank-logo/zenith.png") },
      {
        text: "Heritage",
        icon: require("@/assets/images/bank-logo/heritage.jpg"),
      },
      {
        text: "Fidelity",
        icon: require("@/assets/images/bank-logo/fidelity.svg"),
      },
      {
        text: "Sterling",
        icon: require("@/assets/images/bank-logo/sterling.jpg"),
      },
      { text: "OTHER BANK" },
    ],
  }),
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

.mx-3-forSmallerScreen {
  margin: 5%;
}
.mxforSmallerScreen {
  margin: 5%;
}
@media (max-width: 280px) {
  .mx-3-forSmallerScreen {
    margin: 5px;
  }
}
@media (max-width: 360px) {
  .mxforSmallerScreen {
    margin: 0;
  }
}
</style>