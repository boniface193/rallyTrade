<template>
  <div>
    <v-chip
      :color="colors"
      class="rounded chip z-index"
      :class="addPaddingToChip"
      apppend
      small
    >
      {{ time }}
    </v-chip>
    <v-card
      class="mx-auto"
      flat
      :color="colors"
      :to="depositDetails"
      link
      :outlined="outlined"
    >
      <!-- currency badge -->
      <Badge :moneySign="moneySign" currencyColor="#9EE8FF" />
      <div class="mx-3">
        <v-row :class="padding">
          <v-col cols="3" class="text-center">
            <div class="d-flex justify-center">
              <img
                width="50%"
                height="50%"
                :src="require(`@/assets/images/${icon}`)"
              />
            </div>
            <div class="text-caption sm-text">
              <div class="sm-text">{{ depositType }}</div>
              <div class="sm-text text-smaller">{{ day }}</div>
            </div>
          </v-col>
          <v-col cols="1">
            <v-divider vertical class="new"></v-divider>
          </v-col>
          <v-col class="text-caption px-0">
            <div class="d-flex justify-space-between mr-3 sm-text">
              <div>Account</div>
              <div>Amount</div>
              <div>{{ statu }}</div>
            </div>
            <div class="d-flex justify-space-between mr-3 sm-text">
              <div>{{ acctNum }}</div>
              <div>{{ amount }}</div>
              <div class="sm-text">
                <v-icon :color="statusColor">{{ status }}</v-icon>
              </div>
            </div>
            <div class="d-flex justify-space-between">
              <div class="text-body-1 mt-3 mb-0 text-left">{{ msg }}</div>
            </div>
          </v-col>
          <div class="d-flex border-all" v-if="outlined">
            <v-btn
              depressed
              dark
              color="success"
              @click="confirmDeposit"
              small
              class="rounde-lg z-index"
              >Confirm</v-btn
            >
            <div class="px-2"></div>
            <v-btn
              depressed
              outlined
              small
              class="rounde-lg"
              @click="cancelDeposit"
              >Cancel</v-btn
            >
          </div>
        </v-row>
      </div>
    </v-card>

    <v-chip
      v-if="active"
      :color="statusColor"
      small
      class="rounded mx-16 d-flex justify-center"
    >
      Claim Bonus!
    </v-chip>
  </div>
</template>

<script>
import Badge from "@/components/general/currencyBadge.vue";
export default {
  components: {
    Badge,
  },
  props: [
    "colors",
    "time",
    "moneySign",
    "status",
    "statusColor",
    "active",
    "depositDetails",
    "icon",
    "depositType",
    "outlined",
    "msg",
    "statu",
    "padding",
    "addPaddingToChip",
    "day",
    "acctNum",
    "amount",
  ],

  methods: {
    confirmDeposit() {
      this.$emit("getDeposit");
    },
    cancelDeposit() {
      this.$emit("deleteDeposit");
    },
  },
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

.border-all {
  margin-left: 40%;
  position: absolute;
  top: 90%;
}

.v-btn--outlined {
  border: thin solid;
  background-color: #fff;
}

@media (max-width: 280px) {
  .sm-text {
    font-size: 9px !important;
  }
  .border-all {
    left: 5%;
    bottom: 10%;
  }
  .v-btn:not(.v-btn--round).v-size--small {
    height: 22px;
    min-width: 20px;
    padding: 0 12.4444444444px;
  }
  .v-btn.v-size--small {
    font-size: 0.52rem;
  }
}

@media (max-width: 320px) {
  .border-all {
    margin-left: 30%;
  }
  .text-smaller {
    font-size: 8.4px !important;
  }
}
</style>
