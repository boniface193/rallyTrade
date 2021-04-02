<template>
  <div class="icons show-mobile">
    <v-row class="text-center">
      <v-col cols="3" v-for="item in navbar" :key="item.id"
        ><v-icon color="success" size="30">{{ item.icon }} <br /> </v-icon>
        <div class="text-cap">{{ item.text }}</div></v-col
      >
    </v-row>
  </div>
</template>

<script>
export default {
  props: ['navbar'],
  data() {
    return {
      firstIcon: [
        { icon: "mdi-account-cash", routes: "", text: "Account Details" },
        { icon: "mdi-drag", routes: "", text: "Upcoming Contests" },
        { icon: "mdi-drag-variant", routes: "", text: "Active Contest" },
        { icon: "mdi-google-analytics", routes: "", text: "Stats" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap");

$font-family: "Inter", sans-serif;
$bg-color: #252954;
$body-color: #9b9ca7;
$main-bg: #0e0e23;
$logo: #4255d4;
:root {
  --delay: 0s;
}

* {
  outline: none;
  box-sizing: border-box;
  color: $body-color;
  font-family: $font-family;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.icons {
  z-index: 1;
  position: fixed;
  bottom: 1%;
  margin: 0 10px;
  .text-cap {
    color: #fff !important;
    font-size: 0.7rem;
  }
}

@media (min-width: 426px) {
  .show-mobile {
    display: none;
  }
}
</style>