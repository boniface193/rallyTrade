<template>
  <div>
    <v-tabs
      background-color="main_bg"
      dark
      fixed-tabs
      icons
      class="rounded-lg"
      show-arrows
      v-model="tab"
    >
      <v-tabs-slider
        color="active"
        class="offset-2"
        style="width: 70%"
      ></v-tabs-slider>
      <v-tab
        v-for="item in navbar"
        :key="item.text"
        :to="{ name: item.routes }"
        class="text-capitalize"
        exact-active-class="active--text"
      >
        <!-- <v-img src="@/assets/images/dashboard.svg" max-width="22" class="mr-3 active--text"></v-img>
        {{ item.text }} -->
        <!-- <v-img :src="`@/assets/images/${item.icon}`"></v-img> -->
        <v-icon class="mx-3">{{ item.icon }}</v-icon>{{ item.text }}
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
$logo: #fb8c00;
:root {
  --delay: 0s;
}

* {
  outline: none;
  box-sizing: border-box;
  // color: $body-color;
  font-family: $font-family;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.active {
  background-color: $logo !important;
}
.active--text {
  color: $logo !important;
}
</style>