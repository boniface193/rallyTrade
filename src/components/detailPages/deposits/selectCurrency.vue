<template>
  <div class="container">
    <div class="text-center">
      <div class="text-h5 my-8">Select Currency</div>
      <v-row class="d-flex justify-center mx-3">
        <v-col cols="6" class="d-flex justify-center"
          ><v-expand-transition>
            <v-card
              width="125"
              :dark="dark"
              :color="color"
              link
              @click="select1"
            >
              <!-- <v-card-actions> -->
              <v-icon size="70">mdi-currency-ngn</v-icon>
              <!-- </v-card-actions> -->
            </v-card>
          </v-expand-transition>
        </v-col>
        <v-col cols="6" class="d-flex justify-center"
          ><v-card width="125" link>
            <v-icon size="70">mdi-currency-usd</v-icon></v-card
          ></v-col
        >
      </v-row>
      <div class="text-h5 my-8">Select Deposit Type</div>
    </div>

    <v-expand-transition>
      <v-card>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
        >
          <v-card-text class="pb-0">
            <p class="display-1 text--primary">Origin</p>
            <p>
              late 16th century (as a noun denoting a place where alms were
              distributed): from medieval Latin eleemosynarius, from late Latin
              eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
            </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn text color="teal accent-4" @click="reveal = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reveal: false,
      dark: false,
      color: "",
    };
  },
  methods: {
    select1() {
      this.reveal = true;
      this.dark = true;
      this.color = "#fb8c00";
    },

    selec2() {
      this.reveal = true;
      this.dark = true;
      this.color = "#fb8c00";
    },
  },
};
</script>

<style lang="scss" scoped>
$orange: #fb8c00;
.active {
  background-color: $orange;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;
}
</style>