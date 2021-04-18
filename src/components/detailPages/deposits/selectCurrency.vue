<template>
  <div class="container show-mobile">
    <div class="text-center">
      <div class="text-h5 my-5">
        <router-link :to="{ name: 'deposit' }">
          <v-icon class="float-left">mdi-arrow-left</v-icon>
        </router-link>
        <div>Select Currency</div>
      </div>
      <v-row class="d-flex justify-center mx-3">
        <v-col cols="6" class="d-flex justify-center">
          <v-card
            width="125"
            :dark="dark"
            :color="color"
            link
            @click="select1"
            v-click-outside="onClickOutside"
          >
            <!-- <v-card-actions> -->
            <v-icon size="70">mdi-currency-ngn</v-icon>
            <!-- </v-card-actions> -->
          </v-card>
        </v-col>
        <v-col cols="6" class="d-flex justify-center"
          ><v-card width="125" link @click="select2">
            <v-icon size="70">mdi-currency-usd</v-icon></v-card
          ></v-col
        >
      </v-row>
      <div class="text-h5 mt-8" v-if="reveal">Select Deposit Type</div>
    </div>

    <v-expand-transition>
      <v-row class="d-flex justify-center mx-3 mt-8 mb-16" v-if="reveal">
        <v-col cols="12" class="d-flex justify-center">
          <Gen-Card
            :width="110"
            class="text-center"
            :link="true"
            :to="{ name: 'bankDetails' }"
          >
            <img width="70%" src="@/assets/images/credit-card.svg" alt="" />
            <!-- <v-icon size="70">mdi-currency-ngn</v-icon> -->
          </Gen-Card></v-col
        >
        <v-col cols="6" class="d-flex justify-center">
          <Gen-Card
            :width="125"
            class="text-center"
            :link="true"
            :to="{ name: 'bankDetails' }"
          >
            <img width="70%" src="@/assets/images/wire-deposite.svg" alt="" />
            <!-- <v-icon size="70">mdi-currency-ngn</v-icon> -->
          </Gen-Card></v-col
        >
        <v-col cols="6" class="d-flex justify-center">
          <Gen-Card
            :width="125"
            class="text-center"
            :link="true"
            :to="{ name: 'bankDetails' }"
          >
            <img width="70%" src="@/assets/images/teller.svg" alt="" />
            <!-- <v-icon size="70">mdi-currency-ngn</v-icon> -->
          </Gen-Card></v-col
        >
      </v-row>
    </v-expand-transition>
  </div>
</template>

<script>
import GenCard from "@/components/general/genCard.vue";
export default {
  components: {
    GenCard,
  },
  data() {
    return {
      reveal: false,
      dark: false,
      color: "",
    };
  },
  methods: {
    select1() {
      this.reveal = true;
      this.dark = true;
      this.color = "#fb8c00";
    },

    select2() {
      // console.log("clicked")
      // // this.reveal = true;
      // this.dark = true;
      // this.color = "#fb8c00";
    },

    onClickOutside() {
      this.dark = false;
      this.color = "";
    },
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