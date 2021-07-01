<template>
  <div>
    <v-container>
        <div class="text-md-h6 text-subtitle-2">
          Status: <span>Pending</span> 
        </div>
      <div class="row my-8 justify-space-around">
        <div class="col-sm-6" v-for="item in bioDetails" :key="item.id">
          <GenCard
            class="elevation-0 mt-5"
            style="box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important"
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
export default {
  components: { GenCard },
  data() {
    return {
      bioDetails: [
        { title: "First Name", text: "Ikechukwu" },
        { title: "Last Name", text: "Dennis" },
        { title: "Email", text: "ikechukwu.boniface@rally.trade" },
        { title: "Phone Number", text: "+234 813 471 4125" },
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