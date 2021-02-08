<template>
  <div class="px-4 px-md-10">
    <div class="d-flex align-center" style="justify-content: flex-end">
      <div class="search-container">
        <SearchProduct />
      </div>

      <FilterProducts />
    </div>
    <CategoryList class="mt-6" />

    <div class="pt-12 pb-5" v-show="products.length !== 0 && !inventoryLoader">
      <div class="products-container">
        <ProductCard
          class="mb-7"
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <!-- pagination -->
      <div class="d-flex justify-space-between px-4 align-center flex-wrap">
        <div class="d-flex justify-space-between align-center flex-wrap">
          <p class="mb-2 mr-5">
            Page {{ pageDetails.current_page }} of {{ pageDetails.last_page }}
          </p>
        </div>
        <div class="pagination mb-2">
          <v-pagination
            v-model="getCurrentPage.currentPage"
            :length="pageDetails.last_page"
            @input="setCurentPage"
            circle
          ></v-pagination>
        </div>
      </div>
    </div>
    <!-- no data -->
    <div
      class="text-center pt-10 pb-5"
      v-show="products.length == 0 && !inventoryLoader"
    >
      <p class="mb-0 secondary--text" style="font-size: 20px">
        Opps! No product found.
      </p>
    </div>
    <!-- loader -->
    <div class="text-center pt-10 pb-5" v-show="inventoryLoader">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <!--------------------------- modal for dialog messages ------------------------------>
    <modal :dialog="dialog" width="400">
      <div class="white pa-3 pb-10 text-center dialog">
        <div class="d-flex justify-end">
          <v-icon class="error--text close-btn" @click="dialog1 = false"
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
import SearchProduct from "@/components/inventory/SearchProduct.vue";
import FilterProducts from "@/components/inventory/FilterProducts.vue";
import CategoryList from "@/components/inventory/CategoryList.vue";
import ProductCard from "@/components/inventory/ProductCard.vue";
import failedImage from "@/assets/images/failed-img.svg";
import modal from "@/components/modal.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "InventoryHome",
  components: {
    SearchProduct,
    FilterProducts,
    CategoryList,
    ProductCard,
    modal,
  },
  data: function () {
    return {
      dialogMessage: "",
      statusImage: null,
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      products: "inventory/products",
    }),
    ...mapState({
      // pageDetails: (state) => state.inventory.pageDetails,
      inventoryLoader: (state) => state.inventory.inventoryLoader,
      page: (state) => state.inventory.page,
      pageDetails: (state) => state.inventory.pageDetails,
      getCurrentPage() {
        return {
          currentPage: this.pageDetails.current_page,
        };
      },
    }),
  },
  methods: {
    // set current page
    setCurentPage() {
      this.$store.commit("inventory/setPage", this.getCurrentPage.currentPage);
      this.searchProducts === true
        ? this.getSearchProduct()
        : this.getfilteredProducts();
    },
    // request for page with the request informations
    getfilteredProducts() {
      this.$store.dispatch("inventory/getfilteredProducts").catch((error) => {
        this.statusImage = failedImage;
        if (error.response) {
          this.dialogMessage = "Something went wrong, pls try again!";
        } else {
          this.dialogMessage = "No internet Connection!";
        }
        this.dialog = true;
      });
    },
    // search products
    getSearchProduct() {
      this.$store.dispatch("inventory/searchProducts").catch((error) => {
        this.statusImage = failedImage;
        if (error.response) {
          this.dialogMessage = "Something went wrong, pls try again!";
        } else {
          this.dialogMessage = "No internet Connection!";
        }
        this.dialog = true;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.products-container {
  display: flex;
  flex-wrap: wrap;
}
.search-container {
  width: 400px;
}
@media (max-width: 500px) {
  .search-container {
    width: -webkit-fill-available;
  }
}
</style>