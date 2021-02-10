<template>
  <v-container>
    <div class="mx-5">
      <div class="chOder my-9">
        <router-link :to="{ path: '/dashboard' }">
          <v-icon class="float-left">mdi-chevron-left</v-icon>
        </router-link>
        <h5 class="text-center mx-auto">Rewards</h5>
      </div>

      <v-row>
        <v-col lg="" offset-lg="3" offset-md="3">
          <!-- card -->
          <div class="">
            <div class="overlay pa-8">
              <div class="card-title text-left">Reward Debit Balance</div>
              <div class="card-point mt-7 text-left">2095 Points</div>
              <div class="card-name mt-3 text-left">Ayotunde Lanwo</div>
            </div>
            <div class="mb-8 pr-4 w-100">
              <v-img src="@/assets/images/reward.png"></v-img>
            </div>
          </div>

          <v-row>
            <v-col lg="7" xl="7" md="7" sm="7">
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
                   @click="openModal"
                  lg="3"
                  style="cursor: pointer;"
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
                  lg="7"
                  md="7"
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
        </v-col>
      </v-row>
      <Modal :dialog="this.dialog" width="300">
        <v-card class="rounded-lg">
          <v-icon
            style="cursor: pointer"
            @click.native="closeModal"
            class="float-right mr-3 mt-3"
            color="primary"
            >mdi-close</v-icon
          >
          <div class="pt-9">
            <div class="d-flex justify-center">
              <span>
                <v-img
                  src="@/assets/images/airtime.svg"
                  height="54px"
                  width="55px"
                  class="rounded-pill"
                ></v-img>
              </span>
            </div>
            <span class="d-flex justify-center mt-8 body-text">
              Do you want to claim your reward?
            </span>
            <div class="d-flex justify-center mt-3 pb-5">
              <v-btn depressed class="mx-3" dark color="primary">Yes</v-btn>
              <v-btn depressed dark color="#52F1EC"> No</v-btn>
            </div>
          </div>
        </v-card>
      </Modal>
    </div>
  </v-container>
</template>

<script>
import Modal from "@/components/modal.vue"
export default {
  name: "orderDetails",
  components: {
    Modal,
  },
  data() {
    return {
      tab: null,
      dialog: false,
      redeemed: [
        {
          id: "01",
          point: "N100",
          image: require("@/assets/images/airtime.svg"),
          name: "Airtime",
          redeem: "Redeem",
          redeemed: true,
        },
        {
          id: "02",
          point: "N200",
          image: require("@/assets/images/airtime.svg"),
          name: "Airtime",
          redeem: "Redeem",
          redeemed: true,
        },
        {
          id: "03",
          point: "N500",
          image: require("@/assets/images/airtime.svg"),
          name: "Airtime",
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

  methods: {
     closeModal() {
      this.dialog = false;
    },
    openModal() {
      this.dialog = true;
    },
  }
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

.overlay {
  position: absolute;
  z-index: 1;
  color: #fff;
}

.card-title {
  font-family: "Product Sans Light";
  font-size: 12px;
}

.card-point {
  font-family: "Product Sans Medium";
  font-size: 18px;
}

.card-name {
  font-family: "Product Sans Light";
  font-size: 14px;
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
  padding: 0px 20%;
  border-radius: 6px !important;
}
a.text-format.v-tab.v-tab--active {
  margin: 0 0 0 0px !important;
  padding: 0px 25%;
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

@media (max-width: 1024px) {
  .w-100 {
    width: 450px;
  }

  .card-title {
    font-family: "Product Sans Light";
    font-size: 18px;
  }

  .card-point {
    font-family: "Product Sans Medium";
    font-size: 28px;
    margin-bottom: 25px;
  }

  .card-name {
    font-family: "Product Sans Light";
    font-size: 20px;
  }
}

@media (max-width: 1440px) {
  .w-100 {
    width: 455px;
  }

  .card-title {
    font-family: "Product Sans Light";
    font-size: 18px;
  }

  .card-point {
    font-family: "Product Sans Medium";
    font-size: 28px;
    margin-bottom: 25px;
  }

  .card-name {
    font-family: "Product Sans Light";
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .w-100 {
    width: 317px;
  }

.card-title {
  font-family: "Product Sans Light";
  font-size: 12px;
}

.card-point {
  font-family: "Product Sans Medium";
  font-size: 18px;
}

.card-name {
  font-family: "Product Sans Light";
  font-size: 14px;
}
}
@media (max-width: 425px) {
  .w-100 {
    width: 317px;
  }

.card-title {
  font-family: "Product Sans Light";
  font-size: 12px;
}

.card-point {
  font-family: "Product Sans Medium";
  font-size: 18px;
}

.card-name {
  font-family: "Product Sans Light";
  font-size: 14px;
}
}
</style>