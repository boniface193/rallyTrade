<template>
  <div>
    <!-- Destop View design -->
    <div>
      <div class="my-5 mx-8">
        <div class="text-h5">withdrawer</div>
        <v-row class="my-5">
          <v-col sm="4">
            <v-select
              v-model="selectBank"
              :items="items"
              item-text="text"
              label="Select your bank"
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
      </div>
    </div>
    <!-- Destop View design -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      items: {  },
      selectBank: "",
      nameRules: [(v) => !!v || "this is required"],
    }
  },
  created(){
    this.items = this.$store.getters["trading/getSelectBank"];
  }
};
</script>

<style>
</style>