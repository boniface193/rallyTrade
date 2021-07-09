<template>
  <div>
    <v-container>
      <div class="d-flex justify-end">
        <DateFilter />
      </div>
      <div class="row my-8 pb-8">
        <div class="col-sm-6" v-for="item in bioDetails" :key="item.id">
          <GenCard class="elevation-0" style="border: solid 1px #eeeeee">
            <div class="px-3 py-3 show-mobile">
              <div class="row text-center">
                <div class="col-4">
                  <span class="text-md-h6 text-subtitle-2">{{
                    item.date
                  }}</span>
                </div>
                <div class="col-4">
                  <span class="text-md-h6 text-subtitle-2">{{
                    item.time
                  }}</span>
                </div>
                <div class="col-4">
                  <span class="text-caption text-sm-body-2 secondary--text"
                    >{{ item.title }}
                  </span>
                </div>
              </div>
            </div>

            <div class="px-3 py-3 hide-desktop">
              <span class="text-caption text-sm-body-2 secondary--text mr-4"
                >{{ item.title }}:
              </span>
              <div class="row text-center">
                <div class="col-6">
                  <div>Time</div>
                  <span class="text-md-h6 text-subtitle-2">{{
                    item.time
                  }}</span>
                </div>
                <div class="col-6">
                  <div>Date</div>
                  <span class="text-md-h6 text-subtitle-2">{{
                    item.date
                  }}</span>
                </div>
              </div>
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
        { title: "Login", time: "10:15am", date: "5/6/2021" },
        { title: "Logout", time: "10:15am", date: "5/6/2021" },
        { title: "Deposit", time: "10:15am", date: "5/6/2021" },
        { title: "Withdrawer", time: "10:15am", date: "5/6/2021" },
        { title: "Change Password", time: "10:15am", date: "5/6/2021" },
        { title: "Bonuses", time: "10:15am", date: "5/6/2021" },
        { title: "Internal Transfer", time: "10:15am", date: "5/6/2021" },
        { title: "Account", time: "10:15am", date: "5/6/2021" },
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