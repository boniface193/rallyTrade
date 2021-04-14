<template>
  <div class="ma-4 show-mobile">
    <v-row>
      <v-col cols="6" class="px-0">
        <v-row>
          <v-col cols="6" class="pr-0 text-center">
            <img
              width="70%"
              :src="require(`@/assets/images/${depositItem.icon}`)"
            />
          </v-col>
          <v-col cols="6" class="pl-0 mt-2"
            ><div class="d-flex text-body-1">
              {{ depositItem.depositType }} DEPOSIT
            </div></v-col
          >
        </v-row>
      </v-col>
      <v-col cols="6"
        ><div class="mt-2">
          <span>Status</span> <br />
          <span
            ><v-icon class="pb-1" :color="depositItem.statusColor">{{
              depositItem.status
            }}</v-icon>
            <span v-if="depositItem.active" class="success--text mx-2"
              >APPROVED</span
            ></span
          >
        </div></v-col
      >
    </v-row>

    <v-row>
      <v-col cols="4">
        <div>Account</div>
        <div>Amount</div>
        <div>Reference</div>
        <div>From</div>
        <div>To</div>
      </v-col>
      <v-col cols="4" class="font-weight-bold">
        <div>859647</div>
        <div>10,000,000</div>
        <div>1587469</div>
        <div>GTB</div>
        <div>ZENITH</div>
      </v-col>
      <v-col cols="4" class="">
        <div
          class="icon-text text-center pa-2 mt-4"
          style="border-radius: 50%; width: 70%"
        >
          <v-icon class="text-center" size="45" color="black">{{
            depositItem.moneySign
          }}</v-icon>
        </div>
      </v-col>
    </v-row>

    <v-divider class="mt-8"></v-divider>
    <div>
      <div class="float-right mt-2">BONUS</div>
      <div class="d-flex justify-center pt-8">
        <div class="icon-text text-center pa-3 mt-4" style="border-radius: 50%">
          <v-icon
            class="text-center font-weight-bold"
            size="30"
            color="black"
            >{{ depositItem.moneySign }}</v-icon
          >
        </div>
        <div class="mt-8 ml-2 font-weight-bold" style="font-size: 30px">
          500,000
        </div>
      </div>
      <div class="text-center">
        <div>First Deposit Bonus</div>
        <v-btn
          color="success"
          class="text-capitalize text-body-1 my-2"
          depressed
          >Claim Bonus!</v-btn
        >
      </div>
    </div>
    <v-divider class="mt-8"></v-divider>
    <div class="left mt-2">HISTORY</div>
    <div v-for="item in history" :key="item.id">
      <div class="d-flex mt-3">
        <v-chip class="rounded mr-3" apppend small>
          {{ item.time }}
        </v-chip>
        <div class="text-h6">{{ item.status }}</div>
      </div>
      <div v-if="success == false">{{ item.errorMsg }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      depositItem: {},
      // errorMsg: "",
      history: [
        {
          time: "12:30",
          status: "Deposit Created",
          errorMsg: "hello",
          success: true,
        },
        // {time: '12:35', status: '', errorMsg: '', success: true},
        // {time: '12:40', status: '', errorMsg: '', success: false},
        // {time: '12:50', status: '', errorMsg: '', success: false},
        // {time: '12:55', status: '', errorMsg: '', success: true},
        // {time: '1:00', status: '', errorMsg: '', success: true}
      ],
    };
  },
  computed: {
    ...mapGetters({
      chipCard: "trading/getChipCard",
    }),
  },

  created() {
    const deposit = this.$store.getters["trading/getChipCard"].find(
      (item) => item.id == this.$route.params.id
    );
    this.depositItem = deposit;
    console.log(deposit);
    // .find((item) => {
    //       return item.id == this.id;
    //     })
    // console.log("chiCard", this.chipCard);
    // (id) => {
    //     return state.chipCard.find(items => items.id == id) }
    // console.log(this.$store.getters["trading/getChipCard"]);
    // console.log(this.$route.params.id);
    // console.log(this.$store.dispatch("trading/getChipCard"));
  },
};
</script>

<style lang="scss" scoped>
$body-color: #999a9e;
$font-family: "Inter", sans-serif;
.icon-text {
  background-color: #9ee8ff;
}
* {
  outline: none;
  box-sizing: border-box;
  color: $body-color;
  font-family: $font-family;
}
@media (min-width: 426px) {
  .show-mobile {
    display: none;
  }
}
</style>