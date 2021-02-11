<template>
  <div>
    <div>
      <router-link
        :to="{ path: `/checkout-details?order_id=${this.orderDetails.id}` }"
        style="text-decoration: none"
      >
        <v-icon color="black" class="mb-5">mdi-chevron-left</v-icon>
      </router-link>

      <div class="d-flex align-center justify-space-between">
        <h3>Your Address</h3>
        <h5 class="primary--text">Change Address</h5>
      </div>
      <div class="mt-6">
        <div class="mb-4">
          <h4>Emike lucy</h4>
          <p class="secondary--text mb-0">
            {{ orderDetails.delivery_location.address }}<br />234901328999
          </p>
        </div>
        <!-- delivery method  -->
        <div class="mb-4">
          <h4>Select a delivery method:</h4>
          <v-radio-group v-model="radioGroup">
            <v-radio
              class="primary--text"
              :label="`Express Delivery (₦${orderDetails.delivery_fee_label})`"
              value="express"
            ></v-radio>
            <v-radio
              class="primary--text"
              label="Standard Delivery "
              value="standard"
            ></v-radio>
          </v-radio-group>
        </div>
        <!-- shipping details -->
        <div class="mb-4">
          <h4>Shipping Details</h4>
          <p class="secondary--text mb-0">
            <span style="font-weight: 600; color: black">1</span>
            <span class="ml-5">{{ orderDetails.product_name }}</span>
          </p>
        </div>
        <!-- payment summary -->
        <div class="mb-3 summary-container">
          <h4 class="mb-4">Summary</h4>
          <div class="d-flex align-center justify-space-between mb-2">
            <p class="secondary--text mb-0">Item</p>
            <h4>&#8358;{{ orderDetails.subtotal_label }}</h4>
          </div>
          <div class="d-flex align-center justify-space-between mb-2">
            <p class="secondary--text mb-0">VAT (7.5%)</p>
            <h4>&#8358;{{ orderDetails.vat_label }}</h4>
          </div>
          <div class="d-flex align-center justify-space-between mb-2">
            <p class="secondary--text mb-0">Shipping fee</p>
            <h4>&#8358;{{ orderDetails.delivery_fee_label }}</h4>
          </div>
          <div class="d-flex align-center justify-space-between mb-2 mt-2">
            <h3 class="mb-0">Total</h3>
            <h3 class="primary--text">
              &#8358;{{ orderDetails.total_price_label }}
            </h3>
          </div>
          <!-- payment btn -->
          <v-btn
            class="primary py-3"
            :loading="processingLoader"
            :disabled="processingLoader"
            @click="payForItem"
            >Pay now</v-btn
          >
          <div>
            <flutterwave-pay-button
             ref="paymentTriggerBtn"
              :public_key="paymentDetails.url.public_key"
              :tx_ref="paymentDetails.url.tx_ref"
              :amount="paymentDetails.url.amount"
              :currency="paymentDetails.url.currency"
              :payment_options="paymentDetails.payment_options"
              redirect_url=""
              class="flutterwave-btn"
              :customer="{
                name: paymentDetails.url.customer.name,
                email: paymentDetails.url.customer.email,
                phone_number: paymentDetails.url.customer.phone,
              }"
              :customizations="{
                title: 'NOVA',
                description: 'Nova payment page',
                logo: 'https://flutterwave.com/images/logo-colored.svg',
              }"
              :callback="makePaymentCallback"
              :onclose="closedPaymentModal"
            >
              Pay now
            </flutterwave-pay-button>
          </div>
        </div>
      </div>
    </div>

    <!-- modal for dialog messages -->
    <modal :dialog="dialog" width="400">
      <div class="white pa-3 pb-10 text-center dialog">
        <div class="d-flex justify-end">
          <v-icon class="error--text close-btn" @click="dialog = false"
            >mdi-close</v-icon
          >
        </div>

        <div class="mb-7 mt-5 mx-auto status-img">
          <v-img :src="statusImage"></v-img>
        </div>

        <h4>{{ dialogMessage }}</h4>
      </div>
    </modal>
  </div>
</template>
<script>
import failedImage from "@/assets/images/failed-img.svg";
import modal from "@/components/modal.vue";
export default {
  name: "DeliveryPage",
  components: {
    modal,
  },
  props: ["productDetails", "orderDetails"],
  data: function () {
    return {
      radioGroup: "express",
      dialog: false,
      statusImage: null,
      dialogMessage: "",
      processingLoader: false,
      paymentDetails: {
        url: {
          amount: "",
          customer: {
            name: "",
            email: "",
            phone: null,
          },
        },
      },
    };
  },
  created() {
    this.pageLoader = true;
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("order_id");
    this.$store
      .dispatch("orders/getOrdersDetail", {
        id: orderId,
      })
      .then((response) => {
        this.orderDetails = response.data.data;
        this.pageLoader = false;
      })
      .catch((error) => {
        this.pageLoader = false;
        this.dialog = true;
        this.statusImage = failedImage;
        if (error.response) {
          this.dialogMessage = "Sorry, this order does not Exist";
        } else {
          this.dialogMessage = "No internet Connection!";
        }
      });
  },
  methods: {
    payForItem() {
      this.processingLoader = true;
      const params = new URLSearchParams(window.location.search);
      const orderId = params.get("order_id");
      this.$store
        .dispatch("orders/payForOrder", {
          id: orderId,
        })
        .then((response) => {
          this.processingLoader = false;
          this.paymentDetails = response.data.data;
          // console.log(this.paymentDetails.url.customer.email)
          // console.log(this.paymentDetails)
          this.$refs.paymentTriggerBtn.$el.click()
        })
        .catch((error) => {
          this.dialog = true;
          this.processingLoader = false;
          this.statusImage = failedImage;
          if (error.response) {
            this.dialogMessage = "Sorry, this order does not Exist";
          } else {
            this.dialogMessage = "No internet Connection!";
          }
        });
    },
    makePaymentCallback(response) {
      console.log("Payment callback", response);
    },
    closedPaymentModal() {
      const params = new URLSearchParams(window.location.search);
      const orderId = params.get("order_id");
      this.$router.push({
        path: `/payment-details?order_id=${orderId}`,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.summary-container {
  width: 400px;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 40px;
  min-width: 200px;
  padding: 0 16px;
}
.flutterwave-btn {
  width: 150px;
  padding: 8px 0px;
  cursor: pointer;
  color: white;
  background: #5064cc;
  border-radius: 5px;
  margin-top: 20px;
  display: none;
}
.status-img {
  width: 140px;
  .v-image {
    width: 100%;
  }
}
@media (max-width: 400px) {
  .summary-container {
    width: 100%;
  }
  .v-btn:not(.v-btn--round).v-size--default {
    min-width: 100%;
  }
}
</style>