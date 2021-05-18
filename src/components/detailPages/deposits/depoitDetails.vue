<template>
  <div class="ma-4 show-mobile">
    <router-link :to="{ name: 'deposit' }" style="text-decoration: none">
      <v-icon class="">mdi-arrow-left</v-icon>
    </router-link>
    <!-- error msg -->
    <v-snackbar v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <!-- error msg -->
    <v-row class="mt-4">
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
          <span class="body-1" v-if="depositItem.status">Status</span>
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

    <v-row>
      <v-col cols="4" class="text-normal-large">
        <div class="mb-1">Account</div>
        <div class="mb-1">Amount</div>
        <div class="mb-1">Reference</div>
        <div class="mb-1">From</div>
        <div class="mb-1">To</div>
      </v-col>
      <v-col cols="4" class="text-normal-small">
        <div class="mb-1">{{ depositItem.acctNum }}</div>
        <div class="mb-1">{{ depositItem.amount }}</div>
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

    <v-divider class="mt-4"></v-divider>

    <!-- once success -->
    <div v-show="depositItem.bonus">
      <div class="float-right mt-2 body-1 font-weight-light">BONUS</div>
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
      <div class="float-right divider-header body-1 font-weight-light">
        UPLOAD SLIP
      </div>
      <div>
        <div class="pt-5">
          <span class="text-normal" style="font-size: 14px"
            >Name on the SLIP</span
          >
          <div>
            <v-icon
              v-if="failedValidationName"
              color="error"
              style="position: absolute; right: 35px"
              class="mt-1"
              >mdi-alert-circle</v-icon
            >
            <input
              v-model="clientName"
              @blur="checkIfBlurName"
              type="text"
              class="body-1 pa-1"
              style="border: solid 1px #999a9e; width: 100%"
            />
          </div>
          <div class="caption error--text" v-if="failedValidationName">
            field is required
          </div>
        </div>

        <div class="pt-3">
          <span class="text-normal" style="font-size: 14px">SLIP Number</span>
          <div>
            <v-icon
              v-if="failedValidateNumber"
              color="error"
              style="position: absolute; right: 35px"
              class="mt-1"
              >mdi-alert-circle</v-icon
            >
            <input
              @blur="checkIfBlurNumber"
              type="text"
              v-model="slipNumber"
              class="body-1 pa-1"
              style="border: solid 1px #999a9e; width: 100%"
            />
          </div>
          <div class="caption error--text" v-if="failedValidateNumber">
            field is required
          </div>
        </div>

        <div class="pt-3">
          <span class="text-normal" style="font-size: 14px">Amount</span>
          <div class="row">
            <div class="col-2 pt-2">
              <Chip
                :currencyChip="depositItem.moneySign"
                :width="'width: 30px'"
                fontSize="font-size: 20px;"
                padding="pa-3"
                class="text-center"
              />
            </div>
            <div class="col-10 pl-2">
              <v-icon
                v-if="failedValidateAmount"
                color="error"
                style="position: absolute; right: 35px"
                class="mt-1"
                >mdi-alert-circle</v-icon
              >
              <input
                @blur="checkIfBlurAmount"
                type="number"
                v-model="slipAmount"
                class="body-1 pa-1"
                style="border: solid 1px #999a9e; width: 100%"
              />
              <div class="caption error--text" v-if="failedValidateAmount">
                field is required
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-2 pt-2">
              <v-icon size="35" class="mt-1">mdi-calendar-month</v-icon>
            </div>
            <div class="col-10 pl-2">
              <v-icon
                v-if="failedValidateDate"
                color="error"
                style="position: absolute; right: 35px"
                class="mt-1"
                >mdi-alert-circle</v-icon
              >
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <input
                    @blur="checkIfBlurDate"
                    class="body-1 pa-1"
                    style="border: solid 1px #999a9e; width: 100%"
                    v-model="date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    placeholder="Select slip date"
                  />
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </div>
          </div>
          <div class="caption error--text mb-3" v-if="failedValidateDate">
            field is required
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
        </v-col>
        <v-col cols="6" class="px-0 text-center">
          <div class="mt-2 mr-3" v-if="image" style="height: 80%">
            <img :src="image" width="100%" height="100%" />
          </div>
          <div class="my-8" v-else>
            <input
              type="file"
              id="file"
              ref="myFiles"
              class="d-none"
              accept="image/*"
              @change="previewFiles"
            />
            <img
              id="fileInputButton"
              src="@/assets/images/general/upload.svg"
              onclick="document.getElementById('file').click()"
              width="30%"
            />
          </div>

          <div class="text-caption d-flex justify-center mr-5">
            <v-icon color="#9B9FFF">mdi-file-document-outline</v-icon>
            <div class="mt-1 mx-2 text-truncate" style="font-size: 100%">
              {{ files.name || "No File Selected" }}
            </div>
            <v-icon size="18" class="mt-1" @click="removeImage"
              >mdi-close-circle-outline</v-icon
            >
          </div>
        </v-col>
        <v-btn
          @click="submitUpLoads"
          v-if="image"
          block
          depressed
          class="white--text text-caption mt-5"
          color="#9B9FFF"
          >Upload</v-btn
        >

        <!-- delete upload -->
        <v-btn
          block
          depressed
          class="white--text text-caption my-3"
          color="grey"
          >Delete</v-btn
        >
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
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
export default {
  components: {
    Chip,
  },
  data() {
    return {
      depositItem: {},
      files: {},
      previews: [],
      image: "",
      snackbar: false,
      text: "",
      // validation
      failedValidationName: false,
      failedValidateNumber: false,
      failedValidateAmount: false,
      failedValidateDate: false,
      clientName: "",
      slipNumber: "",
      slipAmount: "",
      date: "",
      modal: false,

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
  },

  methods: {
    previewFiles() {
      let getFiles = this.$refs.myFiles.files[0];
      if (getFiles == undefined) {
        this.text = "undefined, you have not selected any image";
        this.snackbar = true;
      } else {
        this.files = getFiles;
      }
      if (getFiles.size > 3876690) {
        this.text = "File size exceeded. (Max. 20 MB)";
        this.snackbar = true;
        this.files = {};
        this.image = "";
      }
      this.createImage(this.files);
    },

    createImage(file) {
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;

        const img = new Image();
        img.onload = (event) => {
          let Dwidth = event.target.width;
          let Dheight = event.target.height;
          if (Dwidth < 600 || Dheight < 400) {
            this.text = "File resolution must be. (Min. 600 x 400)";
            this.snackbar = true;
            this.files = {};
            this.image = "";
          }
        };
        img.src = this.image;
      };
      reader.readAsDataURL(file);
    },

    removeImage() {
      this.files = {};
      this.image = "";
    },

    checkIfBlurName() {
      if (this.clientName < 1) {
        this.failedValidationName = true;
      } else {
        this.failedValidationName = false;
      }
    },

    checkIfBlurNumber() {
      if (this.slipNumber < 1) {
        this.failedValidateNumber = true;
      } else {
        this.failedValidateNumber = false;
      }
    },

    checkIfBlurAmount() {
      if (this.slipAmount < 1) {
        this.failedValidateAmount = true;
      } else {
        this.failedValidateAmount = false;
      }
    },

    checkIfBlurDate() {
      if (this.date == "") {
        this.failedValidateDate = true;
      } else {
        this.failedValidateDate = false;
      }
    },

    submitUpLoads() {
      if (this.clientName < 1) {
        this.failedValidationName = true;
      } else if (this.slipNumber < 1) {
        this.failedValidateNumber = true;
      } else if (this.slipAmount < 1) {
        this.failedValidateAmount = true;
      } else if (this.date == "") {
        this.failedValidateDate = true;
      } else {
        this.$router.push({ name: "deposit" });
        const addProgressCard = this.chipCard.find((item) => item.id);
        this.chipCard.splice(0, addProgressCard.id == addProgressCard.id);
        this.$store.commit("trading/setChipCard", {
          id: uuidv4(),
          time: moment(new Date()).format("LT"),
          day: new Date().toLocaleDateString(),
          msg: "message goes here",
          moneySign: "mdi-currency-ngn",
          icon: "wire.svg",
          depositType: "WIRE",
          color: "secondary_bg",
          status: "mdi-update",
          statu: "Status",
          statusText: "PROGRESS",
          routes: "depositDetails",
          amount: this.depositItem.amount,
          acctNum: this.depositItem.acctNum,
          statusColor: "secondary",
        });
      }
    },
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
.text-normal-large {
  font-family: Roboto;
  font-size: 20px;
  line-height: 23px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
}
.text-normal-small {
  font-size: 15.5px;
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

@media (max-width: 320px) {
  .text-normal {
    font-size: 14px;
  }
  .text-normal-light {
    font-size: 14px !important;
  }
  .text-normal-large {
    font-size: 15px;
  }
  .text-normal-small {
    font-size: 15.5px;
  }
}

@media (min-width: 426px) {
  .show-mobile {
    display: none;
  }
}
</style>