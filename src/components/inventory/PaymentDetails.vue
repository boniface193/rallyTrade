<template>
  <div>
    <div class="payment-page">
      <div class="d-flex align-baseline justify-space-between">
        <h2>Address Details</h2>
        <p class="primary--text" style="font-size: 14px">Change Address</p>
      </div>
      <div class="mt-2">
        <div class="mb-4">
          <h4>Emike lucy</h4>
          <p class="secondary--text mb-0">
            {{ orderDetails.delivery_location.address }}<br />234901328999
          </p>
        </div>
        <!-- delivery method  -->
        <div class="mb-4">
          <h4>Select a delivery method:</h4>
          <v-radio-group v-model="radioGroup" class="mt-1">
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
          <h4>Order Details</h4>
          <p class="secondary--text mb-0">
            <span style="font-weight: 600; color: black">1</span>
            <span class="ml-5">{{ orderDetails.product_name }}</span>
          </p>
        </div>
        <!-- payment summary -->
        <div class="mb-3 summary-container">
          <h4 class="mb-1">Summary</h4>
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
  computed: {
    paymentOption() {
      return {
        public_key: this.paymentDetails.url.public_key,
        tx_ref: this.paymentDetails.url.tx_ref,
        amount: this.paymentDetails.url.amount,
        currency: this.paymentDetails.url.currency,
        payment_options: this.paymentDetails.url.payment_options,
        redirect_url: '',
        customer: {
          name: this.paymentDetails.url.customer.name,
          email: this.paymentDetails.url.customer.email,
          phone_number: this.paymentDetails.url.customer.phone
        } ,
        callback: this.makePaymentCallback,
        onclose: this.closedPaymentModal
      }
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
          console.log(this.paymentDetails.url.customer.email);
          console.log(this.paymentDetails);
          // this.$refs.paymentTriggerBtn.$el.click();
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
      this.verifyPayment(response)
    },
    verifyPayment(value){
      this.$store.dispatch("",{
        trx_ref: value.trx_ref,
        trx_id: value.trx_id,
        orderId: this.orderDetails.id
      }).then((response)=>{
        console.log(response.data)
      }).catch((error)=> {
        console.log(error.data)
      })
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
@media (max-width: 950px) {
  .payment-page {
    width: 700px;
  }
}
@media (max-width: 600px) {
  .v-btn:not(.v-btn--round).v-size--default {
    min-width: 100%;
  }
}
</style>