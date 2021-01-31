<template>
  <div class="profilePage-container pa-3">
    <h2>Settings</h2>

    <div class="profile-section pt-3">
      <div
        class="d-flex justify-space-between py-3"
        style="border-bottom: 1px solid #979797"
      >
        <div class="profile-body">
          <div class="profile-image">
            <img src="@/assets/images/user-profile.svg" alt="" />
          </div>
          <div>
            <h4>Ayotunde Lanwo</h4>

            <router-link
              :to="{ name: 'Profile' }"
              style="text-decoration: none"
            >
              <p style="font-size: 14px; color: #979797">Edit Profile</p>
            </router-link>
          </div>
        </div>
        <v-icon color="#979797">mdi-chevron-right</v-icon>
      </div>
      <!-- privacy section -->
      <div class="privacy-body py-5">
        <div class="d-flex align-center">
          <div class="logo">
            <img src="@/assets/images/privacy-logo.svg" alt="" />
          </div>
          <router-link :to="{ name: 'Privacy' }" style="text-decoration: none">
            <p class="mb-0 ash-color">Privacy & Security</p>
          </router-link>
        </div>
        <v-icon color="#979797">mdi-chevron-right</v-icon>
      </div>
      <!-- bank section -->
      <div class="privacy-body py-5">
        <div class="d-flex align-center">
          <div class="logo">
            <img src="@/assets/images/privacy-logo.svg" alt="" />
          </div>
          <router-link
            :to="{ name: 'BankAccount' }"
            style="text-decoration: none"
          >
            <p class="mb-0 ash-color">Bank Accounts</p>
          </router-link>
        </div>

        <v-icon color="#979797">mdi-chevron-right</v-icon>
      </div>
      <!-- logout section -->
      <div class="d-flex align-center py-5">
        <div class="logout-logo">
          <img src="@/assets/images/log-out.svg" alt="" />
        </div>
        <p class="mb-0 error--text">Log Out</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfilePage",
};
</script>
<style lang="scss" scoped>
.profilePage-container {
  .profile-section {
    padding: 10px;
    .profile-body {
      display: flex;
      align-items: center;
      .profile-image {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 15px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .privacy-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #979797;
    .logo {
      margin-right: 20px;
      display: flex;
      align-items: center;
    }
  }
  .logout-logo {
    margin-right: 20px;
    display: flex;
    align-items: center;
  }
  .ash-color {
    color: #979797;
  }
}
</style>