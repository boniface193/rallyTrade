<template>
  <div>
    <div class="primary pb-12 py-12">
      <div class="mx-7">
        <Calender class="float-right" autoApply @updateDate="dateValue" />
        <div class="welcome-text">Hello,</div>
        <div class="welcome-text-sm">{{ userInfo.name }}</div>
      </div>
      <div class="mx-7 mt-8 d-flex justify-center">
        <v-row style="position: absolute; width: 90%">
          <v-col
            sm="4"
            md=""
            lg=""
            class="pr-0"
            v-for="items in dashboardItems"
            :key="items.id"
          >
            <v-card
              class="shadow-sm elevation-0 px-2"
              style="
                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
                border-radius: 15px;
                height: 186px;
              "
            >
              <div class="text-center">
                <div class="d-flex justify-center pt-5">
                  <div class="mx-4 position-abs">
                    <img
                      :src="items.image"
                      width="21.5"
                      height="21.27"
                      class="ml-percent mt-4"
                    />
                  </div>
                  <div
                    :class="items.image_color"
                    class="rounded-pill pa-7 text-center"
                  ></div>
                </div>
                <div class="card-header">{{ items.card_header }}</div>
                <div class="card-sale">{{ items.card_sales }}</div>
                <div
                  class="card-success"
                  :class="{ 'card-error': items.card_success.includes('-') }"
                >
                  {{ items.card_success }}
                  <span class="awaiting" v-if="items.awaiting"
                    >({{ items.awaiting }})</span
                  >
                </div>
                <div class="card-history my-2">
                  <router-link
                    :to="{ name: items.routes }"
                    style="text-decoration: none"
                  >
                    {{ items.card_history
                    }}<v-icon size="12" class="primary--text"
                      >mdi-arrow-right</v-icon
                    ></router-link
                  >
                </div>
              </div>
            </v-card>
          </v-col>
          <!-- sale point -->
          <v-col sm="4" md="" lg="" class="pr-0">
            <v-card
              v-if="sellLoading"
              class="shadow-sm elevation-0 px-2"
              style="
                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
                border-radius: 15px;
                height: 186px;
              "
            >
              <v-skeleton-loader type="article"> </v-skeleton-loader>
            </v-card>
            <v-card
              v-if="!sellLoading"
              class="shadow-sm elevation-0 px-2"
              style="
                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
                border-radius: 15px;
                height: 186px;
              "
            >
              <div class="text-center">
                <div class="d-flex justify-center pt-5">
                  <div class="mx-4 position-abs">
                    <img
                      src="@/assets/images/group.svg"
                      width="21.5"
                      height="21.27"
                      class="ml-percent mt-4"
                    />
                  </div>
                  <div
                    class="rounded-pill pa-7 text-center round-img-bg-primary"
                  ></div>
                </div>
                <div class="card-header">{{ cSales }}</div>
                <div class="card-sale">Sales Points</div>
                <div
                  class="card-success"
                  :class="{
                    'card-error': diffSales == 0 || diffSales.includes('-'),
                  }"
                >
                  {{ diffSales }}
                </div>
                <div class="card-history my-2">
                  <router-link
                    :to="{ name: 'reward' }"
                    style="text-decoration: none"
                  >
                    Claim reward<v-icon size="12" class="primary--text"
                      >mdi-arrow-right</v-icon
                    ></router-link
                  >
                </div>
              </div>
            </v-card>
          </v-col>
          <!-- end of sale point -->

          <!-- sallers rank-->
          <v-col sm="4" md="" lg="" class="pr-0">
            <v-card
              v-if="rankLoading"
              class="shadow-sm elevation-0 px-2"
              style="
                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
                border-radius: 15px;
                height: 186px;
              "
            >
              <v-skeleton-loader type="article"> </v-skeleton-loader>
            </v-card>
            <v-card
              v-if="!rankLoading"
              class="shadow-sm elevation-0 px-2"
              style="
                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
                border-radius: 15px;
                height: 186px;
              "
            >
              <div class="text-center">
                <div class="d-flex justify-center pt-5">
                  <div class="mx-4 position-abs">
                    <img
                      src="@/assets/images/cup.svg"
                      width="21.5"
                      height="21.27"
                      class="ml-percent mt-4"
                    />
                  </div>
                  <div
                    class="rounded-pill pa-7 text-center round-img-bg-warning"
                  ></div>
                </div>
                <div class="card-header">{{ pRank }}</div>
                <div class="card-sale">on leaderboard</div>
                <div
                  class="card-success"
                  :class="{
                    'card-error': diffSales == 0 || diffSales.includes('-'),
                  }"
                >
                  {{ diffRank }}
                </div>
                <div class="card-history my-2">
                  <router-link
                    :to="{ name: 'leaderboard' }"
                    style="text-decoration: none"
                  >
                    View Leaderboard<v-icon size="12" class="primary--text"
                      >mdi-arrow-right</v-icon
                    ></router-link
                  >
                </div>
              </div>
            </v-card>
          </v-col>
          <!-- end of sallers rank -->
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Calender from "@/components/general/calender.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Calender,
    // Layout,
  },
  data() {
    return {
      rankLoading: true,
      sellLoading: true,
      cSales: "",
      diffSales: "",
      pRank: "",
      diffRank: "",
      dashboardItems: [
        {
          image_color: "round-img-bg-danger",
          image: require("@/assets/images/shopping.png"),
          card_header: "₦900,000.00",
          card_sales: "In sales",
          card_success: "+45,000",
          card_history: "Settlement history",
          routes: "SettlementHistory",
        },
        {
          image_color: "round-img-bg-success",
          image: require("@/assets/images/money.svg"),
          card_header: "₦70,000.00",
          card_sales: "In profits",
          card_success: "5,000",
          awaiting: "awaiting settlements",
          card_history: "Withdraw funds",
          routes: "AddBankDetails",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      dashboard: "dashboard/dashboard",
      userInfo: "settings/profile",
    }),
  },
  created() {
    this.$store.dispatch("dashboard/getSellerPoint").then((res) => {
      let resObj = {
        difference: res.diff.toString(),
        curentSale: res.current_sales.toString(),
      };
      this.cSales = resObj.curentSale;
      this.diffSales = resObj.difference;
      this.sellLoading = false
    });

    this.$store.dispatch("dashboard/getSellerRank").then((res) => {
      let resObj = {
        difference: res.diff.toString(),
        curentSale: res.present_rank.toString(),
      };
      this.pRank = resObj.curentSale;
      this.diffRank = resObj.difference;
      this.rankLoading = false;
    });
    console.log("check", this.dashboard);
  },
  methods: {
    dateValue(value) {
      this.$store.commit("dashboard/filterRange", {
        startDate: moment(value.startDate).format("L"),
        endDate: moment(value.endDate).format("L"),
      });
      this.$store.dispatch("dashboard/searchSellerPoint");
      this.$store.dispatch("dashboard/searchSellerRank");
      // const startDate = moment(value.startDate).format("L");
      // const endDate = moment(value.endDate).format("L");
      // console.log(startDate);
      // console.log(endDate);
    },
  },
};
</script>

<style lang="scss" scoped>
.welcome-text {
  font-family: "Product Sans Medium";
  font-weight: normal;
  color: #ffffff;
  font-size: 24px;
}
.welcome-text-sm {
  font-family: "Product Sans Light";
  font-weight: lighter;
  font-variant: normal;
  letter-spacing: 0.8px;
  font-size: 16px;
  color: #ffffff;
}
.round-img-bg-danger {
  background: #ffecec 0% 0% no-repeat padding-box;
}
.round-img-bg-success {
  background: #dbffdc 0% 0% no-repeat padding-box;
}
.round-img-bg-primary {
  background: #eaecf9 0% 0% no-repeat padding-box;
}
.round-img-bg-warning {
  background: #fff4d2 0% 0% no-repeat padding-box;
}
.position-abs {
  position: absolute;
  z-index: 1;
}
.ml-percent {
  z-index: 1 !important;
}
.card-header {
  color: #2b2b2b;
  font-size: 17px;
  font-family: "Product Sans Bold";
  margin: 10px 0px 0px 0px;
  font-weight: bold;
}
.card-sale {
  color: #979797;
  font-family: "Product Sans Light";
  font-size: 12px;
}
.card-success {
  color: #29db58;
  font-size: 10px;
  font-family: "Product Sans Bold";
}
.card-error {
  color: #ff3b3b;
  font-size: 10px;
  font-family: "Product Sans Bold";
}
.card-history {
  color: #5063ca;
  font-family: "Product Sans Medium";
  font-size: 10px;
}
.awaiting {
  color: #979797;
  font-family: "Product Sans Light";
  font-size: 8px;
}
</style>