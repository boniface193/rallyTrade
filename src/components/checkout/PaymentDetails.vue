<template>
  <div>
    <div class="payment-page">
      <div class="d-flex align-baseline justify-space-between">
        <h2>Address Details</h2>
        <p class="primary--text" style="font-size: 14px">Change Address</p>
      </div>
      <div class="mt-2">
        <div class="mb-4">
          <h4>{{ pageDetails.orderDetails.customer.name }}</h4>
          <p class="secondary--text mb-0">
            {{ pageDetails.orderDetails.delivery_location.address }}<br />{{
              pageDetails.orderDetails.customer.phone
            }}
          </p>
        </div>
        <!-- delivery method  -->
        <div class="mb-0">
          <h4>Select a delivery method:</h4>
          <v-radio-group v-model="radioGroup" class="mt-1">
            <v-radio
              class="primary--text mb-0"
              :label="`Express Delivery (₦${pageDetails.orderDetails.delivery_fee_label})`"
              value="express"
            ></v-radio>
            <span class="ml-8 mb-4 primary--text"
              >Item would be delivered within 24hrs</span
            >
            <v-radio
              class="primary--text mb-0"
              label="Standard Delivery (₦1200)"
              value="standard"
            ></v-radio>
            <span class="ml-8 mb-0 primary--text"
              >Item would be delivered within 3 working days</span
            >
          </v-radio-group>
        </div>
        <!-- shipping details -->
        <div class="mb-4">
          <h4>Order Details</h4>
          <p class="secondary--text mb-0">
            <span style="font-weight: 600; color: black">1</span>
            <span class="ml-5">{{
              pageDetails.orderDetails.product_name
            }}</span>
          </p>
        </div>
        <!-- payment summary -->
        <div class="mb-3 summary-container">
          <h4 class="mb-1">Summary</h4>
          <div class="d-flex align-center justify-space-between mb-2">
            <p class="secondary--text mb-0">Item</p>
            <h4>&#8358;{{ pageDetails.orderDetails.subtotal_label }}</h4>
          </div>
          <!-- <div class="d-flex align-center justify-space-between mb-2">
            <p class="secondary--text mb-0">VAT (7.5%)</p>
            <h4>&#8358;{{ orderDetails.vat_label }}</h4>
          </div> -->
          <div class="d-flex align-center justify-space-between mb-2">
            <p class="secondary--text mb-0">Shipping fee</p>
            <h4>&#8358;{{ pageDetails.orderDetails.delivery_fee_label }}</h4>
          </div>
          <div class="d-flex align-center justify-space-between mb-2 mt-2">
            <h3 class="mb-0">Total</h3>
            <h3 class="primary--text">
              &#8358;{{ pageDetails.orderDetails.total_price_label }}
            </h3>
          </div>
          <!-- payment btn -->
          <v-btn
            class="primary py-3 mt-5"
            :loading="processingLoader"
            :disabled="processingLoader"
            @click="payForItem"
            >Pay now</v-btn
          >
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
        amount: "",
        customer: {
          name: "",
          email: "",
          phone: null,
        },
      },
    };
  },

  computed: {
    paymentOption() {
      return {
        public_key: this.paymentDetails.public_key,
        tx_ref: this.paymentDetails.tx_ref,
        amount: this.paymentDetails.amount,
        currency: this.paymentDetails.currency,
        payment_options: this.paymentDetails.payment_options,
        redirect_url: "",
        customer: {
          name: this.paymentDetails.customer.name,
          email: this.paymentDetails.customer.email,
          phone_number: this.paymentDetails.customer.phone,
        },
        callback: this.makePaymentCallback,
        onclose: this.closedPaymentModal,
      };
    },
    pageDetails() {
      return {
        productDetails: this.productDetails,
        orderDetails: this.orderDetails,
      };
    },
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
          this.payViaService();
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
    payViaService() {
      this.payWithFlutterwave(this.paymentOption);
    },
    makePaymentCallback(response) {
      this.verifyPayment(response);
    },
    verifyPayment(value) {
      this.$store
        .dispatch("orders/verifyPayment", {
          ref: value.tx_ref,
          id: value.transaction_id,
          orderId: this.pageDetails.orderDetails.id,
        })
        .then(() => {
          this.$router.push({
            path: `/payment-success?order_id=${this.pageDetails.orderDetails.id}`,
          });
          location.reload();
        })
        .catch((error) => {
          if (error.response) {
            this.$router.push({
              path: `/payment-failed?order_id=${this.paymentDetails.orderDetails.id}`,
            });
          } else {
            this.dialog = true;
            this.dialogMessage = "No internet Connection!";
            this.statusImage = failedImage;
          }
        });
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
.payment-page {
  width: 500px;
  margin: auto;
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
@media (max-width: 1100px) {
  .payment-page {
    width: 400px;
  }
}
@media (max-width: 960px) {
  .payment-page {
    width: 550px;
  }
}
@media (max-width: 600px) {
  .payment-page {
    width: 100%;
  }
  .v-btn:not(.v-btn--round).v-size--default {
    min-width: 100%;
  }
}
</style>