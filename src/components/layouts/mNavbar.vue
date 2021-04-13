<template>
  <div class="icons show-mobile">
    <v-tabs v-model="tab" align-with-title hide-slider link>
      <v-tab
        v-for="item in navbar"
        :key="item.id"
        exact-active-class="active--text"
        :to="{ name: item.routes }"
      >
        <v-icon>{{ item.icon }} </v-icon>
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  props: ["navbar"],
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style lang="scss" scoped>
$font-family: "Inter", sans-serif;
$bg-color: #252954;
$body-color: #9b9ca7;
$main-bg: #0e0e23;
$blue: #4255d4;
$white: #fff;
$orange: #fb8c00;
:root {
  --delay: 0s;
}

* {
  outline: none;
  box-sizing: border-box;
  font-family: $font-family;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.icons {
  z-index: 1;
  text-align: center;
  position: fixed;
  bottom: 0%;
  left: 1;
  right: 0;
  padding: 8% 0 8% 20%;
  background-color: $white;
  .active--text {
    color: $orange;
  }

  .text--color {
    color: $body-color;
  }

  .v-tab {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex: 0 1 auto;
    font-size: 0.875rem;
    font-weight: 500;
    justify-content: space-around;
    letter-spacing: 0.0892857143em;
    line-height: normal;
    min-width: 80px !important;
    max-width: 360px;
    outline: none;
    padding: 0px 0px;
    // margin: auto 10%;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  // .v-item-group.theme--light.v-slide-group.v-tabs-bar.v-tabs-bar--is-mobile.primary--text {
  //     color: $body-color !important;
  // }
  .v-application .primary--text {
    color: $body-color !important;
    caret-color: $body-color !important;
  }

    @media (max-width: 375px) {
    .v-tab {
      min-width: 75px !important;
    }
  }

  @media (max-width: 360px) {
    .v-tab {
      min-width: 70px !important;
    }
  }

  @media (max-width: 320px) {
    .v-tab {
      min-width: 60px !important;
    }
  }

    @media (max-width: 280px) {
    .v-tab {
      min-width: 52px !important;
    }
  }
}

@media (min-width: 426px) {
  .show-mobile {
    display: none;
  }
}
</style>