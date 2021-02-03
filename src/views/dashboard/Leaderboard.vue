<template>
  <div>
    <v-container>
    <div class="mx-5">
      <div class="chOder my-9">
        <router-link :to="{ path: '/dashboard' }">
          <v-icon class="float-left">mdi-chevron-left</v-icon>
        </router-link>
        <div v-if="!Search" class="d-flex">
          <h5 class="text-center mx-auto">Leaderboard</h5>
          <v-icon style="cursor: pointer" @click="toggleSearch"
            >mdi-magnify</v-icon
          >
        </div>
        <div class="mx-10" @mouseout="toggleOnLeave">
          <Search
            placeholder="Search orders"
            @search="filterItems"
            v-if="Search"
          />
        </div>
      </div>

      <div class="lenghtOfUser text-center mt-8">
        You’re {{leaderboard.length}}th on the Leaderboard!
      </div>

      <!-- <div class="leaderTitle text-center my-3">Leaderboard</div> -->

      <v-row class="leader-label mt-5">
        <v-col cols="2">Rank</v-col>
        <v-col cols="8">Name</v-col>
        <v-col cols="2">Points</v-col>
      </v-row>

      <v-row
        class="leader-text my-2"
        v-for="items in leaderboard"
        :key="items.id"
        :class="{ active: items.active }"
      >
        <v-col cols="2">{{ items.rank }}</v-col>
        <v-col cols="8">
          <div class="d-flex">
            <span class="mr-3"
              ><v-img
                :src="items.image"
                height="28px"
                width="29px"
                class="rounded-pill"
              >
              </v-img
            ></span>

            <span>{{ items.name }}</span>
          </div>
        </v-col>
        <v-col cols="2">{{ items.points }}</v-col>
      </v-row>
    </div>
    </v-container>
    <div class="text-center elevation-8 pa-3">
      <v-pagination v-model="page" :length="5" circle small style=" font-size: 8px;"></v-pagination>
    </div>
  </div>
</template>

<script>
import Search from "@/components/general/Search.vue";
export default {
  name: "orderDetails",
  components: {
    Search,
  },
  data() {
    return {
      Search: false,
      page: 1,
      leaderboard: [
        {
          rank: "1",
          image: require("@/assets/images/emike.png"),
          name: "Emike Lucy",
          points: "1010",
        },
        {
          rank: "2",
          image: require("@/assets/images/emike.png"),
          name: "Emike Lucy",
          points: "1010",
        },
        {
          rank: "3",
          image: require("@/assets/images/emike.png"),
          name: "Emike Lucy",
          points: "1010",
        },
        {
          rank: "4",
          image: require("@/assets/images/emike.png"),
          name: "Emike Lucy",
          points: "1010",
          active: true,
        },
        {
          rank: "5",
          image: require("@/assets/images/emike.png"),
          name: "Emike Lucy",
          points: "13",
        },
        {
          rank: "6",
          image: require("@/assets/images/emike.png"),
          name: "Emike Lucy",
          points: "101",
        },
        {
          rank: "7",
          image: require("@/assets/images/laptop.png"),
          name: "Emike Lucy",
          points: "102",
        },
        {
          rank: "8",
          image: require("@/assets/images/laptop.png"),
          name: "Emike Lucy",
          points: "101",
        },
        {
          rank: "9",
          image: require("@/assets/images/laptop.png"),
          name: "Emike Lucy",
          points: "1010",
        },
        {
          rank: "10",
          image: require("@/assets/images/laptop.png"),
          name: "Emike Lucy",
          points: "1010",
        },
      ],
    };
  },
  methods: {
    toggleSearch() {
      this.Search = true;
    },
    toggleOnLeave() {
      this.Search = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.chOder {
  color: #2b2b2b;
  font-size: 20px;
  margin: 30px 0 20px 0px;
  font-family: "Product Sans Medium";
}
.w-25 {
  width: 25% !important;
}
.lenghtOfUser {
  color: #979797;
  font-family: "Product Sans";
  font-size: 16px;
}
.leaderTitle {
  color: #5064cc;
  font-family: "Product Sans";
  font-size: 24px;
}
.leader-text {
  font-family: "Product Sans Light";
  color: #2b2b2b;
  font-size: 14px;
}
.leader-label {
  font-family: "Product Sans Light";
  color: #979797;
  font-size: 14px;
  opacity: 0.5;
}
.active {
  border-left: 4px solid #5064cc;
  color: #5064cc;
  font-family: "Product Sans Medium";
  font-size: 14px;
  background-color: #5065cc1c;
 
}
</style>