<template>
  <div class="px-4 py-5" style="height: 100%">
    <div class="d-flex align-center justify-space-between">
      <h3>Your Address</h3>
      <h5 class="primary--text">Change Address</h5>
    </div>
    <div class="mt-6">
      <div class="mb-4">
        <h4>Emike lucy</h4>
        <p class="secondary--text mb-0">
          32 Ademola Adetukunbo, zone 1, Abuja<br />234901328999
        </p>
      </div>
      <!-- delivery method  -->
      <div class="mb-4">
        <h4>Select a delivery method:</h4>
        <v-radio-group v-model="radioGroup">
          <v-radio
            class="primary--text"
            label="Door Delivery"
            value="doorDelivery"
          ></v-radio>
          <v-radio
            class="primary--text"
            label="Pickup"
            value="pickup"
          ></v-radio>
        </v-radio-group>
      </div>
      <!-- shipping details -->
      <div class="mb-4">
        <h4>Shipping Details</h4>
        <p class="secondary--text mb-0">
          <span style="font-weight: 600; color: black">1</span>
          <span class="ml-5">Macbook pro</span>
        </p>
      </div>
      <!-- payment summary -->
      <div class="mb-3 summary-container">
        <h4 class="mb-4">Summary</h4>
        <div class="d-flex align-center justify-space-between mb-2">
          <p class="secondary--text mb-0">Item</p>
          <h4>&#8358;150,000</h4>
        </div>
        <div class="d-flex align-center justify-space-between mb-2">
          <p class="secondary--text mb-0">VAT (7.5%)</p>
          <h4>&#8358;20,000</h4>
        </div>
        <div class="d-flex align-center justify-space-between mb-2">
          <p class="secondary--text mb-0">Shipping fee</p>
          <h4>&#8358;10,000</h4>
        </div>
        <div class="d-flex align-center justify-space-between mb-2 mt-2">
          <h3 class="mb-0">Total</h3>
          <h3 class="primary--text">&#8358;150,000</h3>
        </div>
        <v-btn class="primary mt-7 mb-3">Pay now</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DeliveryPage",
  data: function () {
    return {
      radioGroup: "doorDelivery",
    };
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
@media (max-width: 400px) {
  .summary-container {
    width: 100%;
  }
  .v-btn:not(.v-btn--round).v-size--default {
    min-width: 100%;
  }
}
</style>