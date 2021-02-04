<template>
  <v-container>
    <div class="mx-3">
      
      <p class="sub-header">
        You have <span class="font-weight-bold">20</span> orders.
      </p>
      <!-- search filter -->
      <v-row>
        <v-col cols="10">
          <v-icon class="position-abs ma-2 ml-3" color="#5064CC"
            >mdi-magnify</v-icon
          >
          <!-- <input
            type="text"
            v-model="searchValue"
            placeholder="placeholder"
            class="form-controll pl-10 form-control-bgColor"
          /> -->
          <Search placeholder="Search orders" @search="filterItems" />
        </v-col>
        <v-col cols="2" class="px-0">
          <div class="primary text-center rounded-lg">
            <v-icon color="white" style="padding: 5.3px">mdi-menu</v-icon>
          </div>
        </v-col>
      </v-row>

      <!-- card item -->
      <div v-if="isLoading" class="text-center my-8">
        <!-- this image time loader is calculated by the loader to triger the load time -->
        <v-progress-circular
          color="primary"
          class="text-center"
          indeterminate
          size="20"
          width="2"
        ></v-progress-circular>
      </div>
      <!-- loader ends here -->

      <!-- if no order -->
      <!-- <p v-if="orders.length == 0" class="text-center mt-8">No Item Found</p> -->
      <v-row>
        <v-col sm="4" v-for="orders in ordersItems" :key="orders.id">
          <v-card outlined class="rounded-lg pa-5 mb-3">
            <step-progress
              :steps="['Processing', 'Shipped', 'Delivered']"
              :current-step="
                orders.isProcessing || orders.isShipped || orders.isDelivered
                  ? 1
                  : 0
              "
              icon-class="fa fa-check"
              :line-thickness="lineThickness"
              active-color="#5064CC"
              :active-thickness="activeThickness"
              :passive-thickness="passiveThickness"
              passive-color="#5E5E5E1A"
            ></step-progress>
            <v-row class="mt-12">
              <v-col cols="5" class="py-0">
                <div class="text-center">
                  <v-img
                    :src="orders.img"
                    class="image-bgColor"
                    width="100%"
                  ></v-img>
                </div>
              </v-col>
              <v-col cols="7" class="pa-0">
                <div class="order-item-font">
                  Order No:
                  <span class="order-no-blue">
                    <router-link
                      :to="{ name: 'orderDetails', params: { id: orders.id } }"
                      style="text-decoration: none"
                    >
                      {{ orders.order_no }}
                    </router-link>
                  </span>
                </div>
                <div class="order-item-font">
                  Time:
                  <span class="order-no-grey"
                    >{{ orders.date }}
                    <span class="order-no-lighter-grey">{{
                      orders.time
                    }}</span></span
                  >
                </div>
                <div class="order-item-font">
                  Customer:
                  <span class="order-no-grey">{{ orders.customers_name }}</span>
                </div>
                <div class="order-item-font">
                  Payment Status:
                  <span class="order-no-grey">{{ orders.payment_status }}</span>
                </div>
                <div class="order-item-font">
                  Price (NGN):
                  <span class="order-no-grey">{{ orders.price }}</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Search from "@/components/general/Search.vue";
import StepProgress from "vue-step-progress";
// import { mapGetters } from "vuex";

// import the css (OPTIONAL - you can provide your own design)
import "vue-step-progress/dist/main.css";

export default {
  components: {
    Search,
    "step-progress": StepProgress,
  },
  data() {
    return {
      isLoading: false,
      // searchValue: "",
      filterItems: "",
      lineThickness: 1,
      activeThickness: 3,
      passiveThickness: 3,
      mySteps: ["Step 1", "Step 2", "Step 3"],

      ordersItems: [
        {
          id: "order1",
          img: require("../../assets/images/laptop.png"),
          order_no: "000-00000-00000",
          date: "5 Jul 2020",
          time: "8:58AM",
          customers_name: "Tony",
          payment_status: "Paid",
          price: "5000.00",
          isProcessing: true,
          isShipped: true,
          isDelivered: false,
        },

        {
          id: "order2",
          img: require("../../assets/images/laptop.png"),
          order_no: "000-00000-00000",
          date: "5 Jul 2020",
          time: "8:58AM",
          customers_name: "Ayo",
          payment_status: "Not Paid",
          price: "5000.00",
          isProcessing: false,
          isShipped: false,
          isDelivered: false,
        },

        {
          id: "order3",
          img: require("../../assets/images/laptop.png"),
          order_no: "000-00000-00000",
          date: "5 Jul 2020",
          time: "8:58AM",
          customers_name: "Lanwo",
          payment_status: "Paid",
          price: "5000.00",
          isProcessing: true,
          isShipped: true,
          isDelivered: true,
        },
      ],
    };
  },

  // computed: {
  //   // to populate items on the table
  //   ...mapGetters({
  //     ordersItems: "orders/orders",
  //     // searchOrder: "orders/searchOrder",
  //   }),
  //   // ...mapState({
  //   //   searchValue: (state) => state.orders.searchValue,
  //   //   pageDetails: (state) => state.orders.pageDetails,
  //   // }),
  // },
  // created() {
  //   this.$store.dispatch("orders/getOrders").then(() => {
  //     this.isLoading = false;
  //   });
  //   this.$store.dispatch("orders/filterGetOrders");
  // },

  // methods: {
  //   filterItems(param){
  //     console.log(param)
  //   }
  // }
  // computed: {
  //   filterItem: function () {
  //     return this.ordersItems.filter((blog) => {
  //       return blog.customers_name.match(this.searchValue);
  //     });
  //   },
  // },
};
</script>
<style lang="scss" >
.header {
  color: #2b2b2b;
  font-size: 14px;
  text-align: left;
  margin: 25px 0 15px 0;
  font-family: "Product Sans Regular";
}
.sub-header {
  color: #2b2b2b;
  font-size: 14px;
  font-family: "Product Sans Regular";
}
.image-bgColor {
  background-color: #f3f5ff;
  border-radius: 10px;
}
.order-item-font {
  color: #2b2b2b;
  font-family: "Product Sans Bold" !important;
  font-size: 12px;
}
.order-no-blue {
  color: #5064cc;
  font-size: 11px;
  font-family: "Product Sans Bold" !important;
}
.order-no-grey {
  color: #979797;
  font-size: 12px;
  font-family: "Product Sans Regular" !important;
}
.order-no-lighter-grey {
  color: #bebebe;
  font-size: 11px;
  font-family: "Product Sans Regular" !important;
}

div.step-progress__step span {
  color: var(--passiveColor);
  transition: 0.3s ease;
  display: none !important;
  font-size: 50px;
  transform: translateZ(0) scale(1) perspective(1000px);
  font-weight: 900;
  text-align: center;
  opacity: 1;
}

.step-progress__step-label {
  position: absolute;
  top: calc(100% + 25px);
  left: 50%;
  transform: translateX(-50%) perspective(1000px);
  white-space: nowrap;
  font-size: 10px;
  font-weight: normal;
  color: #979797 !important;
  transition: 0.3s ease;
  font-family: "Product Sans Regular";
}

.step-progress__step:after {
  width: 13px;
  height: 13px;
}

.step-progress__bar {
  width: 100%;
  display: flex;
  height: 15px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.position-abs {
  position: absolute !important;
  color: #5064cc;
  font-size: 20px !important;
  opacity: 0.5;
}
</style>

