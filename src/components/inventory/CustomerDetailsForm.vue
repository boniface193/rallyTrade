<template>
  <div class="px-4">
    <div
      class="d-flex align-center justify-center mb-8"
      style="position: relative"
    >
     <!-- previous page -->
      <router-link
        :to="{
          name: 'ProductPage',
          params: {
            id: this.$route.params.id,
          },
        }"
        style="text-decoration: none"
      >
        <span class="back-btn">
          <v-icon style="font-size: 25px">mdi-chevron-left</v-icon>
        </span>
      </router-link>
      <!-- title -->
      <h3 class="align-self-center">Customer Details</h3>
    </div>

    <!-- form section -->
    <v-form class="d-flex justify-space-between flex-wrap">
      <!-- name field -->
      <div class="mb-5 input-field">
        <p class="mb-1">Name*</p>
        <v-text-field
          color="primary"
          placeholder="Customer's full name"
          required
        >
        </v-text-field>
      </div>
      <!-- phone number field -->
      <div class="mb-5 input-field">
        <p class="mb-1">Phone Number*</p>
        <v-text-field
          color="primary"
          placeholder="Customer's mobile phone number"
          required
        >
        </v-text-field>
      </div>
      <!-- Email -->
      <div class="mb-5 input-field">
        <p class="mb-1">Email*</p>
        <v-text-field
          color="primary"
          placeholder="Customer's email address"
          required
        >
        </v-text-field>
      </div>
      <!-- phone number field -->
      <div class="mb-5 input-field">
        <p class="mb-1">Address*</p>
        <v-text-field color="primary" placeholder="Street address" required>
        </v-text-field>
      </div>

      <!-- Select state -->
      <div class="mb-5 input-field">
        <p class="mb-1">State/Region*</p>
        <div style="height: 52px">
          <selectBtn
            :items="['Kano', 'Abuja']"
            :item="'Select state/region'"
          />
        </div>
      </div>
      <div class="d-flex justify-end" style="width:100%">
        <v-btn class="primary">Submit</v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
import selectBtn from "@/components/general/selectBtn.vue";
export default {
  name: "CustomerDetailsForm",
  components: { selectBtn },
};
</script>
<style lang="scss" scoped>
.input-field {
  width: 48%;
}
.back-btn {
  position: absolute;
  left: 0px;
  top: 0;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 45px;
  min-width: 150px;
  padding: 0 16px;
}
@media (max-width: 750px) {
  .input-field {
    width: 100%;
  }
  .v-btn:not(.v-btn--round).v-size--default {
    min-width: 100%;
  }
}
</style>