<template>
  <!-- error msg -->
  <v-snackbar v-model="snackbar">
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <!-- error msg -->
</template>

<script>
export default {
  props: ["text"],

  data() {
    return {
    };
  },

  methods: {
    
  }
};
</script>

<style>
</style>