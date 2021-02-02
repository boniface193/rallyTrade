<template>
  <v-container>
    <div class="mx-5">
      <div class="chOder my-9">
        <router-link :to="{ path: '/dashboard' }">
          <v-icon class="float-left">mdi-chevron-left</v-icon>
        </router-link>
        <div v-if="!Search" class="d-flex">
          <h5 class="text-center mx-auto">Payment History</h5>
          <v-icon style="cursor: pointer" @click="toggleSearch"
            >mdi-magnify</v-icon
          >
        </div>
        <div class="mx-10" @mouseout="toggleOnLeave">
          <Search
            placeholder="Search orders"
            @search="filterItems"
            v-if="Search"
          />
        </div>
      </div>

      <v-row>
        <v-col cols="12" lg="4" v-for="items in salesHistory" :key="items.id">

          <v-card outlined class="rounded-lg py-3 px-8">
            
            <div class="order-item-font mt-1">
              Status:
              <span class="order-no-grey mx-1"> {{ items.payment }}</span>
            </div>
            <div class="order-item-font mt-1">
              Amount:
              <span class="order-no-grey mx-1">N{{ items.price }}</span>
            </div>
            <div class="order-item-font mt-2">
              Description:
              <span class="order-no-grey mx-1"> {{ items.itemName }} </span>
            </div>
            <div class="order-item-font mt-1">
              Date:
              <span class="order-no-grey mx-1"
                >{{ items.date }} {{
                  items.time}}</span
              >
            </div>            
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Search from "@/components/general/Search.vue";
export default {
  name: "orderDetails",
  components: {
    Search,
  },
  data() {
    return {
      Search: false,
      salesHistory: [
        {
          itemName: "Infinix Hot 10",
          date: "5 Jul 2020",
          time: "8:58AM",
          customers_name: "Tony Nwachukwu",
          payment: "Paid",
          price: "5000.00",
        },
        {
          itemName: "Infinix Hot 10",
          date: "5 Jul 2020",
          time: "8:58AM",
          customers_name: "Tony Nwachukwu",
          payment: "Paid",
          price: "5000.00",
        },
        {
          itemName: "Infinix Hot 10",
          date: "5 Jul 2020",
          time: "8:58AM",
          payment: "Paid",
          price: "5000.00",
        },
        {
          itemName: "Infinix Hot 10",
          date: "5 Jul 2020",
          time: "8:58AM",
          payment: "Paid",
          price: "5000.00",
        },
      ],
    };
  },
  methods: {
    toggleSearch() {
      this.Search = true;
    },
    toggleOnLeave() {
      this.Search = false;
    },
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
</style>