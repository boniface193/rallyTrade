<template>
  <div>
    <!-- search bar -->
    <SearchBar
      placeholder="Search Inventory"
      bgColor="#F3F5FF"
      borderColor="transparent"
      @search="setSearchValue"
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
import searchBar from "@/components/general/searchBar.vue";
import modal from "@/components/dashboard/modal.vue";
import failedImage from "@/assets/img/failed-img.svg";
import { mapState } from "vuex";
export default {
  name: "searchProducts",
  components: { searchBar, modal },
  data: function () {
    return {
      dialog: false,
      dialogMessage: "",
      statusImage: null,
    };
  },
  computed: {
    ...mapState({
      tableLoader: (state) => state.inventory.tableLoader,
      searchValue: (state) => state.inventory.searchValue,
    }),
  },
  methods: {
    // set search value
    setSearchValue(params) {
      this.$store.commit("inventory/setSearchValue", params);
      this.$store.commit("inventory/setSearchProduct", true);
      this.$store.commit("inventory/setPage", 1);
      this.searchProducts();
    },
    // search products
    searchProducts() {
      if (this.searchValue !== "") {
        this.$store.commit("inventory/setSearchProduct", true);
        this.getProducts();
      } else {
        this.$store.commit("inventory/setSearchProduct", false);
        this.getProducts();
      }
    },
    // get products
    getProducts() {
      this.$store.commit("inventory/setTableLoader", true);
      this.$store
        .dispatch("inventory/searchProducts")
        .then(() => this.$store.commit("inventory/setTableLoader", false))
        .catch((error) => {
          this.$store.commit("inventory/setTableLoader", false);
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
.status-img {
  width: 140px;
  .v-image {
    width: 100%;
  }
}
</style>