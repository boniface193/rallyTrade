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
        <v-col sm="4" md="12">
          <v-card outlined class="rounded-lg">
            <v-row>
              <v-col cols="5">
                <div class="text-center">
                  <v-img
                    src="../../assets/images/laptop.png"
                    class="mx-3 my-3 image-bgColor"
                    width="70%"
                  ></v-img>
                </div>
              </v-col>
              <v-col cols="7" class="pr-5 pl-1 my-lg-3 my-md-3">
                <div class="order-item-font mt-2">
                  Product Name:
                  <span class="order-no-grey"> Infinix Hot 2020 </span>
                </div>
                <div class="order-item-font mt-1">
                  Time:
                  <span class="order-no-grey"
                    >5 Jul 2020
                    <span class="order-no-lighter-grey">8:58AM</span></span
                  >
                </div>
                <div class="order-item-font mt-1">
                  Customer:
                  <span class="order-no-grey">Tony</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col sm="4" md="12">
          <v-card outlined class="rounded-lg px-5">
            <div class="order-item-font my-2">Shipping and Billing Address</div>
            <div class="order-no-grey mb-3">
              32 Oran Street, Wuse zone 1, Abuja<br />
              <span>900281</span><br />
              <span>Abuja</span><br />
              <span>Nigeria</span><br />
              <div class="mt-2">
                <span
                  ><v-icon size="10" color="primary" class="mr-2"
                    >mdi-phone-outline</v-icon
                  >+234816056000</span
                ><br />
                <span
                  ><v-icon size="10" color="primary" class="mr-2"
                    >mdi-email-outline</v-icon
                  >tnkwo@gmail.com</span
                >
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col sm="4" md="12">
          <v-card outlined class="rounded-lg px-5">
            <div class="order-item-font my-2">
              Payment Status: <span class="order-no-blue ml-2"> Paid</span>
            </div>

            <div class="order-no-grey my-2">
              Subtotal
              <div class="d-flex justify-space-between">
                <span class="order-no-lighter-grey"> 1 Infinix Hot 2020 </span>
                <div class="">NGN150,000.00</div>
              </div>
            </div>

            <div class="order-no-grey my-2">
              Shipping
              <div class="d-flex justify-space-between">
                <span class="order-no-lighter-grey"> Standard Shipping </span>
                <div class="">NGN3,000.00</div>
              </div>
            </div>

            <div class="d-flex justify-space-between my-3">
              <span class="order-no-blue"> Total Paid</span>
              <div class="order-no-grey">NGN3,000.00</div>
            </div>
          </v-card>
        </v-col>

        <v-col sm="4" md="12">
          <v-card outlined class="rounded-lg px-5">
            <div class="order-item-font my-2">
              Delivery Status:
              <span class="order-no-blue ml-2 mr-10"> Delivered</span>
            </div>

            <div class="d-flex mt-3 mb-8">
              <div class="order-no-grey">
                32 Oran Street, Wuse zone 1, Abuja
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col sm="4" md="12">
          <v-card outlined class="rounded-lg px-5">
            <div class="order-item-font my-2">
              Point Earned:
              <span class="order-no-blue ml-2 mr-10"> 100</span>
            </div>

            <div class="order-item-font my-2 mb-8">
              Commission:
              <span class="order-no-blue ml-2 mr-10"> NGN1,000.00</span>
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