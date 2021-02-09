<template>
  <div>
    <div class="primary pb-12 py-3">
      <!-- <Layout>
        <template v-slot="slotProps">
          <div class="d-flex">
            <div @click.stop="drawer = !drawer">
              <v-icon size="19" color="#000"> mdi-segment</v-icon>
            </div>
            <v-spacer></v-spacer>
            <div class="">
              <v-img src="@/assets/images/bell.svg" width="11px"></v-img>
            </div>
          </div>
        </template>
      </Layout> -->
      <div class="mx-7">
        <Calender
          class="float-right"
          singleDatePicker
          autoApply
          @updateDate="dateValue"
        />
        <div class="welcome-text">Hello,</div>
        <div class="welcome-text-sm">{{ userInfo.name }}</div>
      </div>
      <div class="mx-7 mt-8">
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
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Calender from "@/components/general/calender.vue";
// import Layout from "@/components/layout/Layout.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Calender,
    // Layout,
  },
  data() {
    return {
      dashboardItems: [
        {
          image_color: "round-img-bg-danger",
          image: require("@/assets/images/shopping.png"),
          card_header: "₦900,000.00",
          card_sales: "In sales",
          card_success: "+45,000",
          card_history: "Sales history",
          routes: "sales_history",
        },

        {
          image_color: "round-img-bg-success",
          image: require("@/assets/images/money.svg"),
          card_header: "₦70,000.00",
          card_sales: "In profits",
          card_success: "5,000",
          awaiting: "awaiting settlements",
          card_history: "Settlement history",
          routes: "payment_history",
        },

        {
          image_color: "round-img-bg-primary",
          image: require("@/assets/images/group.svg"),
          card_header: "1001",
          card_sales: "Sales Points",
          card_success: "+10",
          card_history: "Claim reward",
          routes: "reward",
        },

        {
          image_color: "round-img-bg-warning",
          image: require("@/assets/images/cup.svg"),
          card_header: "24th",
          card_sales: "on leaderboard",
          card_success: "-1",
          card_history: "View Leaderboard",
          routes: "leaderboard",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "settings/profile",
    }),
  },
  methods: {
    dateValue(value) {
      const startDate = moment(value.startDate).format();
      const endDate = moment(value.endDate).format();
      console.log(startDate);
      console.log(endDate);
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
}
.card-header {
  color: #2b2b2b;
  font-size: 18px;
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