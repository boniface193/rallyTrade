<template>
  <div>
    <div class="row">
      <div class="col-sm-5 mt-sm-8" v-for="item in chipCard" :key="item.id">
        <Currency
          :moneySign="
            item.currency == 'naira' ? 'mdi-currency-ngn' : 'mdi-currency-usd'
          "
          :currencyColor="item.currency == 'naira' ? '#9EE8FF' : '#A0FF9E'"
          style="z-index: 1"
        />
        <GenCard
          class="elevation-0"
          style="box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important"
        >
          <v-container class="mx-4" style="font-family: 'Inter', sans-serif">
            <div class="d-flex py-3">
              <img :src="item.bankLogo" width="10%" />
              <div class="text-sm-h6 text-subtitle-2 secondary--text mx-3">
                {{ item.bankName }}
              </div>
            </div>
            <div class="text-md-h6 text-subtitle-2">
              {{ item.acctName }}
            </div>
            <div class="text-md-h6 text-subtitle-2 my-3">
              {{ item.acctNum }}
            </div>
            <div
              class="
                text-sm-h6 text-subtitle-2
                secondary--text
                d-flex
                mr-3
                justify-end
              "
            >
              PENDING
            </div>
          </v-container>
        </GenCard>
      </div>
    </div>
    <v-fab-transition>
      <v-btn
        @click="addBankDetails"
        color="pink"
        style="margin-bottom: 150px"
        dark
        right
        bottom
        absolute
        fab
        fixed
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
    <Modal width="450" :dialog="dialog">
      <GenCard>
        <div class="d-flex justify-end pa-3">
          <v-icon color="error" size="20" @click="dialog = false"
            >mdi-close</v-icon
          >
        </div>
        <v-divider></v-divider>
        <div class="container">
          <v-form @submit.prevent="submitBankingDetails">
            <v-layout row wrap class="mt-3 mx-2">
              <v-flex class="mx-1" xs="6">
                <v-text-field
                  outlined
                  dense
                  v-model="clientName"
                  label="Cient Name"
                  required
                  type="text"
                  :rules="nameRules"
                ></v-text-field
              ></v-flex>
              <v-flex class="mx-1" xs="6"
                ><v-select
                  v-model="selectBank"
                  :items="items"
                  item-text="text"
                  label="Select your bank"
                  dense
                  outlined
                  class="text-caption pa-0"
                  :rules="nameRules"
                >
                  <template v-slot:selection="{ item }">
                    <img :src="item.icon" width="20px" />
                    <span class="ml-1">{{ item.text }}</span>
                  </template>

                  <template v-slot:item="{ item }">
                    <img :src="item.icon" width="20px" class="mr-2" />
                    <span class="text-caption">{{ item.text }}</span>
                  </template>
                </v-select></v-flex
              >

              <v-flex class="mx-1" xs="6">
                <v-text-field
                  v-model="acctNumber"
                  :counter="10"
                  outlined
                  dense
                  label="10 Digit NUBAN Account Number"
                  required
                  type="tel"
                  :rules="maxRule"
                ></v-text-field>
              </v-flex>

              <v-flex class="py-0 col-sm-6">
                <v-radio-group v-model="currency" row>
                  <v-radio label="Naira" id="one" value="naira"></v-radio>
                  <v-radio id="two" label="Dollars" value="dollars"></v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>

            <div>
              <v-btn
                type="submit"
                color="success"
                depressed
                class="mt-8"
                block
                :disabled="
                  clientName < 1 ||
                  selectBank < 1 ||
                  acctNumber < 1 ||
                  currency == null
                "
              >
                Add
              </v-btn>
            </div>
          </v-form>
        </div>
      </GenCard>
    </Modal>
  </div>
</template>

<script>
import Currency from "@/components/general/currencyBadge.vue";
import GenCard from "@/components/general/genCard.vue";
import Modal from "@/components/general/modal.vue";
import { mapGetters } from "vuex";
import { v4 as uuidv4 } from "uuid";
export default {
  components: {
    Currency,
    GenCard,
    Modal,
  },
  data() {
    return {
      collect: "",
      clientName: "",
      selectBank: "",
      acctNumber: "",
      currency: null,
      nameRules: [(v) => !!v || "this is required"],
      maxRule: [
        (v) => (v && v.length == 10) || "NUBAN Account Number must be 10 digit",
      ],
      // select bank name
      items: [],
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({ chipCard: "profile/getBankingDetails" }),
  },
  created() {
    this.items = this.$store.getters["trading/getSelectBank"];
  },
  methods: {
    addBankDetails() {
      this.dialog = true;
    },
    submitBankingDetails() {
      this.$store.commit("profile/setBankingDetails", {
        id: uuidv4(),
        msg: "message goes here",
        currency: this.currency,
        acctName: this.clientName,
        acctNum: this.acctNumber,
        bankLogo: require("@/assets/images/bank-logo/gtbank.jpg"),
        bankName: this.selectBank,
      });
      this.currency = null;
      this.clientName = "";
      this.acctNumber = "";
      this.selectBank = "";
      this.dialog = false;
    },
  },
};
</script>

<style>
</style>