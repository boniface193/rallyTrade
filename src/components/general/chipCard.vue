<template>
  <div class="show-mobile">
    <v-chip :color="colors" class="rounded chip z-index mt-5" apppend small>
      {{ chip }}
    </v-chip>
    <!-- <v-chip small class="rounded d-flex justify-center mx-16">
      Claim Bonus
    </v-chip> -->
    <v-card class="mx-auto" flat :color="colors">
      <v-badge color="#9EE8FF" avatar overlap class="float-right z-index">
        <template v-slot:badge>
          <div class="text-center my-1 white--text">{{ moneySign }}</div>
        </template>
      </v-badge>
      <div class="mx-3">
        <v-row class="pt-4">
          <v-col cols="3" class="text-center">
            <div class="d-flex justify-center">
              <v-img width="40.43px" src="@/assets/images/wire.svg"></v-img>
            </div>
            <div class="text-caption">
              <div>WIRE</div>
              <div>15.04.21</div>
            </div>
          </v-col>
          <v-col cols="1" class="pt-0">
            <v-divider vertical class="new"></v-divider>
          </v-col>
          <v-col cols="8" class="text-caption px-0">
            <div class="d-flex justify-space-between mr-3">
              <div>Account</div>
              <div>Amount</div>
              <div>Status</div>
            </div>
            <div class="d-flex justify-space-between mr-3">
              <div>854715</div>
              <div>10,000,000</div>
              <div>
                <v-icon :color="statusColor">{{status}}</v-icon>
              </div>
            </div>
            <div class="text-body-1 mt-5 mb-0 text-left">message goes here</div>

            <!-- <v-row>
              <v-col cols="4"> Account </v-col>
              <v-col cols="4"> Amount </v-col>
              <v-col cols="4"> Status </v-col>
            </v-row>
            <v-row>
              <v-col cols="4"> 854715 </v-col>
              <v-col cols="4"> 10,000,000 </v-col>
              <v-col cols="4"> <v-icon>mdi-check-circle-outline</v-icon> </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="text-body-1"> message goes here </v-col>
            </v-row> -->
          </v-col>
        </v-row>
      </div>
    </v-card>
    <v-chip v-if="active" :color="statusColor" small class="rounded mx-16 d-flex justify-center" >
      Claim Bonus!
    </v-chip>
    <!-- <v-chip :color="colors" class="rounded mx-5 icon_color" style="bottom: 23vh; position: relative">
      {{ chip }}
    </v-chip> -->
  </div>
</template>

<script>
export default {
  props: ["colors", "chip", "moneySign", "status", "statusColor", "active"],
};
</script>

<style lang="scss" scoped>
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

.z-index {
  z-index: 1;
}

.chip {
  left: 2%;
  font-size: 10px !important;
  color: $body-color !important;
}

.icon_color {
  color: $body-color !important;
}

@media (min-width: 426px) {
  .show-mobile {
    display: none;
  }
}
</style>
