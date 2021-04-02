<template>
  <div>
    <v-tabs background-color="main_bg" dark fixed-tabs icons class="rounded-lg">
      <v-tabs-slider color="active"></v-tabs-slider>
      <v-tab
        v-for="item in navbar"
        :key="item.text"
        class="text-capitalize on_hover"
      >
        <v-icon class="mx-3">{{ item.icon }}</v-icon
        >{{ item.text }}
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  props: ["navbar"],
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
  font-size: 15px;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.active {
  background-color: $logo !important;
}
</style>