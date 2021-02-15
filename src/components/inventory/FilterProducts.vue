<template>
  <div>
    <BasicFilter
      :price="filterParameters.price"
      toolTipText="Filter products"
      headerName="Filter Products"
      @filterOption="filterTable"
      @resetFilter="resetFilter"
    />

    <!--------------------------- modal for dialog messages ------------------------------>
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
import BasicFilter from "@/components/general/BasicFilter.vue";
import modal from "@/components/modal.vue";
import failedImage from "@/assets/images/failed-img.svg";
import { mapState } from "vuex";
export default {
  name: "FilterProducts",
  components: { BasicFilter, modal },
  data: function () {
    return {
      searchValue: "",
      dialog: false,
      dialogMessage: "",
      statusImage: null,
      filterParameters: {
        price: true,
      },
      filteringOptions: {
        minPrice: 0,
        maxPrice: 0,
      },
    };
  },
  computed: {
    ...mapState({
      inventoryLoader: (state) => state.inventory.inventoryLoader,
    }),
  },
  methods: {
    // get products
    getProducts() {
      this.$store.commit("inventory/setSearchProduct", false);
      this.$store.commit("inventory/setInventoryLoader", true);
      this.$store
        .dispatch("inventory/getfilteredProducts")
        .then(() => this.$store.commit("inventory/setInventoryLoader", false))
        .catch((error) => {
          this.$store.commit("inventory/setInventoryLoader", false);
          this.statusImage = failedImage;
          if (error.response) {
            this.dialogMessage = "Something went wrong, pls try again!";
          } else {
            this.dialogMessage = "No internet Connection!";
          }
          this.dialog = true;
        });
    },
    // filterTable
    filterTable(params) {
      // commit values for filter
      this.$store.commit("inventory/setFilter", {
        minPrice: params.minPrice,
        maxPrice: params.maxPrice,
      });

      // set page back to page 1
      this.$store.commit("inventory/setPage", 1);

      // get products
      this.getProducts();
    },
    // reset filter
    resetFilter() {
      // commit values for filter
      this.$store.commit("inventory/setFilter", {
        minPrice: 0,
        maxPrice: 0,
      });

      // set page back to page 1
      this.$store.commit("inventory/setPage", 1);

      // get products
      this.getProducts();
    },
  },
};
</script>
<style lang="scss" scoped>
.status-img {
  width: 140px;
  .v-image {
    width: 100%;
  }
}
</style>