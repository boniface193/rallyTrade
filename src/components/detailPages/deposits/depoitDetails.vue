<template>
  <div class="ma-4 show-mobile">
    <router-link :to="{ name: 'deposit' }" style="text-decoration: none">
      <v-icon class="">mdi-arrow-left</v-icon>
    </router-link>

    <v-row class="mt-8">
      <v-col cols="6" class="px-0">
        <v-row>
          <v-col cols="6" class="pr-0 text-center">
            <img
              width="70%"
              :src="require(`@/assets/images/${depositItem.icon}`)"
            />
          </v-col>
          <v-col cols="6" class="pl-0 mt-2"
            ><div class="d-flex text-normal">
              {{ depositItem.depositType }} DEPOSIT
            </div></v-col
          >
        </v-row>
      </v-col>
      <v-col cols="6"
        ><div>
          <span class="text-body-1 font-weight-light" v-if="depositItem.status"
            >Status</span
          >
          <br />
          <span
            ><v-icon class="pb-1" :color="depositItem.statusColor">{{
              depositItem.status
            }}</v-icon>
            <span
              class="mx-2 text-normal-light"
              :class="`${depositItem.statusColor}--text`"
              >{{ depositItem.statusText }}</span
            ></span
          >
        </div></v-col
      >
    </v-row>

    <v-row class="">
      <v-col
        cols="4"
        style="font-weight: 300; font-size: 20px; line-height: 23px"
      >
        <div class="mb-1">Account</div>
        <div class="mb-1">Amount</div>
        <div class="mb-1">Reference</div>
        <div class="mb-1">From</div>
        <div class="mb-1">To</div>
      </v-col>
      <v-col cols="4" class="font-weight-bold">
        <div class="mb-1">859647</div>
        <div class="mb-1">10,000,000</div>
        <div class="mb-1">1587469</div>
        <div class="mb-1">GTB</div>
        <div class="mb-1">ZENITH</div>
      </v-col>
      <v-col cols="4">
        <div class="text-center">
          <Chip
            :currencyChip="depositItem.moneySign"
            :width="'width: 60px'"
            fontSize="font-size: 45px;"
            padding="pa-6"
          />
        </div>
      </v-col>
    </v-row>

    <v-divider class="mt-8"></v-divider>

    <!-- once success -->
    <div v-show="depositItem.bonus">
      <div class="float-right mt-2 divider-header">BONUS</div>
      <div class="text-center pt-8">
        <div class="d-flex justify-center">
          <Chip
            :currencyChip="depositItem.moneySign"
            :width="'width: 40px'"
            fontSize="font-size: 25px;"
            padding="pa-6"
            class="text-center"
          />
          <div class="mt-4 ml-2 font-weight-bold" style="font-size: 30px">
            500,000
          </div>
        </div>
        <div style="font-weight: 300; font-size: 20px; line-height: 23px">
          First Deposit Bonus
        </div>
        <v-btn
          color="success"
          class="text-capitalize mt-5"
          style="font-weight: 400; font-size: 20px; line-height: 23px"
          depressed
          >Claim Bonus!</v-btn
        >
      </div>
    </div>

    <!-- upload -->
    <div class="mt-4" v-show="depositItem.statusText == 'UPLOAD'">
      <div class="float-right divider-header">UPLOAD SLIP</div>
      <div>
        <div class="pt-3">
          <span>Name on the SLIP</span>
          <input
            type="text"
            class="text-normal pa-1"
            style="border: solid 1px #999a9e; width: 100%"
          />
        </div>

        <div class="pt-3">
          <span>SLIP Number</span>
          <input
            type="text"
            class="text-normal pa-1"
            style="border: solid 1px #999a9e; width: 100%"
          />
        </div>

        <div class="pt-3">
          <span>Amount</span>
          <div class="d-flex">
            <Chip
              :currencyChip="depositItem.moneySign"
              :width="'width: 30px'"
              fontSize="font-size: 20px;"
              padding=""
              class="text-center"
            />
            <input
              type="text"
              class="text-normal pa-1 ml-2"
              style="border: solid 1px #999a9e; width: 100%"
            />
          </div>
        </div>
      </div>

      <v-row>
        <v-col cols="6">
          <div>
            <div class="text-caption font-weight-bold">image should</div>
            <div class="error--text" style="font-size: 70%">
              - minimixed resolution 800 x 800
            </div>
            <div class="error--text" style="font-size: 70%">
              - Image should not exceed 20MB
            </div>
          </div>

          <div class="mt-2">
            <div class="text-caption font-weight-bold">
              SLIP should contain:
            </div>
            <div class="error--text" style="font-size: 70%">- your Name</div>
            <div class="error--text" style="font-size: 70%">- Amount</div>
            <div class="error--text" style="font-size: 70%">
              - Rally Account Number
            </div>
          </div>

          <div class="text-caption d-flex">
            <v-icon color="#9B9FFF">mdi-file-document-outline</v-icon>
            <div class="mt-1 mx-1" style="font-size: 70%">
              {{files.name || 'No File Selected'}}
            </div>
            <v-icon size="18" class="mt-1">mdi-close-circle-outline</v-icon>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="my-8 d-flex justify-space-around">
            <input
              type="file"
              id="file"
              ref="myFiles"
              class="d-none"
              @change="previewFiles"
            />
            <!-- <v-file-input hide-input>
              <template v-slot:prepend-icon="{ image }">
                <img :src="image" width="30%" />
              </template>
            </v-file-input> -->
            <img
            id="fileInputButton"
              src="@/assets/images/upload.svg"
              onclick="document.getElementById('file').click()"
              width="30%"
            />
            <img src="@/assets/images/camera.svg" width="30%" />
          </div>
          <v-btn
            block
            depressed
            class="white--text text-caption"
            color="#9B9FFF"
            >Upload</v-btn
          >
        </v-col>
      </v-row>
    </div>

    <div v-show="depositItem.bonus">
      <v-divider class="mt-8"></v-divider>
      <div class="mt-2 divider-header">HISTORY</div>

      <div v-for="item in history" :key="item.id">
        <div class="d-flex mt-3">
          <v-chip class="rounded mr-3 pb-0" apppend small>
            {{ item.time }}
          </v-chip>
          <div class="text-h6">{{ item.status }}</div>
        </div>
      </div>
    </div>
    <div class="py-16"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Chip from "@/components/general/currencyChip.vue";
export default {
  components: {
    Chip,
  },
  data() {
    return {
      depositItem: {},
      image: require("@/assets/images/upload.svg"),
      files: {},
      imageURl: "",
      history: [
        {
          time: "12:30",
          status: "Deposit Created",
          errorMsg: "hello",
          success: true,
        },
        {
          time: "12:35",
          status: "Deposit Created",
          errorMsg: "",
          success: true,
        },
        {
          time: "12:40",
          status: "Deposit Created",
          errorMsg: "",
          success: false,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      chipCard: "trading/getChipCard",
    }),
  },

  created() {
    const deposit = this.$store.getters["trading/getChipCard"].find(
      (item) => item.id == this.$route.params.id
    );
    this.depositItem = deposit;
    console.log(this.createImage())
  },

  methods: {
    previewFiles() {
    this.files = this.$refs.myFiles.files[0]

    let reader = new FileReader();
    console.log(reader.readAsDataURL(this.files))

    
    },

    // createImage(file){
    //   var image = new Image();
    //   var reader = new FileReader();
    //   var vm = this;

    //   reader.onload = (e) => {
    //     vm.imageURL = e.target.result;
    //   };
    //   reader.readAsDataURL(file);
    // }
// createImage(file) {
      // var image = new Image();
      // var reader = new FileReader();
      // var vm = this;

      // reader.onload = (e) => {
      //   vm.image = e.target.result;
      // };
      // reader.readAsDataURL(file);
//     },
  },
};
</script>


<style lang="scss" scoped>
$body-color: #999a9e;
$font-family: Roboto "Inter", sans-serif;

* {
  outline: none;
  box-sizing: border-box;
  color: $body-color;
  font-family: $font-family;
}
.text-normal {
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
}
.text-normal-light {
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
}
.divider-header {
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
}
@media (min-width: 426px) {
  .show-mobile {
    display: none;
  }
}
</style>