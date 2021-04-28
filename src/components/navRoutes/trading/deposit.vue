<template>
  <div>
    <div class="show-mobile">
      <Mobile-Header
        v-if="active"
        @click.native="selectCurrency"
        title="Deposit"
        colors="success"
        :fixed_top="true"
      />

      <Mobile-Header
        v-else
        title="Deposit"
        colors="grey"
        :fixed_top="true"
        @click="tryToSelectCurrency"
      />
      <div class="my-16 pt-5 mr-1">
        <div v-show="chipCard < 1" class="mt-16 text-center">
          <img src="@/assets/images/emptyState/empty-deposit.svg" width="50%" />
          <div class="text-body-1 mt-3">please make a deposit</div>
        </div>
        <div class="mt-7" v-for="item in chipCard" :key="item.id">
          <Chip-Card
            :depositDetails="{
              name: item.routes,
              params: { id: item.id },
            }"
            :colors="item.outlined ? '' : item.color"
            :time="item.time"
            :day="item.day"
            :moneySign="item.moneySign"
            :status="item.outlined ? '' : item.status"
            :statu="item.statu"
            :statusColor="item.statusColor"
            :active="item.active"
            :icon="item.icon"
            :depositType="item.depositType"
            :outlined="item.outlined"
            :msg="item.msg"
            :padding="item.outlined ? 'py-3' : ''"
            :acctNum="item.acctNum"
            :amount="item.amount"
            :addPaddingToChip="item.outlined ? 'white' : ''"
            @getDeposit="submitDeposit()"
            @deleteDeposit="cancelDeposit()"
          >
          </Chip-Card>
        </div>

        <div class="my-9">
          <v-divider></v-divider>
          <div>History</div>

          <div class="text-center text-caption mt-12">you don't have any deposit History</div>
        </div>

        <div class="py-16"></div>

        <!-- error msg -->
        <v-snackbar v-model="snackbar">
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
        <!-- error msg -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MobileHeader from "@/components/general/mobileHeader.vue";
import ChipCard from "@/components/general/chipCard.vue";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';
export default {
  components: {
    ChipCard,
    MobileHeader,
  },
  data() {
    return {
      active: null,
      snackbar: false,
      text: "",
    };
  },
  computed: {
    ...mapGetters({ chipCard: "trading/getChipCard" }),
  },
  created() {
    let checkIfActive = this.chipCard.find((item) => item.id == "deposit001");
    if (checkIfActive === undefined) {
      this.active = true;
    } else {
      this.active = false;
    }
  },
  methods: {
    selectCurrency() {
      this.$router.push({ name: "selectCurrency" });
    },
    tryToSelectCurrency() {
      this.snackbar = true;
      this.text = "Please confirm your deposit";
      console.log("selcted");
    },
    submitDeposit() {
      this.chipCard.shift();
      this.$store.commit("trading/setChipCard", {
        id: uuidv4(),
        time: moment(new Date()).format("LT"),
        day: new Date().toLocaleDateString(),
        msg: "message goes here",
        moneySign: "mdi-currency-ngn",
        icon: "wire.svg",
        depositType: "WIRE",
        color: "primary_bg",
        status: "mdi-upload",
        statu: "Status",
        statusText: "UPLOAD",
        routes: "depositDetails",
        amount: "10,000,000",
        acctNum: "854715",
        date: "",
        statusColor: "primary",
      });
    },

    cancelDeposit() {
      this.chipCard.shift();

      let checkIfActive = this.chipCard.find((item) => item.id == "deposit001");
      if (checkIfActive === undefined) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom {
  bottom: 40vh;
}
</style>

