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
          You’re {{ leaderboard.length }}th on the Leaderboard!
        </div>

        <!-- <div class="leaderTitle text-center my-3">Leaderboard</div> -->
        <!-- <v-layout justify-center> -->
          <v-row class="d-flex justify-center">
            <v-col lg="10">
              <v-row class="leader-label mt-5">
                <v-col cols="2" lg="3">Rank</v-col>
                <v-col cols="8" lg="6">Name</v-col>
                <v-col cols="2" lg="3">Points</v-col>
              </v-row>

              <v-row
                class="leader-text my-2"
                v-for="items in leaderboard"
                :key="items.id"
                :class="{ active: items.active }"
              >
                <v-col cols="2" lg="3">{{ items.rank }}</v-col>
                <v-col cols="8" lg="6">
                  <div
                    class="d-flex"
                    style="cursor: pointer"
                    @click="openModal"
                  >
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
                <v-col cols="2" lg="3">{{ items.points }}</v-col>
              </v-row>
            </v-col>
          </v-row>
        <!-- </v-layout> -->
      </div>
    </v-container>
    <!-- pagination -->
    <div class="text-center elevation-8 pa-3">
      <v-pagination
        v-model="page"
        :length="5"
        circle
        small
        style="font-size: 8px"
      ></v-pagination>
    </div>
    <!-- modal -->
    <div class="mx-3">
      <Modal
        class="overlay"
        :id="leaderboard.id"
        :dialog="this.dialog"
        width="250"
      >
        <v-card class="rounded-lg">
          <v-icon
            style="cursor: pointer"
            @click.native="closeModal"
            class="float-right mr-3 mt-3"
            color="primary"
            >mdi-close</v-icon
          >
          <div class="pt-9">
            <div class="d-flex justify-center">
              <span>
                <v-img
                  src="@/assets/images/emike-larger.png"
                  height="54px"
                  width="55px"
                  class="rounded-pill"
                ></v-img>
              </span>
            </div>
            <span class="d-flex justify-center mt-2 body-text">
              Emike Lucy
            </span>
            <span class="d-flex justify-center title-text">
              Sales Representative
            </span>
            <div class="pt-3">
              <v-divider light></v-divider>
            </div>
            <v-list-item>
              <v-list-item-content class="pt-1" align="center">
                <v-list-item-title
                  ><span class="primary--text larger-text">1st</span> <br />
                  <span class="title-text">In-store</span>
                </v-list-item-title>
              </v-list-item-content>
              <v-divider vertical> </v-divider>
              <v-list-item-content class="pt-1" align="center">
                <v-list-item-title
                  ><span class="primary--text larger-text">1000</span> <br />
                  <span class="title-text">Total Points</span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <div>
              <v-divider light></v-divider>
            </div>
            <div class="d-flex justify-center mt-3 pb-5">
              <span class="primary--text larger-text">N268,000,000</span>
              <span class="title-text mx-2">in sales</span>
            </div>
          </div>
        </v-card>
      </Modal>
    </div>
  </div>
</template>

<script>
import Search from "@/components/general/Search.vue";
import Modal from "@/components/modal.vue";
export default {
  name: "orderDetails",
  components: {
    Search,
    Modal,
  },
  data() {
    return {
      dialog: false,
      Search: false,
      page: 1,
      leaderboard: [
        {
          id: "01",
          rank: "1",
          image: require("@/assets/images/emike.png"),
          name: "Emike Lucy",
          points: "1010",
        },
        {
          id: "02",
          rank: "2",
          image: require("@/assets/images/emike.png"),
          name: "Ayodeji Lanwo",
          points: "1010",
        },
        {
          id: "03",
          rank: "3",
          image: require("@/assets/images/emike.png"),
          name: "Emike Lucy 1",
          points: "1010",
        },
        {
          id: "04",
          rank: "4",
          image: require("@/assets/images/emike.png"),
          name: "Emike Lucy 2",
          points: "1010",
          active: true,
        },
        {
          id: "05",
          rank: "5",
          image: require("@/assets/images/emike.png"),
          name: "Emike Lucy 3",
          points: "13",
        },
        {
          id: "06",
          rank: "6",
          image: require("@/assets/images/emike.png"),
          name: "Emike Lucy",
          points: "101",
        },
        {
          id: "07",
          rank: "7",
          image: require("@/assets/images/laptop.png"),
          name: "Emike Lucy",
          points: "102",
        },
        {
          id: "08",
          rank: "8",
          image: require("@/assets/images/laptop.png"),
          name: "Emike Lucy",
          points: "101",
        },
        {
          id: "09",
          rank: "9",
          image: require("@/assets/images/laptop.png"),
          name: "Emike Lucy",
          points: "1010",
        },
        {
          id: "10",
          rank: "10",
          image: require("@/assets/images/laptop.png"),
          name: "Emike Lucy 10",
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
    closeModal() {
      this.dialog = false;
    },
    openModal() {
      this.dialog = true;
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
.body-text {
  color: #2b2b2b;
  font-family: "Product Sans Bold";
  font-size: 14px;
}
.title-text {
  color: #979797;
  font-family: "Product Sans Light";
  font-size: 14px;
  opacity: 0.9;
}
.larger-text {
  font-family: "Product Sans Bold";
  font-size: 14px;
  opacity: 0.9;
}
.overlay {
  filter: blur(8px);
  -webkit-filter: blur(8px);
}
</style>