<template>
  <div style="height:100%" class="pt-8">
    <router-view v-show="!loader" />
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
  name: "Inventory",
  components: { modal },
  data: function () {
    return {
      loader: false,
      statusImage: null,
      dialog: false,
      dialogMessage: "",
    };
  },
  created() {
    if (this.$store.getters["inventory/products"].length === 0) {
      this.loader = true;
      this.$store
        .dispatch("inventory/getProducts")
        .then(() => {
          this.loader = false;
          this.dialog = false;
        })
        .catch((error) => {
          this.loader = false;
          this.dialog = true;
          this.statusImage = failedImage;
          if (error.response) {
            this.dialogMessage = "Sorry, this data does not Exist";
          } else {
            this.dialogMessage = "No internet Connection!";
          }
        });
    }
  },
};
</script>