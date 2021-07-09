<template>
  <div>
    <!-- Destop View design -->
    <div>
      <div class="my-5 mx-8">
        <div class="text-h5">withdrawer</div>
        <v-row class="my-5">
          <v-col sm="4">
            <v-select
              v-model="selectAcct"
              :items="selectAccount"
              item-text="text"
              label="Select your Account"
              dense
              outlined
              class="text-caption pa-0"
              :rules="nameRules"
              @change="selectAcctItem"
            >
              <template v-slot:selection="{ item }">
                <img :src="item.icon" width="20px" />
                <span class="ml-1">{{ item.text }}</span>
              </template>

              <template v-slot:item="{ item }">
                <img :src="item.icon" width="20px" class="mr-2" />
                <span class="text-caption">{{ item.text }}</span>
              </template>
            </v-select>
          </v-col>
        </v-row>
      </div>
      <div class="row" v-if="isAccountSelected">
        <div class="col-sm-4" v-for="item in bioDetails" :key="item.id">
          <GenCard
            class="elevation-0 mt-5"
            style="border: solid 1px #eeeeee"
          >
            <div class="py-3 text-center">
              <div class="px-3">
                <div class="mb-4">
                  <v-icon size="40">{{ item.icon }}</v-icon>
                </div>
                <div class="text-md-h6 text-subtitle-2 mr-4">
                  {{ item.title }}:
                </div>
                <span class="caption">{{ item.hint }}</span>
              </div>
            </div>
          </GenCard>
        </div>
      </div>

      <v-row class="my-5" v-if="isAccountSelected">
        <v-col sm="4">
          <v-select
            v-model="selectBank"
            :items="selectBankAcc"
            item-text="text"
            label="Select your Bank"
            dense
            outlined
            class="text-caption pa-0"
            :rules="nameRules"
          >
            <template v-slot:selection="{ item }">
              <img :src="item.icon" width="20px" />
              <span class="ml-1">{{ item.text }}</span>
            </template>

            <template v-slot:item="{ item }">
              <img :src="item.icon" width="20px" class="mr-2" />
              <span class="text-caption">{{ item.text }}</span>
            </template>
          </v-select>
        </v-col>
      </v-row>
      <!-- empty State -->
      <!-- <div class="text-center my-16">
      <img src="@/assets/images/emptyState/bank_empty.svg" width="50%" alt="" />
      <p class="text-sm-h5 mt-5">Please Select an Account</p>
    </div> -->
    </div>
    <!-- Destop View design -->
  </div>
</template>

<script>
import GenCard from "@/components/general/genCard.vue";
export default {
  components: { GenCard },
  data() {
    return {
      selectAccount: [],
      selectBankAcc: [],
      selectAcc: "",
      selectAcct: "",
      isAccountSelected: false,
      nameRules: [(v) => !!v || "this is required"],
      bioDetails: [
        { title: "Balance", text: "", icon: "mdi-scale-balance" },
        { title: "Credit", text: "", icon: "mdi-credit-card" },
        { title: "Equity", text: "", icon: "mdi-approximately-equal" },
        { title: "Margin", text: "", icon: "mdi-margin" },
        {
          title: "Free Margin",
          hint: "Available Margin For Withdrawal",
          text: "",
        },
      ],
    };
  },
  created() {
    this.selectAccount = this.$store.getters["trading/getAccount"];
    this.selectBankAcc = this.$store.getters["trading/getSelectBank"];
  },

  methods: {
    selectAcctItem(){
      this.isAccountSelected = true

    }
  }
};
</script>

<style>
</style>