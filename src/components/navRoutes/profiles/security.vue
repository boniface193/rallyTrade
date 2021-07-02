<template>
  <div>
    <v-container>
      <div class="row">
        <div
          class="col-sm-10 offset-sm-1"
          v-for="item in bioDetails"
          :key="item.id"
        >
          <GenCard
            class="elevation-0 mt-5"
            style="box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important"
          >
            <GenCard
              class="elevation-0 pa-2 text-caption text-sm-body-2 rounded-b-0"
              color="active_link white--text"
            >
              Change Password
            </GenCard>
            <div class="container">
              <div class="row py-3">
                <div class="col-sm-6 pb-0">
                  <v-text-field
                    outlined
                    dense
                    label="Current Password"
                    required
                    type="password"
                  ></v-text-field>
                </div>
                <div class="col-sm-6 pb-0">
                  <v-text-field
                    outlined
                    dense
                    label="New Password"
                    required
                    type="password"
                  ></v-text-field>
                </div>
                <div class="col-sm-6 pb-0">
                  <v-text-field
                    outlined
                    dense
                    label="Repeat Password"
                    required
                    type="password"
                  ></v-text-field>
                </div>
                <div class="col-sm-6 pb-0">
                  <v-btn block depressed>Change</v-btn>
                </div>
              </div>
            </div>
          </GenCard>
        </div>
      </div>

      <div class="row">
        <div
          class="col-sm-10 offset-sm-1"
          v-for="item in bioDetails"
          :key="item.id"
        >
          <GenCard
            class="elevation-0 mt-5"
            style="box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important"
          >
            <GenCard
              class="elevation-0 pa-2 text-caption text-sm-body-2 rounded-b-0"
              color="active_link white--text"
            >
              2FA
            </GenCard>
            <div class="container">
              <div class="row py-3">
                <div class="col-sm-6">
                  <v-switch v-model="switch1" label="Login Activate"></v-switch>
                </div>
                <div class="col-sm-6">
                  <v-switch v-model="switch1" label="Withdrawal Activate"></v-switch>
                </div>
              </div>
            </div>
          </GenCard>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import GenCard from "@/components/general/genCard.vue";
export default {
  components: { GenCard },
  data() {
    return {
      swaitch1: true,
      bioDetails: [
        { title: "First Name", text: "Ikechukwu" },
        // { title: "Last Name", text: "Dennis" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;
}
</style>