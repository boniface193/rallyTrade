<template>
  <div>
    <div class="text-center my-16" v-if="chipCard.length < 1">
      <img src="@/assets/images/emptyState/bank_empty.svg" width="50%" alt="" />
      <p class="text-sm-h5 mt-5">Add account Details</p>
    </div>
    <div class="row mx-auto" v-else>
      <div
        class="col-sm-5 mx-auto mt-sm-8 my-5"
        v-for="item in chipCard"
        :key="item.id"
      >
        <Currency
          size="20"
          :moneySign="
            item.currency == 'naira' ? 'mdi-currency-ngn' : 'mdi-currency-usd'
          "
          :currencyColor="
            item.currency == 'naira'
              ? 'naira pb-6 rounded-pill'
              : 'dollars pb-6 rounded-pill'
          "
          style="z-index: 1"
        />
        <GenCard class="elevation-0" style="border: solid 1px #eeeeee">
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
                text-uppercase
              "
            >
              {{item.status}}
              <v-icon color="error" v-if="item.status == 'rejected'" >mdi-alert-circle</v-icon>
            </div>
            <div class="text-subtitle-2
                secondary--text text-center" v-if="item.status == 'rejected'">{{item.msg}}</div>
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
              <v-flex class="mx-1" xs="6">
                <v-select
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
                </v-select>
              </v-flex>
              <v-flex class="mx-1" xs="6">
                <v-text-field
                  v-model="acctNumber"
                  :counter="10"
                  outlined
                  dense
                  label="10 Digit NUBAN Account Number"
                  required
                  type="number"
                  :rules="maxRule"
                ></v-text-field>
              </v-flex>
              <div class="caption success--text text-center">
                Your statement should not be older than 3 months!
              </div>

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
import GenCard from "@/components/general/genCard.vue";
import Modal from "@/components/general/modal.vue";
import Currency from "@/components/general/currencyBadge.vue";
import { mapGetters } from "vuex";
import { v4 as uuidv4 } from "uuid";
export default {
  components: {
    GenCard,
    Modal,
    Currency,
  },
  data() {
    return {
      collectBankImg: {},
      clientName: "",
      selectBank: "",
      selectIcon: "",
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
      this.collectBankImg = this.items.find(
        (item) => item.text == this.selectBank
      );
      this.$store.commit("profile/setBankingDetails", {
        id: uuidv4(),
        msg: "message goes here",
        currency: this.currency,
        acctName: this.clientName,
        acctNum: this.acctNumber,
        bankLogo: this.collectBankImg.icon,
        bankName: this.collectBankImg.text,
        status: 'PENDING'
      });
      this.dialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-badge__badge {
  border-radius: 13px;
  color: #fff;
  font-size: 12px;
  height: 25px !important;
  letter-spacing: 0;
  min-width: 25px;
  padding: 4px 6px;
  pointer-events: auto;
  position: absolute;
  text-align: center;
  text-indent: 0;
  top: auto;
  bottom: auto;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  white-space: nowrap;
}
</style>