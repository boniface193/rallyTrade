<template>
  <div class="container">
    <div class="text-h5 ca my-3">Verification</div>
    <!-- <v-divider></v-divider> -->
    <v-stepper v-model="e1" class="elevation-0 my-8" outlined non-linear alt-labels>
      <v-stepper-header class="elevation-0">
        <v-stepper-step :complete="e1 > 1" step="1" color="active_link" class="px-0" > ID Type </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2" color="active_link" class="px-0">
          Personal Info
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3" color="active_link" class="px-0"> Address </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <!-- content goes here -->

          <v-btn color="active_link" dark class="float-right" @click="e1 = 2">
            Continue
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <!-- content goes here -->

          <v-btn color="active_link" dark class="float-right" @click="e1 = 3">
            Continue
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <!-- content goes here -->

          <v-btn color="active_link" dark class="float-right" @click="e1 = 1">
            Continue
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
    };
  },
};
</script>

<style>
</style>