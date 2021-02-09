<template>
  <div style="background: #fafafa; height: 100%">
    <div v-show="!loader">
      <v-row>
        <v-col class="col-12 col-md-6 pt-5 pt-md-15 px-5">
          <div class="image-container pa-10">
            <img :src="productDetails.image" alt="" />
            <span class="points">{{ productDetails.points }}pts</span>
          </div>
        </v-col>
        <v-col class="col-12 col-md-6 pt-5 pt-md-15 px-8">
          <h5 class="mb-4">{{ productDetails.name }}</h5>
          <p class="secondary--text mb-4" style="font-size: 14px">
            <span class="mr-5">&#8358;{{ productDetails.total_price_label }}</span
            ><span> SKU: {{ productDetails.sku }} </span
            ><span class="mx-2">|</span
            ><span style="font-weight: 600; color: black"
              >{{ productDetails.quantity }} Available</span
            >
          </p>
          <p class="mb-4">
            <span class="primary--text mr-2"
              >&#8358;{{ productDetails.min_profit_label }}</span
            ><span class="secondary--text" style="font-size: 14px"
              >Suggested profit</span
            >
          </p>
          <p class="secondary--text" style="font-size: 14px">
            Inventory: TDAfrica
          </p>
          <hr class="secondary--text" />

          <div class="py-5">
            <h5 class="mb-4">Description</h5>
            <p class="secondary--text mb-2" style="font-size: 14px">
              {{ productDetails.description }}
            </p>
            <!-- view more about product btn -->
            <router-link
              :to="{
                name: 'ProductDetails',
                params: {
                  id: this.$route.params.id,
                },
              }"
              style="text-decoration: none"
              class="primary--text"
            >
              View more
            </router-link>
          </div>
        </v-col>
      </v-row>
      <!-- checkout container -->
      <div class="checkout-container">
        <div
          class="resell-container px-5 pt-6 pb-5"
          v-show="!createLink.status"
        >
          <div v-show="!checkout">
            <p>
              <span class="mr-2 mb-4" style="font-weight: 600"
                >Unit price: </span
              ><span class="secondary--text"
                >&#8358;{{ productDetails.total_price_label }}</span
              >
            </p>
            <p>
              <span class="mr-2 mb-4" style="font-weight: 600"
                >Recommended profit: </span
              ><span class="primary--text"
                >&#8358;{{ productDetails.min_profit_label }} - &#8358;{{
                  productDetails.max_profit_label
                }}</span
              >
            </p>
            <v-btn class="primary" @click="() => (checkout = true)"
              >Resell</v-btn
            >
          </div>

          <div v-show="checkout">
            <div class="d-flex mb-3" style="align-items: baseline">
              <p class="mr-5 mb-0" style="font-weight: 600">
                Enter profit(N) by unit:
              </p>
              <v-form style="width: 200px" ref="form">
                <v-text-field
                  type="number"
                  required
                  :rules="inputRules"
                  v-model="profit"
                ></v-text-field>
              </v-form>
            </div>
            <div class="d-flex align-center mb-5">
              <p class="mr-5 mb-0" style="font-weight: 600">Quantity:</p>
              <div class="d-flex align-center">
                <span class="minus-btn" @click="decreaseNum">-</span>
                <span class="mx-4">{{ quantity }}</span>
                <span class="add-btn" @click="increaseNum">+</span>
              </div>
            </div>
            <p class="mb-5">
              <span class="mr-2" style="font-weight: 600">
                profit (&#8358;): </span
              ><span class="secondary--text">{{
                numberWithCommas(computedPrices.yourProfit)
              }}</span>
            </p>
            <p class="mb-5">
              <span class="mr-2" style="font-weight: 600"
                >Total (&#8358;):
              </span>
              <span class="secondary--text">{{
                numberWithCommas(computedPrices.total)
              }}</span>
            </p>
            <v-btn class="primary" @click="submitCheckoutDetails">Next</v-btn>
          </div>
        </div>
        <!-- link container -->
        <div
          class="sellerLink-container px-5 pt-6 pb-5"
          v-show="createLink.status"
        >
          <p class="mb-4" style="font-weight: 600">
            Congratulations! Your customer has been notified to make payment!
          </p>
          <p class="mb-4 secondary--text" style="font-size: 14px">
            You can also share the link below with your customer:
          </p>
          <div class="link py-3 px-2">
            <img src="@/assets/images/link.svg" alt="" />
            <span ref="customerUrl">{{ createLink.url }}</span>
          </div>
          <div
            class="d-flex align-center justify-space-between link-btn-container pt-5"
          >
            <v-btn
              color="#f3f5ff"
              class="primary--text mb-5"
              style="background: #f3f5ff"
              v-clipboard:copy="createLink.url"
              >Copy Link</v-btn
            >
            <v-btn class="primary mb-5" @click="shareDialog = true">Share Link</v-btn>
          </div>
        </div>
      </div>
      <!-- modal for dialog messages -->
    <modal :dialog="shareDialog" width="250">
      <div class="white pa-3 pb-5 text-center dialog">
        <div class="d-flex justify-end">
          <v-icon class="error--text close-btn" @click="shareDialog = false"
            >mdi-close</v-icon
          >
        </div>

        <div class="d-flex align-center justify-space-between px-4">
          <v-icon color="#64B161" large class="mt-3 mr-3">mdi-whatsapp</v-icon>
          <v-icon color="#00ACEE" large class="mt-3 mr-3">mdi-twitter</v-icon>
          <v-icon color="#3B5998" large class="mt-3 mr-3">mdi-facebook</v-icon>
        </div>
        <p class="mt-4 mb-0 secondary--text">Share products with customers on social media</p>
      </div>
    </modal>
    </div>
    <div class="d-flex py-5 text-center" v-if="loader">
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
  name: "Product",
  components: { modal },
  data: function () {
    return {
      quantity: 1,
      checkout: false,
      shareDialog: false,
      productDetails: {},
      loader: false,
      statusImage: null,
      dialog: false,
      dialogMessage: "",
      inputRules: [
        (v) => !!v || "Profit is required", // verifies name satisfies the requirement
        (v) => Math.sign(v) !== -1 || "Negative profit is not allowed",
        (v) =>
          v <= this.productDetails.max_profit ||
          "Profit must be less than maximum recommended profit",
      ],
      yourProfit: 0,
      total: 0,
      profit: 0,
    };
  },
  computed: {
    computedPrices() {
      let yourProfit, total;
      if (Math.sign(this.profit) !== -1) {
        yourProfit = this.quantity * this.profit;
        total = this.quantity * this.productDetails.total_price + yourProfit;
      }

      return {
        total: total,
        yourProfit: yourProfit,
      };
    },
    createLink() {
      const params = new URLSearchParams(window.location.search);
      const link = new URLSearchParams(
        decodeURIComponent(window.location.search)
      );
      if (params.get("createLink")) {
        const linkStatus = params.get("createLink");
        const url = link.get("link");
        return {
          status: linkStatus,
          url: url,
        };
      } else {
        return {
          status: false,
        };
      }
    },
  },
  created() {
    this.loader = true;
    this.$store
      .dispatch("inventory/getProductDetail", {
        id: this.$route.params.id,
      })
      .then((response) => {
        this.loader = false;
        this.productDetails = response.data.data;
      })
      .catch((error) => {
        this.dialog = true;
        this.loader = false;
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
      if (this.quantity < this.productDetails.quantity) {
        this.quantity = parseInt(this.quantity, 10) + 1;
      }
    },
    decreaseNum() {
      if (this.quantity > 1) {
        this.quantity = parseInt(this.quantity, 10) - 1;
      }
    },
    copyProductUrl() {
      let copyTextarea = this.$refs.customerUrl;
      copyTextarea.focus();
      copyTextarea.select();
      document.execCommand("copy");
    },
    submitCheckoutDetails() {
      this.$refs.form.validate();
      console.log(this.$route.params.createLink);
      if (this.$refs.form.validate()) {
        this.$router.push({
          name: "CustomerDetailsForm",
          params: {
            id: this.$route.params.id,
            quantity: this.quantity,
            profit: this.profit,
            createLink: this.$route.params.createLink,
          },
        });
      }
    },
    // separate money with comma
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
.points {
  background: #ffba00;
  color: #fff;
  padding: 5px 7px;
  position: absolute;
  font-size: 15px;
  top: -12px;
  right: -7px;
  z-index: 3;
  border-radius: 8px;
}
.checkout-container {
  right: 0px;
  bottom: 0px;
  position: sticky;
  float: right;
  width: 50%;
}
.resell-container {
  background: #fff;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  z-index: 2;
  .v-btn:not(.v-btn--round).v-size--default {
    height: 45px;
    min-width: 100%;
    padding: 0 16px;
  }
}
.sellerLink-container {
  background: #fff;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  z-index: 3;
  .link {
    background: #f3f5ff;
    color: #758bfc;
    text-align: center;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: break-all;
    img {
      margin-right: 10px;
    }
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
.link-btn-container {
  .v-btn:not(.v-btn--round).v-size--default {
    height: 40px;
    min-width: 48%;
    padding: 0 16px;
  }
}
.status-img {
  width: 140px;
  .v-image {
    width: 100%;
  }
}
@media (max-width: 950px) {
  .checkout-container {
    width: 100%;
  }
  .sellerLink-container,
  .resell-container {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
}
</style>