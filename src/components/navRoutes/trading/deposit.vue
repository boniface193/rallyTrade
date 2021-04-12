<template>
  <div>
    <Mobile-Header />
    <div class="mb-5" v-for="item in chipCard" :key="item.id">
      <Chip-Card
        :colors="item.color"
        :chip="item.chip"
        :moneySign="item.moneySign"
        :status="item.status"
        :statusColor="item.statusColor"
        :active="item.active"
      >
      </Chip-Card>
    </div>
    <div class="py-16"></div>
  </div>
</template>

<script>
import MobileHeader from "@/components/general/mobileHeader.vue";
import ChipCard from "@/components/general/chipCard.vue";
export default {
  components: {
    ChipCard,
    MobileHeader,
  },
  data() {
    return {
      chipCard: [
        {
          chip: "4:30",
          time: "",
          moneySign: "₦",
          color: "success_bg",
          status: "mdi-check-circle-outline",
          statusColor: "success",
          active: true,
        },
        {
          chip: "4:30",
          time: "",
          moneySign: "₦",
          color: "error_bg",
          status: "mdi-close-circle-outline",
          statusColor: "error",
        },
        {
          chip: "4:30",
          time: "",
          moneySign: "₦",
          color: "secondary_bg",
          status: "mdi-update",
          statusColor: "secondary",
        },
        {
          chip: "4:30",
          time: "",
          moneySign: "₦",
          color: "primary_bg",
          status: "mdi-upload",
          statusColor: "primary",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bottom {
  bottom: 40vh;
}
</style>

