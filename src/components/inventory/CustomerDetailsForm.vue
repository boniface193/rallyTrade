<template>
  <div class="px-4">
    <div
      class="d-flex align-center justify-center mb-8"
      style="position: relative"
    >
      <!-- go to previous page -->
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
    <v-form class="d-flex justify-space-between flex-wrap" ref="form">
      <!-- name field -->
      <div class="mb-5 input-field">
        <p class="mb-1">Name*</p>
        <v-text-field
          color="primary"
          placeholder="Customer's full name"
          v-model="name"
          :rules="nameRules"
          @keyup.enter="$refs.input2.focus"
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
          v-model="phoneNumber"
          :rules="phoneNumberRules"
          type="telephone"
          ref="input2"
          @keyup.enter="$refs.input3.focus"
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
          v-model="email"
          :rules="emailRules"
          ref="input3"
          @keyup.enter="$refs.input4.focus"
          required
        >
        </v-text-field>
      </div>
      <!-- phone number field -->
      <div class="mb-5 input-field">
        <p class="mb-1">Address*</p>
        <v-text-field
          color="primary"
          placeholder="Street address"
          v-model="address"
          :rules="addressRules"
          ref="input4"
          @keyup.enter="submitCustomerDetails"
          required
        >
        </v-text-field>
      </div>

      <!-- Select state -->
      <!-- <div class="mb-5 input-field">
        <p class="mb-1">State/Region*</p>
        <div style="height: 52px">
          <selectBtn :items="['Kano', 'Abuja']" :item="'Select state/region'" />
        </div>
      </div> -->
      <div class="d-flex justify-end" style="width: 100%">
        <v-btn
          class="primary"
          :loading="loading"
          :disabled="loading"
          @click="submitCustomerDetails"
          >Submit</v-btn
        >
      </div>
    </v-form>
  </div>
</template>
<script>
//import selectBtn from "@/components/general/selectBtn.vue";
export default {
  name: "CustomerDetailsForm",
  //components: { selectBtn },
  data: function () {
    return {
      loading: false,
      name: "",
      phoneNumber: "",
      email: "",
      address: "",
      nameRules: [
        (v) => !!v || "Name is required", // verifies name satisfies the requirement
      ],
      emailRules: [
        // verifies email address satisfies the requirement
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      phoneNumberRules: [
        //verifies phone number satisfies the requirement
        (v) => !!v || "Phone Number is required",
      ],
      addressRules: [
        //verifies phone number satisfies the requirement
        (v) => !!v || "Address is required",
      ],
    };
  },
  methods: {
    submitCustomerDetails() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.loading = true;
        let getUrl = window.location;
        let baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
        this.$store
          .dispatch("orders/createOrder", {
            product_id: this.$route.params.id,
            customer: {
              name: this.name,
              email: this.email,
              phone: this.phoneNumber,
              location: {
                address: "No. 10, Ago Palace, Lagos",
                lat: 6.5802,
                lng: 3.3593,
              },
            },
            total_items: this.$route.params.quantity,
            payment_link: `${baseUrl}checkout`,
            seller_profit: parseInt(this.$route.params.profit, 10)
          })
          .then((response) => {
            this.loading = false;
            const url = response.data.meta.payment_link;
            this.$router.push({
              path: `/inventory/${this.$route.params.id}?createLink=true&link=${encodeURIComponent(url)}`,
              params: {
                id: this.$route.params.id,
              },
            });
          });
      }
    },
  },
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