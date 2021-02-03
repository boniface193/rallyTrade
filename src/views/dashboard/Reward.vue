<template>
  <v-container>
    <div class="mx-5">
      <div class="chOder my-9">
        <router-link :to="{ path: '/dashboard' }">
          <v-icon class="float-left">mdi-chevron-left</v-icon>
        </router-link>
        <h5 class="text-center mx-auto">Rewards</h5>
      </div>

      <!-- card -->
      <div class="wrapper my-8">
        <div class="cc visa">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="295" height="87">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,192L40,176C80,160,160,128,240,112C320,96,400,96,480,117.3C560,139,640,181,720,208C800,235,880,245,960,261.3C1040,277,1120,299,1200,282.7C1280,267,1360,213,1400,186.7L1440"
            ></path>
          </svg> -->
          <svg width="295" height="87">
            <path d="M 0 0 C 50 50 250 0 300 87"></path>
          </svg>
          <div class="container">
            <div class="type">Reward Debit Balance</div>
            <div class="circuit">
              <i class="fab fa-cc-visa fa-2x"></i>
            </div>
          </div>
          <div class="holder">
            <span class="name">2095 Points</span>
            <span class="number">Ayotunde Lanwo</span>
          </div>
        </div>
      </div>

      <v-row>
        <v-col  cols="12" lg="4" v-for="items in salesHistory" :key="items.id">
          <v-card outlined class="rounded-lg py-3 px-8">
            <div class="order-item-font mt-1">
              Status:
              <span class="order-no-grey mx-1"> {{ items.payment }}</span>
            </div>
            <div class="order-item-font mt-1">
              Amount:
              <span class="order-no-grey mx-1">N{{ items.price }}</span>
            </div>
            <div class="order-item-font mt-2">
              Description:
              <span class="order-no-grey mx-1"> {{ items.itemName }} </span>
            </div>
            <div class="order-item-font mt-1">
              Date:
              <span class="order-no-grey mx-1"
                >{{ items.date }} {{ items.time }}</span
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "orderDetails",
  components: {},
  data() {
    return {
      salesHistory: [
        {
          itemName: "Infinix Hot 10",
          date: "5 Jul 2020",
          time: "8:58AM",
          customers_name: "Tony Nwachukwu",
          payment: "Paid",
          price: "5000.00",
        },
        {
          itemName: "Infinix Hot 10",
          date: "5 Jul 2020",
          time: "8:58AM",
          customers_name: "Tony Nwachukwu",
          payment: "Paid",
          price: "5000.00",
        },
        {
          itemName: "Infinix Hot 10",
          date: "5 Jul 2020",
          time: "8:58AM",
          payment: "Paid",
          price: "5000.00",
        },
        {
          itemName: "Infinix Hot 10",
          date: "5 Jul 2020",
          time: "8:58AM",
          payment: "Paid",
          price: "5000.00",
        },
      ],
    };
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

.wrapper {
  width: 100%;
  // height: 100vh;
  display: flex;
  // align-items: center;
  // justify-content: space-around;

  .cc {
    position: relative;
    font-family: "Maven Pro", sans-serif;
    font-size: 16px;
    color: white;
    width: 295px;
    height: 174px;
    border-radius: 16px;

    &.visa {
      background-image: linear-gradient(to top right, #5064cc, #09229f);
    }

    &.mastercard {
      background-image: linear-gradient(to top right, #843e3d, #040b2e);
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 16px;
      background-image: linear-gradient(to top, transparent, #4e5bc733);
      opacity: 100%;
    }

    svg {
      position: absolute;
      top: 40px;
      width: 100%;

      path {
        fill: transparent;
        stroke: #52f1ec;
        stroke-width: 1%;
        stroke-linecap: round;
      }
    }

    .container {
      position: absolute;
      top: 25px;
      left: 25px;
      right: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .type{
      font-size: 12px;
      color: #FFFFFF;
      font-family: "Product Sans";
    }

    .holder {
      position: absolute;
      bottom: 25px;
      left: 25px;

      span {
        display: block;

        &.name {
          font-family: "Product Sans Medium";
          font-size: 18px;
          color: #FFFFFF;
        }

        &.number {
          color: #FFFFFF;
          font-size: 14px;
          font-family: "Product Sans";
        }
      }
    }
  }
}
</style>