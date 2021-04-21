<template>
  <div class="mx-3-forSmallerScreen show-mobile">
    <div class="text-center text-h5 my-8">
      <router-link :to="{ name: 'selectCurrency' }">
        <v-icon class="float-left">mdi-arrow-left</v-icon>
      </router-link>
      Banking Details
    </div>
    <v-row class="mb-1">
      <v-col cols="3" class="text-body-1">Amount</v-col>
      <v-col cols="1" class="px-0"
        ><Chip
          :currencyChip="'mdi-currency-ngn'"
          :width="'width: 25px;'"
          fontSize="font-size: 19px;"
          padding="pa-1"
        />
      </v-col>
      <v-col cols="7" class="text-h6 py-0 grey--text darken-4 font-weight-bold"
        ><v-text-field
          label="Amount"
          v-model="amount"
          @keyup="addCommaToValue"
          class="pa-0"
        ></v-text-field
      ></v-col>
    </v-row>
    <div class="text-body-1">Select FRNG Bank</div>
    <div>
      <v-row class="d-flex justify-center my-1 mxforSmallerScreen">
        <v-col
          cols="4"
          class="d-flex justify-center"
          v-for="item in bankName"
          :key="item.id"
          @click="BankInfo(item.id)"
        >
          <Gen-Card class="text-center" :link="true">
            <img
              width="50%"
              class="forSmallerScreen"
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
      <v-snackbar
        class="text-caption"
        v-model="snackbar"
        :timeout="timeout"
        centered
      >
        {{ text }}
      </v-snackbar>
      <v-row>
        <v-col cols="5" class="text-body-2 pb-0">Account Name</v-col>
        <v-col
          @click="copyName"
          v-for="item in bankInfo"
          :key="item.id"
          v-show="reveal"
          cols="7"
          class="grey--text darken-4 font-weight-bold text-caption pb-0"
          >{{ item.acctName }}
          <v-icon color="active_link" size="15">mdi-content-copy</v-icon></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="5" class="text-body-2 pt-1">Account Number</v-col>
        <v-col
          @click="copyNumber"
          v-for="item in bankInfo"
          :key="item.id"
          v-show="reveal"
          cols="7"
          class="grey--text darken-4 font-weight-bold text-caption pt-1"
          >{{ item.acctNum }}
          <v-icon color="active_link" size="15">mdi-content-copy</v-icon></v-col
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
              <span class="text-caption">{{ item.text }}</span>
            </template>
          </v-select>
        </v-col>
      </v-row>
    </div>

    <!-- <v-row>
      <v-col cols="8"> -->
    <div class="d-flex">
      <Gen-Card class="rounded-0 pb-3 mb-3" width="100%">
        <v-app-bar
          :fixed="false"
          color="orange darken-4"
          width=""
          class="elevation-0 white--text"
          dense
        >
          <v-icon class="white--text" size="15">mdi-arrow-left</v-icon>
          <v-spacer></v-spacer>
          <v-toolbar-title class="text-caption">Transfers</v-toolbar-title>
          <div class="px-16"></div>
        </v-app-bar>

        <div class="mx-3 my-3">
          <v-tabs
            disabled
            active-class="orange darken-4 white--text"
            hide-slider
            height="30"
            grow
          >
            <v-tab class="" style="font-size: 10px" dark
              >Save <br />
              Beneficials</v-tab
            >
            <v-tab class="" style="font-size: 10px" dark
              >New <br />
              Beneficials</v-tab
            >
          </v-tabs>
          <div class="mt-5">
            <v-text-field
              label="select transfer type"
              append-icon="mdi-menu-down"
              dense
              color="orange darken-4"
              class="text-caption"
            ></v-text-field>

            <v-text-field
              label="select Account to debit"
              append-icon="mdi-menu-down"
              dense
              color="orange darken-4"
              class="text-caption"
            ></v-text-field>

            <v-text-field
              dense
              color=""
              class="text-caption"
              id="v-step-1"
            ></v-text-field>

            <v-text-field
              dense
              color="orange darken-4"
              class="text-caption"
              id="v-step-2"
            ></v-text-field>

            <v-text-field
              dense
              color="orange darken-4"
              class="text-caption"
              id="v-step-3"
            ></v-text-field>

            <div class="my-2 text-caption">Remark Optional</div>

            <v-text-field
              dense
              color="orange darken-4 mt-2"
              class="text-caption"
              id="v-step-4"
            ></v-text-field>

            <v-btn color="orange darken-4 rounded-0 elevation-0" block dark
              >Continue</v-btn
            >
          </div>
        </div>
      </Gen-Card>
    </div>
    <div class="d-flex justify-end">
    <v-btn color="success rounded-0 elevation-0 text-caption" dark
      >Submit</v-btn
    ></div>
    <div class="py-10"></div>
    <v-tour name="myTour" :steps="steps"></v-tour>
  </div>
</template>

<script>
import GenCard from "@/components/general/genCard.vue";
import Chip from "@/components/general/currencyChip.vue";
export default {
  name: "my-tour",
  components: {
    GenCard,
    Chip,
    // Header
  },
  data: () => ({
    reveal: false,
    timeout: 2000,
    snackbar: false,
    amount: "100",
    changedValued: "",
    text: "Copied to clipboard",
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
      {
        text: "GTbank",
        icon: require("@/assets/images/bank-logo/gtbank.jpg"),
        class: "my-2 pa-1",
        acctName: "FRNG LIMITED-CLIENT'S ACCOUNT",
        acctNum: "198832466",
        id: "001",
      },
      {
        text: "Wema",
        icon: require("@/assets/images/bank-logo/wema.png"),
        class: "mt-2 mb-4 pa-1",
        acctName: "FRNG LIMITED CLIENT ACCOUNT",
        acctNum: "122598731",
        id: "002",
      },
      {
        text: "Zenith",
        icon: require("@/assets/images/bank-logo/zenith.png"),
        class: "my-2 pa-1",
        acctName: "FRNG LIMITED (CLIENT ACCT)",
        acctNum: "1014414254",
        id: "003",
      },
    ],

    bankInfo: [],

    steps: [
      {
        target: "#v-step-1",
        content: "<span class='text-caption'>Rally Account Name!</span>",
        // params: {
        //       placement: 'right' // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
        //     }
      },
      {
        target: "#v-step-2",
        content: "<span class='text-caption'>Rally Account Number!</span>",
      },
      {
        target: "#v-step-3",
        content: "<span class='text-caption'>Amount to transfer!</span>",
      },
      {
        target: "#v-step-4",
        content:
          "<span class='text-caption'>Rally Trade Account Number!</span>",
      },
    ],
  }),

  mounted: function () {
    this.$tours["myTour"].start();
  },

  methods: {
    BankInfo(params) {
      this.bankInfo = this.bankName.filter((item) => item.id === params);
      this.reveal = true;
    },

    copyName() {
      this.snackbar = true;
      navigator.clipboard.writeText(this.bankInfo[0].acctName);
      // let textToCopy = this.$refs.textToCopy.$el.querySelector(
      //   ".textToBeCopied"
      // );
      // console.log(textToCopy);
      // textToCopy.select();
      // document.execCommand("copy");
    },

    copyNumber() {
      this.snackbar = true;
      navigator.clipboard.writeText(this.bankInfo[0].acctNum);
    },

    addCommaToValue() {
      this.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(this.changedValued);
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
// .text-smaller{
//   font-size: 8px !important;
// }
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
.display-1,
.v-application .display-2 {
  font-weight: lighter;
  font-family: Roboto, sans-serif !important;
}
.v-application .display-1 {
  font-size: 1.5rem !important;
  line-height: 1.5rem;
  letter-spacing: 0.0073529412em !important;
}
</style>