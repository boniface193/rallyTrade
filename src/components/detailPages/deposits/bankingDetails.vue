<template>
  <div class="mx-3-forSmallerScreen show-mobile">
    <div class="text-center text-h5 font-weight-bold my-8">
      <router-link :to="{ name: 'selectCurrency' }">
        <v-icon class="float-left">mdi-arrow-left</v-icon>
      </router-link>
      Banking Details
    </div>
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
        <v-col
          cols="4"
          class="d-flex justify-center"
          v-for="item in bankName"
          :key="item.id"
          @click="GTselected(item.id)"
        >
          <Gen-Card class="text-center" :link="true">
            <img
              width="50%"
              class=" forSmallerScreen"
              :class="item.class"
              :src="item.icon"
              alt=""
            />
            <div class="text-caption">{{ item.text }}</div>
          </Gen-Card></v-col
        >
      </v-row>
    </div>
    <div>
      <v-row>
        <v-col cols="5" class="text-body-2">Account Name</v-col>
        <v-col
        v-for="item in bankInfo" :key="item.id"
          v-show="reveal"
          cols="7"
          class="grey--text darken-4 font-weight-bold text-caption"
          >{{item.acctName}}</v-col
        >
      </v-row>
      <v-row>
        <v-col cols="5" class="text-body-2">Account Number</v-col>
        <v-col
        v-for="item in bankInfo" :key="item.id"
          v-show="reveal"
          cols="7"
          class="grey--text darken-4 font-weight-bold text-caption"
          >{{item.acctNum}}</v-col
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
              <span style="font-size: 8px">{{ item.text }}</span>
            </template>
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
    reveal: false,
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

    bankName: [
      { text: "GTbank", icon: require("@/assets/images/bank-logo/gtbank.jpg"), class: "my-2 pa-1", acctName: "FRNG LIMITED-CLIENT'S ACCOUNT", acctNum: "198832466", id: "001" },
      { text: "Wema", icon: require("@/assets/images/bank-logo/wema.png"), class: "mt-2 mb-4 pa-1", acctName: "FRNG LIMITED CLIENT ACCOUNT", acctNum: "122598731", id: "002" },
      { text: "Zenith", icon: require("@/assets/images/bank-logo/zenith.png"), class: "my-2 pa-1", acctName: "FRNG LIMITED (CLIENT ACCT)", acctNum: "1014414254", id: "003" },
    ],

    bankInfo: [],
  }),

  methods: {
    GTselected(params) {
      this.bankInfo = this.bankName.filter(item => item.id === params)
      this.reveal = true;
    },

    wemaselected() {
      console.log("clicked wema bank");
    },

    zenithselected() {
      console.log("clicked zenith bank");
    },
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