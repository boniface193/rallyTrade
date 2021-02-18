<template>
  <v-container>
    <div class="mx-5">
      <div class="chOder">
        <router-link :to="{ path: '/orders' }">
          <v-icon class="float-left">mdi-chevron-left</v-icon>
        </router-link>
        <h5 class="text-center">Order Details</h5>
      </div>

      <v-row>
        <v-col sm="4" md="8" offset-md="2">
          <v-card outlined class="rounded-lg">
            <v-row>
              <v-col cols="5">
                <div class="text-center">
                  <v-img
                    :src="orderDetails.product_image_url"
                    class="mx-3 my-3 image-bgColor"
                    width="70%"
                  ></v-img>
                </div>
              </v-col>
              <v-col cols="7" class="pr-5 pl-1 my-lg-3 my-md-3">
                <div class="order-item-font mt-2">
                  Product Name:
                  <span class="order-no-grey">
                    {{ orderDetails.product_name }}
                  </span>
                </div>
                <div class="order-item-font mt-1">
                  Time:
                  <span class="order-no-grey"
                    >{{ orderDetails.created_at.slice(0, -6) }}
                    <span class="order-no-lighter-grey">{{
                      orderDetails.created_at.slice(10)
                    }}</span></span
                  >
                </div>
                <div class="order-item-font mt-1">
                  Customer:
                  <span class="order-no-grey">{{
                    orderDetails.customer.name
                  }}</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col sm="4"  md="8" offset-md="2">
          <v-card outlined class="rounded-lg px-5">
            <div class="order-item-font my-2">Shipping and Billing Address</div>
            <div class="order-no-grey mb-3">
              {{orderDetails.delivery_location.address}}<br />
              <span>900281</span><br />
              <span>Abuja</span><br />
              <span>Nigeria</span><br />
              <div class="mt-2">
                <span
                  ><v-icon size="10" color="primary" class="mr-2"
                    >mdi-phone-outline</v-icon
                  >{{ orderDetails.customer.phone }}</span
                ><br />
                <span
                  ><v-icon size="10" color="primary" class="mr-2"
                    >mdi-email-outline</v-icon
                  >{{ orderDetails.customer.email }}</span
                >
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col sm="4" md="8" offset-md="2">
          <v-card outlined class="rounded-lg px-5">
            <div class="order-item-font my-2">
              Payment Status:
              <span class="order-no-blue ml-2">
                {{ orderDetails.payment_status_label }}</span
              >
            </div>

            <div class="order-no-grey my-2">
              Subtotal
              <div class="d-flex justify-space-between">
                <span class="order-no-lighter-grey">
                  {{ orderDetails.total_items }} {{ orderDetails.product_name }}
                </span>
                <div class="">NGN{{ orderDetails.subtotal_label }}</div>
              </div>
            </div>

            <div class="order-no-grey my-2">
              Shipping
              <div class="d-flex justify-space-between">
                <span class="order-no-lighter-grey"> Standard Shipping </span>
                <div class="">NGN{{orderDetails.delivery_fee_label}}</div>
              </div>
            </div>

            <div class="d-flex justify-space-between my-3">
              <span class="order-no-blue"> Total Paid</span>
              <div class="order-no-grey">NGN{{orderDetails.total_price_label}}</div>
            </div>
          </v-card>
        </v-col>

        <v-col sm="4" md="8" offset-md="2">
          <v-card outlined class="rounded-lg px-5">
            <div class="order-item-font my-2">
              Delivery Status:
              <span class="order-no-blue ml-2 mr-10">{{
                orderDetails.delivery_status_label
              }}</span>
            </div>

            <div class="d-flex mt-3 mb-8">
              <div class="order-no-grey">
                {{ orderDetails.delivery_location.address }}
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col sm="4" md="8" offset-md="2">
          <v-card outlined class="rounded-lg px-5">
            <div class="order-item-font my-2">
              Point Earned:
              <span class="order-no-blue ml-2 mr-10">
                {{ orderDetails.total_points }}</span
              >
            </div>

            <div class="order-item-font my-2 mb-8">
              Profit:
              <span class="order-no-blue ml-2 mr-10">
                NGN{{ orderDetails.seller_profit }}</span
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "orderDetails",
  data() {
    return {
      orderDetails: {},
    };
  },
  created() {
    this.$store
      .dispatch("orders/getOrdersDetail", { id: this.$route.params.id })
      .then((response) => {
        this.orderDetails = response.data.data;
        console.log(response.data.data)
      })
      .catch((e) => {
        console.log(e);
      });
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