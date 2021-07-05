<template>
  <div class="pb-16">
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
              <v-form @submit.prevent="SubmitPwd">
                <div class="row py-3">
                  <div class="col-sm-6 pb-0">
                    <v-text-field
                      v-model="currentPwd"
                      outlined
                      dense
                      label="Current Password"
                      required
                      type="password"
                      :rules="[pwdRules.general]"
                    ></v-text-field>
                  </div>
                  <div class="col-sm-6 pb-0">
                    <v-text-field
                      v-model="newPwd"
                      outlined
                      dense
                      label="New Password"
                      required
                      :type="show1 ? 'text' : 'password'"
                      :rules="[pwdRules.general]"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </div>
                  <div class="col-sm-6 pb-0">
                    <v-text-field
                      v-model="repeatPwd"
                      outlined
                      dense
                      label="Repeat Password"
                      required
                      :type="show ? 'text' : 'password'"
                      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[pwdRules.general, (newPwd === repeatPwd) || 'Password must match']"
                      @click:append="show = !show"
                    ></v-text-field>
                  </div>
                  <div class="col-sm-6 pb-0">
                    <v-btn
                      block
                      depressed
                      color="success"
                      :disabled="
                        newPwd < 1 ||
                        currentPwd < 1 ||
                        repeatPwd < 1 ||
                        newPwd !== repeatPwd
                      "
                      type="submit"
                      >Change</v-btn
                    >
                  </div>
                </div>
              </v-form>
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
                  <v-switch
                    v-model="switch2"
                    label="Withdrawal Activate"
                  ></v-switch>
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
      switch1: true,
      switch2: true,
      show: false,
      show1: false,
      repeatPwd: "",
      currentPwd: "",
      newPwd: "",
      pwdRules: {
        general: (v) => !!v || "this is required"
      },
      bioDetails: [{ title: "First Name", text: "Ikechukwu" }],
    };
  },
};
</script>

<style lang="scss" scoped>
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;
}
</style>