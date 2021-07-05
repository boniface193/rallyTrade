<template>
  <div>
    <v-container>
      <div class="d-flex justify-end">
        <DateFilter />
      </div>
      <div class="row my-8 pb-8 ">
        <div class="col-sm-4" v-for="item in bioDetails" :key="item.id">
          <GenCard
            class="elevation-0 mt-5"
            style=" border: solid 1px grey"
          >
            <div class="text-center py-3">
              <div class="text-caption text-sm-body-2 secondary--text">
                {{ item.title }}
              </div>
              <div class="text-md-h6 text-subtitle-2">{{ item.text }}</div>
            </div>
          </GenCard>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import GenCard from "@/components/general/genCard.vue";
import DateFilter from "@/components/general/dateFilter.vue";
export default {
  components: { GenCard, DateFilter },
  data() {
    return {
      bioDetails: [
        { title: "Login:", text: "10:15am" },
        { title: "Logout", text: "4:30pm" },
        { title: "Deposit", text: "an hour ago" },
        { title: "Withdrawer", text: "6 hour ago" },
        { title: "Change Password", text: "6 hour ago" },
        { title: "Bonuses", text: "6 hour ago" },
        { title: "Internal Transfer", text: "6 hour ago" },
        { title: "Account", text: "Last Week" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;
}
</style>