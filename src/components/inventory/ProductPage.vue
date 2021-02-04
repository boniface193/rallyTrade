<template>
  <div style="background: #fafafa">
    <v-row>
      <v-col class="col-12 col-md-6 pt-5 pt-md-15 px-5">
        <div class="image-container pa-10">
          <img src="@/assets/images/fire.svg" alt="" />
          <span class="points">50pt</span>
        </div>
      </v-col>
      <v-col class="col-12 col-md-6 pt-5 pt-md-15 px-8">
        <h5 class="mb-4">MacBook Pro 2013- 8GB- 2TB- 5K Retina Display</h5>
        <p class="secondary--text mb-4" style="font-size: 14px">
          <span class="mr-5">N200,000.00</span><span> SKU: 1234567 </span
          ><span class="mx-2">|</span><span>29 Available</span>
        </p>
        <p class="mb-4">
          <span class="primary--text mr-2">N5,000</span
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
            MacBook Pro 2013, core i5, 128 GB SSD, 8GB, 13", 12 hours battery,
            backlit keyboard, Multi-Touch 1.8GHz dual-core intel core i5
            processor with 3MB shared L3 cache (Turbo boost up to 2.9GHz) 8GB of
            1,600MHz LPDDR3 RAM 128GB PCle- based flash storage 13 inch, 1440 x
            900 pixel display. Intel HD Graphics 600011ac Wi-Fi (IEEE
            802.11a/b/g/n compatible); Bluetooth 4.0 Ports: 2 x USB 3; 1 x
            Thunderbolt 2; 1 x SDXC card slot; 1 x 3.5mm headphone jackdual
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
      <div class="resell-container px-5 pt-6 pb-5" v-show="!createLink">
        <div v-show="!checkout">
          <p>
            <span class="mr-2 mb-4" style="font-weight: 600">Unit price: </span
            ><span class="secondary--text">N200,000.00</span>
          </p>
          <p>
            <span class="mr-2 mb-4" style="font-weight: 600"
              >Recommended profit: </span
            ><span class="primary--text">N5,000 - N10,000</span>
          </p>
          <v-btn class="primary" @click="() => (checkout = true)">Resell</v-btn>
        </div>

        <div v-show="checkout">
          <div class="d-flex mb-3" style="align-items: baseline">
            <p class="mr-5 mb-0" style="font-weight: 600">
              Enter profit(N) by unit:
            </p>
            <div style="width: 200px">
              <v-text-field type="number" required></v-text-field>
            </div>
          </div>
          <div class="d-flex align-center mb-5">
            <p class="mr-5 mb-0" style="font-weight: 600">Quantity:</p>
            <div class="d-flex align-center">
              <span class="minus-btn" @click="decreaseNum">-</span>
              <span class="mx-4">{{ quantity }}</span>
              <span class="add-btn" @click="increaseNum">+</span>
            </div>
          </div>
          <p class="mb-5" style="font-weight: 600">Your profit(N):</p>
          <p class="mb-5" style="font-weight: 600">Total(N):</p>
          <v-btn class="primary" @click="submitCheckoutDetails">Next</v-btn>
        </div>
      </div>
      <!-- link container -->
      <div class="sellerLink-container px-5 pt-6 pb-5" v-show="createLink">
        <p class="mb-4" style="font-weight: 600">
          Congratulations! Your customer has been notified to make payment!
        </p>
        <p class="mb-4 secondary--text" style="font-size: 14px">
          You can also share the link below with your customer:
        </p>
        <div class="link py-3">
          <img src="@/assets/images/link.svg" alt="" />
          https://nova.search.macbook13/ayotundelanwo23
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Product",
  data: function () {
    return {
      quantity: 0,
      checkout: false,
      createLink: false,
    };
  },
  methods: {
    increaseNum() {
      this.quantity = parseInt(this.quantity, 10) + 1;
    },
    decreaseNum() {
      if (this.quantity > 0) {
        this.quantity = parseInt(this.quantity, 10) - 1;
      }
    },
    submitCheckoutDetails() {
      this.$router.push({
        name: "CustomerDetailsForm",
        params: {
          id: this.$route.params.id,
        },
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