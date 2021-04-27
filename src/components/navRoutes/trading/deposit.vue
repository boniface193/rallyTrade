<template>
  <div>
    <div class="show-mobile">
      <Mobile-Header
        @click.native="selectCurrency"
        title="Deposit"
        colors="success"
        :fixed_top="true"
      />
      <div class="my-16 pt-5 mr-1">
        <div v-show="chipCard < 1" class="mt-16 text-center">
          <img src="@/assets/images/emptyState/empty-deposit.svg" width="50%" />
          <div class="text-body-1 mt-3">please make a deposit</div>
        </div>
        <div class="mt-7" v-for="item in chipCard" :key="item.id">
          <Chip-Card
            :depositDetails="{
              name: 'depositDetails',
              params: { id: item.id },
            }"
            :colors="item.outlined ? '' : item.color"
            :time="item.time"
            :day="item.day"
            :moneySign="item.moneySign"
            :status="item.outlined ? '' : item.status"
            :statu="item.statu"
            :statusColor="item.statusColor"
            :active="item.active"
            :icon="item.icon"
            :depositType="item.depositType"
            :outlined="item.outlined"
            :msg="item.msg"
            :padding="item.outlined ? 'py-3' : ''"
            :acctNum="item.acctNum"
            :amount="item.amount"
            :addPaddingToChip="item.outlined ? 'white' : ''"
            @getDeposit="submitDeposit()"
          >
          </Chip-Card>
        </div>
        <div class="py-16"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MobileHeader from "@/components/general/mobileHeader.vue";
import ChipCard from "@/components/general/chipCard.vue";
export default {
  components: {
    ChipCard,
    MobileHeader,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({ chipCard: "trading/getChipCard" }),
  },
  methods: {
    selectCurrency() {
      this.$router.push({ name: "selectCurrency" });
    },
    submitDeposit() {
      this.chipCard.shift()
      this.$store.commit("trading/setChipCard", {
        id: "deposit005",
        time: "4:30",
        day: new Date().toLocaleDateString(),
        msg: "message goes here",
        moneySign: "mdi-currency-ngn",
        icon: "wire.svg",
        depositType: "WIRE",
        color: "primary_bg",
        status: "mdi-upload",
        statu: "Status",
        statusText: "UPLOAD",
        routes: "",
        amount: "10,000,000",
        acctNum: "854715",
        date: "",
        statusColor: "primary",
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom {
  bottom: 40vh;
}
</style>

