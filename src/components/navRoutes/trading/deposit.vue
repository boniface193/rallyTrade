<template>
  <div class="row">
    <div class="col-lg-4 col-md-5 col-sm-6">
      <Mobile-Header
        v-if="active"
        @click.native="selectCurrency"
        title="Deposit"
        colors="success"
        :fixed_top="fixed_top"
      />

      <Mobile-Header
        v-else
        title="Deposit"
        colors="grey"
        :fixed_top="fixed_top"
        @click.native="tryToSelectCurrency"
      />
      <div class="mr-1 margin-top-mobile">
        <div v-show="chipCard < 1" class="text-center py-8">
          <img src="@/assets/images/emptyState/empty-deposit.svg" width="30%" />
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
            :padding="item.outlined ? 'py-1' : ''"
            :acctNum="item.acctNum"
            :amount="item.amount"
            :addPaddingToChip="item.outlined ? 'white' : ''"
            @getDeposit="submitDeposit()"
            @deleteDeposit="cancelDeposit()"
          >
          </Chip-Card>
        </div>

        <div class="my-9 show-mobile-ex">
          <v-divider></v-divider>
          <div>Processed</div>

          <div class="text-center text-caption mt-12">
            you don't have any deposit History
          </div>
        </div>
      </div>
    </div>
    <!-- mobile view design -->
    <div class="col-1 pr-0 text-center hide-desktop-ex">
      <v-divider vertical class="mt-6" style="height: 80vh"></v-divider>
    </div>
    <div class="col-lg-7 col-md-6 col-sm-5 hide-desktop-ex">
      <!------------------------------------------------Desktop----------------------------------------->
      <div>
        <div class="text-left text-h5 mt-3">Processed</div>
        <v-divider style="width: 18%"> </v-divider>

        <div class="text-center text-caption mt-12">
          you don't have any deposit History
        </div>
      </div>

      <!---------------------------------------------------Error Message------------------------------->
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
</template>

<script>
import { mapGetters } from "vuex";
import MobileHeader from "@/components/general/mobileHeader.vue";
import ChipCard from "@/components/general/chipCard.vue";
// import DepositDetailPage from "@/components/detailPages/deposits/depoitDetails.vue";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
export default {
  components: {
    ChipCard,
    MobileHeader,
    // DepositDetailPage,
  },
  data() {
    return {
      active: null,
      snackbar: false,
      text: "",
      depositPage: "",
      model: null,
      firstDepositeCard: {},
      reveal: false,
      SelectCurrency: [],
      depositeType: [],
      fixed_top: null,
    };
  },
  computed: {
    ...mapGetters({ chipCard: "trading/getChipCard" }),
  },
  created() {
    // get all account from store for desktop
    this.SelectCurrency = this.$store.getters["trading/getCurrency"];
    this.depositeType = this.$store.getters["trading/getAcct"];

    // chip card for mobile
    let checkIfActive = this.chipCard.find((item) => item.id == "deposit001");
    if (checkIfActive === undefined) {
      this.active = true;
    } else {
      this.active = false;
    }
  },
  mounted() {
    this.firstDepositeCard = this.chipCard.find(
      (item) => item.id === "deposit001"
    );

    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      if (window.innerWidth <= 425) {
        this.fixed_top = true;
      } else {
        this.fixed_top = false;
      }
    },
    selectCurrency() {
      this.$router.push({ name: "selectCurrency" });
    },
    tryToSelectCurrency() {
      this.snackbar = true;
      this.text = "Please confirm your deposit";
    },
    submitDeposit() {
      // this.depositPage = this.$router.push({ name: "deposit" });
      this.chipCard.shift();
      this.active = true;
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
        amount: this.firstDepositeCard.amount,
        acctNum: this.firstDepositeCard.acctNum,
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
.margin-top {
  padding-top: 30%;
}
@media (max-width: 426px) {
  .margin-top-mobile {
    margin-top: 30%;
  }
}


</style>

