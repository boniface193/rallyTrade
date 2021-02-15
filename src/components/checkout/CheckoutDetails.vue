<template>
  <div>
    <h2 class="mb-4">{{ orderDetails.product_name }}</h2>
    <!-- <p class="primary--text mb-2">&#8358;{{ orderDetails.subtotal_label }}</p> -->
    <p class="secondary--text" style="font-size: 14px">
      Inventory: {{ storeDetails.name }}
    </p>
    <div class="d-flex align-center">
      <p class="secondary--text mr-1 mb-0" style="font-size: 14px">Chat Seller:</p>
      
      <a
        :href="
          '//' +
          `api.whatsapp.com/send?text=''&phone=${orderDetails.customer.phone}`
        "
        target="_blank"
        style="text-decoration:none"
      >
        <v-icon color="#64B161" class="ml-2 mr-2" style="cursor: pointer"
          >mdi-whatsapp</v-icon
        >
      </a>
      <h5>{{ orderDetails.seller_name }}</h5>
    </div>
    <!-- product description -->
    <div class="mt-5">
      <h5 class="mb-2">Description</h5>
      <p class="mb-5 secondary--text" style="font-size: 14px">
        {{ productDetails.description }}
      </p>
    </div>
    <!-- select quantity container -->
    <div class="mt-5 d-flex align-center">
      <div class="d-flex align-center">
        <span class="minus-btn" @click="decreaseNum">-</span>
        <span class="mx-4">{{ quantity }}</span>
        <span class="add-btn" @click="increaseNum">+</span>
      </div>
      <p class="ml-5 mb-0">
        <span class="primary--text" style="font-size: 20px"
          >&#8358;{{ orderDetails.subtotal_label }}</span
        ><br /><span class="secondary--text" style="font-size: 14px"
          >Delivery fee not included yet</span
        >
      </p>
    </div>
    <div class="btn-container">
      <v-btn class="primary mt-7 mb-3" @click="gotoDeliveryPage"
        >Continue</v-btn
      >
      <p class="secondary--text" style="font-size: 14px">
        By clicking continue, you are agreeing to our terms of service and our
        disclaimer
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CheckoutDetails",
  props: ["productDetails", "orderDetails", "storeDetails"],
  data: function () {
    return {
      quantity: 0,
    };
  },
  methods: {
    increaseNum() {
      this.quantity = parseInt(this.quantity, 10) + 1;
    },
    decreaseNum() {
      if (this.quantity > 1) {
        this.quantity = parseInt(this.quantity, 10) - 1;
      }
    },
    gotoDeliveryPage() {
      this.$router.push({
        path: `/payment-details?order_id=${this.orderDetails.id}`,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.image-container {
  width: 80%;
  background: #fff;
  margin: auto;
  border-radius: 12px;
  position: relative;
  img {
    width: 100%;
  }
}
.seller-image {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
}
.add-btn {
  border-radius: 50%;
  background: #758bfc;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
  cursor: pointer;
}
.minus-btn {
  border-radius: 50%;
  background: #f3f5ff;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  color: #758bfc;
  justify-content: center;
  cursor: pointer;
}

.v-btn:not(.v-btn--round).v-size--default {
  height: 40px;
  min-width: 200px;
  padding: 0 16px;
}
.status-img {
  width: 140px;
  .v-image {
    width: 100%;
  }
}
@media (max-width: 500px) {
  .btn-container {
    text-align: center;
  }
  .v-btn:not(.v-btn--round).v-size--default {
    min-width: 100%;
  }
}
</style>