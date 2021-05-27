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
          <img src="@/assets/images/emptyState/empty-deposit.svg" width="40%" />
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

        <div class="my-9 show-mobile-ex mx-5">
          <v-btn
            color="active_link"
            :to="{ name: 'history' }"
            style="position: fixed; bottom: 15%; width: 83%"
            text
            depressed
            dense
            >Processed History</v-btn
          >
        </div>
      </div>
    </div>
    <!-- mobile view design -->
    <div class="col-1 pr-0 text-center hide-desktop-ex">
      <v-divider vertical class="mt-6" style="height: 80vh"></v-divider>
    </div>
    <!------------------------------------------------Desktop----------------------------------------->
    <div class="col-lg-7 col-md-6 col-sm-5 hide-desktop-ex">
      <div>
        <div class="float-right">
          <DateFilter />
        </div>
        <div class="text-left text-h5 mt-3">Processed</div>
        <v-divider style="width: 18%"> </v-divider>
      </div>

      <div class="container mt-3">
        <div class="list-group-wrapper">
          <transition name="fade">
            <div class="loading" v-show="loading">
              <v-progress-circular
                indeterminate
                color="white"
                size="25"
              ></v-progress-circular>
              Loading
            </div>
          </transition>

          <ul class="list-group" id="infinite-list">
            <li
              class="list-group-item"
              v-for="item in items"
              v-text="item"
              :key="item.id"
            ></li>
          </ul>
        </div>
      </div>

      <!---------------------------------------------------Error Message------------------------------->
    </div>
    <div class="py-16"></div>
    <!-- error msg -->
    <v-snackbar v-model="snackbar" class="caption">
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
import DateFilter from "@/components/general/dateFilter.vue";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
export default {
  components: {
    ChipCard,
    MobileHeader,
    DateFilter,
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

      loading: false,
      nextItem: 1,
      items: [],
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
    // Detect when scrolled to bottom.
    const listElm = document.querySelector("#infinite-list");
    listElm.addEventListener("scroll", () => {
      if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.loadMore();
      }
    });

    // Initially load some items.
    this.loadMore();

    this.pushToSelectCurrency();
    this.firstDepositeCard = this.chipCard.find(
      (item) => item.id === "deposit001"
    );

    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    loadMore() {
      /** This is only for this demo, you could
       * replace the following with code to hit
       * an endpoint to pull in more data. **/
      this.loading = true;
      setTimeout(() => {
        for (var i = 0; i < 20; i++) {
          this.items.push("Item " + this.nextItem++);
        }
        this.loading = false;
      }, 1000);
      /**************************************/
    },

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

    // check if deposit is empty, and push route to selectCurrency
    pushToSelectCurrency() {
      if (window.innerWidth >= 426 && this.chipCard.length < 1) {
        this.$router.push({ name: "selectCurrency" });
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
.btn-width {
  width: 100%;
  position: fixed;
  bottom: 15%;
}
@media (max-width: 426px) {
  .margin-top-mobile {
    margin-top: 30%;
  }
}
@media (max-width: 280px) {
  .margin-top-mobile {
    margin-top: 40%;
  }
}

// css rules for lazy loading

.container {
  background-color: #fff;
  border-radius: 8px;
}

.list-group-wrapper {
  position: relative;
}
.list-group {
  overflow: auto;
  height: 75vh;
}
.list-group-item {
  margin-top: 1px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid #dce4ec;
}
.loading {
  text-align: center;
  position: absolute;
  color: #fff;
  z-index: 9;
  background: #fb8c00;
  padding: 8px 18px;
  border-radius: 5px;
  left: calc(50% - 45px);
  top: calc(50% - 18px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

