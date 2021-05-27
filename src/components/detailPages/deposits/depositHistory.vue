<template>
  <div>
    <router-link
      :to="{ name: 'deposit' }"
      style="text-decoration: none"
      class="show-mobile"
    >
      <v-icon class="">mdi-arrow-left</v-icon>
    </router-link>
    <div class="my-8  d-flex justify-end">
      <DateFilter />
    </div>
    <div class="text-center pt-15">
      <img src="@/assets/images/emptyState/empty-deposit.svg" width="40%" />
      <div class="text-body-1 mt-3">No Deposit History</div>
    </div>
  </div>
</template>

<script>
import DateFilter from "@/components/general/dateFilter.vue";

export default {
  components: {
    DateFilter,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>