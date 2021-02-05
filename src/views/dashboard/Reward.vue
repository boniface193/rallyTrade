<template>
  <v-container>
    <div class="mx-5">
      <div class="chOder my-9">
        <router-link :to="{ path: '/dashboard' }">
          <v-icon class="float-left">mdi-chevron-left</v-icon>
        </router-link>
        <h5 class="text-center mx-auto">Rewards</h5>
      </div>

      <!-- card -->
      <div style="width: 319px; height: 174px">
        <div class="overlay"></div>
        <div class="curve primary-1 rounded-t-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path
              fill="#52f1ec"
              fill-opacity="1"
              d="M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,154.7C672,107,768,53,864,42.7C960,32,1056,64,1152,85.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div class="curve novaji mb-5 rounded-b-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#09229F"
              fill-opacity="1"
              d="M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,154.7C672,107,768,53,864,42.7C960,32,1056,64,1152,85.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <v-row>
        <v-col lg="4">
        <v-tabs
        height="40"
        class="rounded-lg"
        style="border: 1px solid #bebebe"
        v-model="tab"
        centered
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-1" class="text-format"> Redeem </v-tab>

        <v-tab href="#tab-2" class="text-format"> History </v-tab>
      </v-tabs>
        </v-col>
      </v-row>
      

      <v-tabs-items v-model="tab" class="my-3">
        <v-tab-item id="tab-1" value="tab-1">
          <v-row
            class="leader-text my-2"
            v-for="items in redeemed"
            :key="items.name"
            :class="{ active: items.active }"
          >
            <v-col cols="8" lg="6">
              <div class="d-flex" style="cursor: pointer">
                <span class="mr-3"
                  ><v-img
                    :src="items.image"
                    height="47px"
                    width="44px"
                    class="rounded-lg"
                  >
                  </v-img
                ></span>
                <span
                  >{{ items.name }} <br />
                  <span class="points">{{ items.point }}</span></span
                >
              </div>
            </v-col>
            <v-col
              cols="2"
              lg="3"
              class="redeem mt-1"
              :class="{ 'primary--text': items.redeemed }"
              >{{ items.redeem }}</v-col
            >
          </v-row>
        </v-tab-item>

        <v-tab-item id="tab-2" value="tab-2">
          <v-row>
            <v-col
              cols="12"
              lg="4"
              v-for="items in rewardHistory"
              :key="items.id"
            >
              <v-card outlined class="rounded-lg py-3 px-8">
                <div class="order-item-font mt-1">
                  Reward Type:
                  <span class="order-no-grey mx-1"> {{ items.type }}</span>
                </div>
                <div class="order-item-font mt-1">
                  Points
                  <span class="order-no-grey mx-1">{{ items.points }}</span>
                </div>
                <div class="order-item-font mt-1">
                  Date:
                  <span class="order-no-grey mx-1"
                    >{{ items.date }} {{ items.time }}</span
                  >
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "orderDetails",
  components: {},
  data() {
    return {
      tab: null,
      redeemed: [
        {
          id: "01",
          point: "-1050Pts",
          image: require("@/assets/images/squarepant.png"),
          name: "Sales Discount",
          redeem: "Redeem",
          redeemed: true,
        },
        {
          id: "02",
          point: "-1050Pts",
          image: require("@/assets/images/food.png"),
          name: "Sales Discount",
          redeem: "Redeem",
          redeemed: true,
        },
        {
          id: "03",
          point: "-1050Pts",
          image: require("@/assets/images/dubai.png"),
          name: "Sales Discount",
          redeem: "Redeem",
          redeemed: false,
        },
      ],

      rewardHistory: [
        {
          type: "N100 airtime",
          date: "5 Jul 2020",
          time: "8:58AM",
          points: "1010",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.chOder {
  color: #2b2b2b;
  font-size: 20px;
  margin: 30px 0 20px 0px;
  font-family: "Product Sans Medium";
}
.w-25 {
  width: 25% !important;
}
.points {
  color: #979797;
  font-size: 10px;
  font-family: "Product Sans Medium";
}
.redeem {
  font-family: "Product Sans";
  font-size: 10px;
  color: #979797;
}
.novaji {
  background-color: #52f1ec;
}
.curve svg {
  display: block;
}
.primary-1 {
  background-color: #09229f;
}

.v-tab--active {
  color: #fff !important;
  background-color: #5064cc;
  margin: 0px;
}
.v-application--is-ltr
  .v-tabs--centered
  > .v-tabs-bar
  .v-tabs-bar__content
  > :first-child:not(.v-tabs-slider-wrapper),
.v-application--is-ltr
  .v-tabs--centered
  > .v-tabs-bar
  .v-tabs-slider-wrapper
  + *,
.v-application--is-ltr
  .v-tabs--fixed-tabs
  > .v-tabs-bar
  .v-tabs-bar__content
  > :first-child:not(.v-tabs-slider-wrapper),
.v-application--is-ltr
  .v-tabs--fixed-tabs
  > .v-tabs-bar
  .v-tabs-slider-wrapper
  + *,
.v-application--is-rtl
  .v-tabs--centered
  > .v-tabs-bar
  .v-tabs-bar__content
  > :last-child,
.v-application--is-rtl
  .v-tabs--fixed-tabs
  > .v-tabs-bar
  .v-tabs-bar__content
  > :last-child {
  margin: 0 10% 0 0;
  padding: 0px 15%;
  border-radius: 6px !important;
}
a.text-format.v-tab.v-tab--active {
  margin: 0 0 0 0px !important;
  padding: 0px 15%;
  border-radius: 6px !important;
}
div.v-tabs-slider {
  height: 0;
  width: 0;
  display: none;
}
.text-format {
  font-size: 12px;
  text-transform: capitalize !important;
}
</style>