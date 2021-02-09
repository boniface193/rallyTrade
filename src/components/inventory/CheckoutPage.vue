<template>
  <div class="px-4 py-5" style="height: 100%">
    <v-row v-show="!pageLoader">
      <v-col class="col-12 col-md-6 pt-5 pt-md-15 px-5">
        <div class="image-container pa-10">
          <img :src="orderDetails.product_image_url" alt="" />
        </div>
      </v-col>
      <v-col class="col-12 col-md-6 pt-5 pt-md-15 px-8">
        <h5 class="mb-4">{{ orderDetails.product_name }}</h5>
        <p class="primary--text mb-2">
          &#8358;{{ orderDetails.total_price_label }}
        </p>
        <p class="secondary--text" style="font-size: 14px">
          Inventory: TDAfrica
        </p>
        <div class="d-flex align-center">
          <p class="secondary--text mr-1 mb-0" style="font-size: 14px">
            Seller:
          </p>
          <div class="seller-image">
            <img src="@/assets/images/user-profile.svg" alt="" />
          </div>
          <h5>{{ orderDetails.seller_name }}</h5>
          <v-icon color="#64B161" class="ml-6">mdi-whatsapp</v-icon>
        </div>
        <div class="mt-5 d-flex align-center">
          <div class="d-flex align-center">
            <span class="minus-btn" @click="decreaseNum">-</span>
            <span class="mx-4">{{ quantity }}</span>
            <span class="add-btn" @click="increaseNum">+</span>
          </div>
          <p class="ml-5 mb-0">
            <span class="primary--text" style="font-size: 20px"
              >&#8358;{{ orderDetails.total_price_label }}</span
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
            By clicking continue, you are agreeing to our terms of service and
            our disclaimer
          </p>
        </div>
      </v-col>
    </v-row>
    <!-- page loader -->
    <div class="d-flex py-5 text-center" v-if="pageLoader">
      <v-progress-circular
        indeterminate
        color="primary"
        class="mx-auto"
      ></v-progress-circular>
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
  name: "CheckoutPage",
  components: { modal },
  data: function () {
    return {
      quantity: 1,
      dialog: false,
      statusImage: null,
      dialogMessage: "",
      orderDetails: "",
      pageLoader: false,
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
          this.dialogMessage = "Sorry, this data does not Exist";
        } else {
          this.dialogMessage = "No internet Connection!";
        }
      });
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
        path: `/delivery?order_id=${this.orderDetails.id}`,
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