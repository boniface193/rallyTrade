<template>
  <div>
    <!-- user profile -->
    <v-row class="px-4">
      <v-col class="col-12 col-md-5 pt-9 text-center">
        <div class="d-flex align-center justify-center" style="position: relative">
          <router-link :to="{ name: 'ProfilePage' }" style="text-decoration: none">
            <span class="back-btn">
              <v-icon style="font-size: 25px">mdi-chevron-left</v-icon>
            </span>
          </router-link>
          <h3 class="align-self-center">Edit Profile</h3>
        </div>
        <div class="profile-img my-5">
          <v-img src="@/assets/images/user-profile.svg"></v-img>
        </div>
        <h4>Ayotunde Lanwo</h4>
        <a class="primary--text" style="font-size:14px"
          >Change profile picture</a
        >
      </v-col>

      <!-- user credential section -->
      <v-col
        class="col-12 col-md-7 pl-md-7 pr-md-10 pt-9 pb-16 px-4"
        style="border-left: 1px solid #f1edec"
      >
        <!-- full name field -->
        <div class="mb-5 settings-input">
          <p class="mb-1">Name</p>
          <v-text-field
            class="input mt-0"
            v-model="computedInfo.currentFullName"
            :rules="inputRules"
            type="name"
            color="primary"
            :disabled="editAdminName == false"
            required
          >
          </v-text-field>
          <!-- edit btn -->
          <span
            class="edit-btn"
            v-show="editAdminName == false"
            @click="editAdminName = true"
            >Edit</span
          >
          <!-- done btn -->
          <span
            class="edit-btn"
            v-show="editAdminName && !nameLoader"
            @click="editInfo('admin_name')"
            >Done</span
          >
          <!-- loader -->
          <span class="edit-btn" v-show="nameLoader == true">
            <v-progress-circular
              indeterminate
              color="primary"
              :size="20"
            ></v-progress-circular>
          </span>
        </div>

        <!-- phone number field -->
        <div class="mb-5 settings-input">
          <p class="mb-1">Phone Number</p>
          <v-text-field
            class="input mt-0"
            :rules="inputRules"
            v-model="computedInfo.currentPhoneNum"
            type="tel"
            color="primary"
            :disabled="editPhoneNum == false"
            required
          >
          </v-text-field>
          <!-- edit btn -->
          <span
            class="edit-btn"
            v-show="editPhoneNum == false"
            @click="editPhoneNum = true"
            >Edit</span
          >
          <!-- done btn -->
          <span
            class="edit-btn"
            v-show="editPhoneNum && !phoneNumLoader"
            @click="editInfo('phonenum')"
            >Done</span
          >
          <!-- loader -->
          <span class="edit-btn" v-show="phoneNumLoader == true">
            <v-progress-circular
              indeterminate
              color="primary"
              :size="20"
            ></v-progress-circular>
          </span>
        </div>

        <!-- Address field -->
        <div class="mb-5 settings-input">
          <p class="mb-1">Address</p>
          <v-text-field
            class="input mt-0"
            :rules="inputRules"
            type="address"
            color="primary"
            v-model="computedInfo.currentAddress"
            :disabled="editAddress == false"
            required
          >
          </v-text-field>
          <!-- edit btn -->
          <span
            class="edit-btn"
            v-show="editAddress == false"
            @click="editAddress = true"
            >Edit</span
          >
          <!-- done btn -->
          <span
            class="edit-btn"
            v-show="editAddress && !phoneNumLoader"
            @click="editInfo('editAddress')"
            >Done</span
          >
          <!-- loader -->
          <span class="edit-btn" v-show="addressLoader == true">
            <v-progress-circular
              indeterminate
              color="primary"
              :size="20"
            ></v-progress-circular>
          </span>
        </div>
      </v-col>
    </v-row>

    <!-- loader -->
    <div class="loader-body text-center pt-10" v-show="loader">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
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
import modal from "@/components/modal.vue";
//import successImage from "@/assets/img/success-img.svg";
//import failedImage from "@/assets/img/failed-img.svg";
//import { mapGetters } from "vuex";
export default {
  name: "userDetails",
  components: { modal },
  data: function () {
    return {
      statusImage: null,
      dialog: false,
      dialogMessage: "",
      editAdminName: false,
      editPhoneNum: false,
      editAddress: false,
      phoneNumLoader: false,
      nameLoader: false,
      addressLoader: false,
      inputRules: [(v) => !!v || "This field is required"],
      loader: false,
    };
  },
  computed: {
    // ...mapGetters({
    //   loader: "settings/loader",
    // }),
    computedInfo() {
      // gets the values of user information
      //let userInfo = this.$store.getters["settings/getUserProfile"];
      let fullName = "Abdulazeez Abdulazeez"; //userInfo.name;
      let phoneNum = "09013289338"; //userInfo.phone_number;
      let currentFullName = "Abdulazeez Abdulazeez"; //userInfo.name;
      let currentPhoneNum = "09013289338"; //userInfo.phone_number;
      let currentAddress = "22 Abubakar Way, Abuja";

      return {
        fullName: fullName,
        phoneNum: phoneNum,
        currentFullName: currentFullName,
        currentPhoneNum: currentPhoneNum,
        currentAddress: currentAddress,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .v-image {
    width: 100%;
    height: 100%;
  }
}
.status-img {
  width: 140px;
  .v-image {
    width: 100%;
  }
}
.store-width {
  width: 50%;
}
.settings-input {
  position: relative;
  .edit-btn {
    position: absolute;
    bottom: 25px;
    right: 0;
    cursor: pointer;
    color: #5064cc;
    background: white;
    padding: 5px 0px 0px 5px;
  }
}
.back-btn{
    position: absolute;
    left: 0px;
    top:0
}
@media (max-width: 950px) {
  .store-width {
    width: 100%;
  }
}
</style>