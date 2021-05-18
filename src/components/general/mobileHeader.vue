<template>
  <div>
    <v-app-bar
      :fixed="fixed_top"
      color="white"
      height="100"
      class="elevation-0"
      
    >
      <v-app-bar
        :color="colors"
        dark
        fixed
        height="80"
        class="d-flex justify-center elevation-0 ma-3"
      >
        <v-toolbar-title class="text-center">{{ title }}</v-toolbar-title>
      </v-app-bar>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: ["title", "colors", "fixed_top"],
};
</script>
<style lang="scss" scoped>
</style>