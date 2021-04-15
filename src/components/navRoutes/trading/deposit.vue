<template>
  <div>
    <Mobile-Header @click.native="selectCurrency" />
    <div class="my-16 pt-5 mr-1">
      <div class="mt-7" v-for="item in chipCard" :key="item.id">
        <Chip-Card
          :depositDetails="{ name: 'depositDetails', params: { id: item.id } }"
          :colors="item.outlined ? '' : item.color"
          :chip="item.chip"
          :moneySign="item.moneySign"
          :status="item.outlined ? '' : item.status"
          :statu="item.statu"
          :statusColor="item.statusColor"
          :active="item.active"
          :icon="item.icon"
          :depositType="item.depositType"
          :outlined="item.outlined"
          :msg="item.msg"
        >
        </Chip-Card>
      </div>
      <div class="py-16"></div>
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
  computed: {
    ...mapGetters({ chipCard: "trading/getChipCard" }),
  },
  methods: {
    selectCurrency() {
      this.$router.push({name: "selectCurrency"});
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom {
  bottom: 40vh;
}
</style>

