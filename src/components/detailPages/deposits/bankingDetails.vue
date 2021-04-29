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
          class="padding-smaller"
        />
      </v-col>
      <v-col cols="7" class="text-h6 py-0 grey--text darken-4 font-weight-bold">
        <v-text-field
          label="Amount"
          v-model="price"
          class="pa-0"
          type="tel"
          :rules="rules"
        ></v-text-field>
      </v-col>
    </v-row>
    <div class="text-body-1">Select FRNG Bank</div>
    <div>
      <v-slide-group v-model="model" class="pa-2">
        <v-slide-item
          v-for="item in bankName"
          :key="item.id"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? 'grey lighten-2' : 'white'"
            class="ma-2"
            width="80"
            align="center"
            justify="center"
            @click="toggle"
          >
            <v-img
              width="50%"
              class="forSmallerScreen"
              :class="item.class"
              :src="item.icon"
              alt=""
              @click="BankInfo(item.id)"
            ></v-img>
            <div class="text-caption">{{ item.text }}</div>
          </v-card>
        </v-slide-item>
      </v-slide-group>

      <v-expand-transition>
        <v-sheet v-if="model != null" height="80" tile>
          <v-row>
            <v-col cols="4" class="text-body-2 pb-0 pr-0 font-smaller"
              >Account Name</v-col
            >
            <v-col
              cols="8"
              class="grey--text darken-4 font-weight-bold pr-0"
              style="font-size: 10px"
              @click="copyName"
              >{{
                model == 0
                  ? "FRNG LIMITED-CLIENT'S ACCOUNT"
                  : "" || model == 1
                  ? "FRNG LIMITED CLIENT ACCOUNT"
                  : "" || model == 2
                  ? "FRNG LIMITED (CLIENT ACCT)"
                  : ""
              }}
              <v-tooltip class="" v-model="snackbarName" top
                >{{ text }}
                <v-icon color="active_link" size="15" style=""
                  >mdi-close</v-icon
                >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs" v-on="on" color="active_link" size="15"
                    >mdi-content-copy</v-icon
                  >
                </template>
              </v-tooltip>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5" class="text-body-2 pt-1 pr-0">Account Number</v-col>
            <v-col
              @click="copyNumber"
              cols="7"
              class="grey--text darken-4 font-weight-bold text-caption pt-1 px-0"
              >{{
                model == 0
                  ? "198832466"
                  : "" || model == 1
                  ? "122598731"
                  : "" || model == 2
                  ? "1014414254"
                  : ""
              }}
              <v-tooltip class="" v-model="snackbarNumber" bottom
                >{{ text }}
                <v-icon color="active_link" size="15" style=""
                  >mdi-close</v-icon
                >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs" v-on="on" color="active_link" size="15"
                    >mdi-content-copy</v-icon
                  >
                </template>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-sheet>
      </v-expand-transition>
    </div>
    <v-divider class="my-3"></v-divider>
    <v-row v-if="model != null">
      <v-col cols="5" class="text-body-2 pt-6 pr-0">Select your bank</v-col>
      <v-col cols="7">
        <v-select
          :items="items"
          item-text="text"
          label="Select your bank"
          dense
          outlined
          class="text-caption pa-0"
          @change="sectedBank"
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

    <div v-if="selectYourBank">
      <div id="v-step-0"></div>
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
          <v-spacer></v-spacer>
          <v-toolbar-title class="text-caption"></v-toolbar-title>
        </v-app-bar>

        <div class="mx-3 my-4">
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
            <v-tab disabled class="" style="font-size: 10px" dark
              >New <br />
              Beneficials</v-tab
            >
          </v-tabs>
          <div class="mt-5" v-for="bankItem in bankInfo" :key="bankItem.id">
            <v-text-field
              v-for="item in inputInfo"
              :key="item.id"
              :label="item.label"
              :append-icon="item.appendIcon"
              dense
              required
              color="orange darken-4"
              class="text-caption"
              type="text"
              :disabled="
                true
                  ? item.id == 'v-step-1' ||
                    item.id == 'v-step-2' ||
                    item.id == 'v-step-3'
                  : ''
              "
              :value="
                item.id == 'v-step-1'
                  ? bankItem.acctName
                  : '' || item.id == 'v-step-2'
                  ? bankItem.acctNum
                  : '' || item.id == 'v-step-3'
                  ? price
                  : ''
              "
              :id="item.id"
            ></v-text-field>

            <div class="my-2 text-caption">Remark Optional</div>

            <v-text-field
              dense
              color="orange darken-4 mt-2"
              class="text-caption"
              id="v-step-4"
              value="859647"
            ></v-text-field>

            <v-btn disabled class="orange darken-4 rounded-0 elevation-0" block
              >Continue</v-btn
            >
          </div>
        </div>
      </Gen-Card>
      <div class="d-flex justify-end">
        <v-btn
          color="success elevation-0 text-body-1"
          block
          dark
          @click="submitForm"
          >Submit</v-btn
        >
      </div>
    </div>
    <div class="py-10"></div>
    <v-tour name="myTour" :steps="steps"></v-tour>
    <Modal :dialog="dialog">
      <div class="text-center py-8 mx-4 body-text" style="font-size: 14px;">
        <div class="text-h6 error--text mb-3">Important!</div>
        <div class="text-left">
          Rally Trade
          <span class="font-weight-black">does not accept</span> deposits from
          third parties.
        </div>
        <div class="text-left my-3">
          The deposit must come from your
          <span class="font-weight-medium text-uppercase error--text"
            >personal account</span
          >
        </div>
        <div class="text-left">
          If the deposit is done through an agent the transfer
          <span class="font-weight-medium text-uppercase error--text">
            must </span
          >contain in the description:
        </div>
        <ul class="font-weight-medium text-uppercase error--text text-left mt-4">
          <li>your name</li>
          <li>rally account number</li>
        </ul>
        <v-btn
          color="success"
          block
          class="my-4 elevation-0"
          @click="closeAndSubmit"
          >continue!</v-btn
        >
      </div>
    </Modal>

    <!-- error msg -->
    <v-snackbar v-model="snackbar">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <!-- error msg -->
  </div>
</template>

<script>
import GenCard from "@/components/general/genCard.vue";
import Chip from "@/components/general/currencyChip.vue";
import Modal from "@/components/general/modal.vue";
import moment from "moment";
export default {
  name: "my-tour",
  components: {
    GenCard,
    Chip,
    Modal,
  },
  data: () => ({
    dialog: false,
    snackbarName: false,
    snackbarNumber: false,
    selectYourBank: false,
    snackbar: false,
    model: null,
    price: "",
    snackbarText: "",
    text: "Copied to clipboard",
    rules: [(value) => !!value || "Required."],
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
        class: "mt-4 mb-4 pa-1",
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
        target: "#v-step-0",
        content:
          "<span class='text-body-1'>it is important to add in the remarks or comment field the<div class='orange--text '> rally account number.<br /> 859647!</span></span>",
        params: {
          placement: "top", // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
        },
      },
      {
        target: "#v-step-1",
        content: "<span class='text-caption'>Rally Account Name!</span>",
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

    inputInfo: [
      { label: "select transfer type", id: "1", appendIcon: "mdi-menu-down" },
      {
        label: "select Account to debit",
        id: "2",
        appendIcon: "mdi-menu-down",
      },
      { label: "", id: "v-step-1" },
      { label: "", id: "v-step-2" },
      { label: "", id: "v-step-3", appendIcon: "mdi-currency-ngn", size: "25" },
    ],
  }),

  methods: {
    BankInfo(params) {
      this.bankInfo = this.bankName.filter((item) => item.id === params);
    },

    sectedBank() {
      this.selectYourBank = true;
      this.$tours["myTour"].start();
    },

    copyName() {
      this.model == 0
        ? navigator.clipboard.writeText("FRNG LIMITED-CLIENT'S ACCOUNT")
        : "" || this.model == 1
        ? navigator.clipboard.writeText("FRNG LIMITED CLIENT ACCOUNT")
        : "" || this.model == 2
        ? navigator.clipboard.writeText("FRNG LIMITED (CLIENT ACCT)")
        : "";
      // let textToCopy = this.$refs.textToCopy.$el.querySelector(
      //   ".textToBeCopied"
      // );
      // console.log(textToCopy);
      // textToCopy.select();
      // document.execCommand("copy");
    },

    copyNumber() {
      this.model == 0
        ? navigator.clipboard.writeText("198832466")
        : "" || this.model == 1
        ? navigator.clipboard.writeText("122598731")
        : "" || this.model == 2
        ? navigator.clipboard.writeText("1014414254")
        : "";
    },

    submitForm() {
      if (this.price == 0) {
        this.snackbar = true;
        this.snackbarText = "Please fill the Amount";
      } else {
        this.dialog = true;
      }
    },

    closeAndSubmit() {
      this.dialog = false;
      this.$router.push({ name: "deposit" });
      this.$store.commit("trading/setChipCard", {
        id: "deposit001",
        time: moment(new Date()).format("LT"),
        day: new Date().toLocaleDateString(),
        moneySign: "mdi-currency-ngn",
        icon: "wire.svg",
        depositType: "WIRE",
        color: "white",
        routes: "",
        amount: this.price,
        acctNum: "854715",
        date: "",
        active: false,
        outlined: true,
      });
    },
  },

  watch: {
    price: function (newValue) {
      const result = newValue
        .replace(/[^0-9a-zA-Z.]/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.price = result;
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
.body-text {
  color: rgba(0, 0, 0, 0.748);
}
.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: #e65100 !important;
  color: $white !important;
}
@media (max-width: 280px) {
  .mx-3-forSmallerScreen {
    margin: 5px;
  }
  .padding-smaller {
    margin: 0 8px !important;
  }
  .font-smaller {
    font-size: 8px !important;
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