<template>
  <div class="show-mobile">
    <div class="text-center">
      <div class="text-h5 my-5">
        <router-link :to="{ name: 'deposit' }">
          <v-icon class="float-left">mdi-arrow-left</v-icon>
        </router-link>
        <div>Select Account</div>
      </div>
      <v-slide-group v-model="model" show-arrows class="py-2">
        <v-slide-item
          v-for="item in selectCurrency"
          :key="item.id"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? 'active_link white--text' : 'white'"
            class="ma-4"
            width="125"
            @click="toggle"
          >
            <!-- currency badge -->
            <Badge
              :moneySign="item.currency"
              :currencyColor="item.currencyColor"
            />
            <div class="d-flex justify-space-around py-2">
              <img
                src="@/assets/images/general/mt4.png"
                width="22px"
                height="21px"
                class="elevation-1"
                v-if="item.acctType == 'mt4'"
              />
              <img
                src="@/assets/images/general/fx.svg"
                width="22px"
                height="21px"
                class="elevation-1"
                v-else
              />
              <div class="caption font-weight-black">889554</div>
            </div>
            <div class="text-center py-2">
              <div class="caption">Balance</div>
              <div class="caption font-weight-black">100,000</div>
              <div class="caption">Bonus</div>
              <div class="caption font-weight-black">50,000</div>
            </div>
          </v-card>
        </v-slide-item>
      </v-slide-group>

      <v-expand-transition>
        <v-sheet v-if="model != null" height="80" tile>
          <v-row class="fill-height" align="center" justify="center">
            <h3 class="title mt-8">Select Deposit Type</h3>
            <div v-if="model == 0">
              <v-scale-transition>
                <v-row class="d-flex justify-center mx-3 mt-8 mb-16">
                  <v-col
                    :cols="item.cols"
                    class="d-flex justify-center"
                    v-for="item in depositeType"
                    :key="item.id"
                  >
                    <Gen-Card
                      :width="item.size"
                      class="text-center py-5"
                      :link="true"
                      :to="{ name: item.routes }"
                    >
                      <img width="30%" :src="item.image" alt="" />
                      <div class="font-weight-bold">{{ item.text }}</div></Gen-Card
                    ></v-col
                  >
                </v-row></v-scale-transition
              >
            </div>

            <div v-if="model == 1">
              <h3 class="title mt-8">No currency to select yet</h3>
            </div>
          </v-row>
        </v-sheet>
      </v-expand-transition>
      <div class="text-h5 mt-8"></div>
    </div>
    <div class="py-10"></div>
  </div>
</template>

<script>
import GenCard from "@/components/general/genCard.vue";
import Badge from "@/components/general/currencyBadge.vue";
export default {
  components: {
    GenCard,
    Badge,
  },
  data() {
    return {
      reveal: false,
      dark: false,
      color: "",
      model: null,
      selectCurrency: [
        {
          id: "001",
          currency: "mdi-currency-ngn",
          currencyColor: "#9EE8FF",
          acctType: "mt4",
        },
        {
          id: "002",
          currency: "mdi-currency-usd",
          currencyColor: "#A0FF9E",
          acctType: "fx",
        },
        {
          id: "003",
          currency: "mdi-currency-usd",
          currencyColor: "#A0FF9E",
          acctType: "fx",
        },
      ],
      depositeType: [
        {
          cols: 12,
          size: "125",
          routes: "",
          image: require("@/assets/images/general/credit-card.svg"),
          text: "INSTANT",
        },
        {
          cols: 6,
          size: "125",
          routes: "bankDetails",
          image: require("@/assets/images/general/wire-deposite.svg"),
          text: "WIRE",
        },
        {
          cols: 6,
          size: "125",
          routes: "",
          image: require("@/assets/images/general/teller.svg"),
          text: "TELLER",
        },
      ],
    };
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
$orange: #fb8c00;
.active {
  background-color: $orange;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;
}
</style>