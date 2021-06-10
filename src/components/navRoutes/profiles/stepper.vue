<template>
  <div class="container">
    <div class="text-h5 my-3">Verification</div>
    <!-- <v-divider></v-divider> -->
    <v-stepper
      v-model="e1"
      class="elevation-0 my-8"
      outlined
      non-linear
      alt-labels
      color="primary"
    >
      <v-stepper-header class="elevation-0">
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
          color="active_link"
          class="px-0"
        >
          Personal
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
          :complete="e1 > 2"
          step="2"
          color="active_link"
          class="px-0"
        >
          Identification
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3" color="active_link" class="px-0">
          Banking Details
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <!-- content goes here -->
          <v-layout row wrap class="mt-3 mx-2">
            <v-flex class="mx-1" xs="6"
              ><v-text-field
                class="text-caption"
                outlined
                dense
                v-model="fname"
                type="text"
                label="First Name"
                required
              ></v-text-field
            ></v-flex>
            <v-flex class="mx-1" xs="6"
              ><v-text-field
                outlined
                dense
                v-model="lname"
                label="Last Name"
                required
              ></v-text-field
            ></v-flex>
            <v-flex class="mx-1" xs="6"
              ><v-select
                outlined
                dense
                :items="gender"
                item-text="sex"
                label="Gender"
              ></v-select
            ></v-flex>
            <v-flex class="mx-1" xs="6"
              ><v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <input
                    class="body-1 rounded pa-2 text-truncate"
                    style="
                      border: solid 1px #999a9e;
                      width: 100%;
                      max-width: 100%;
                    "
                    v-model="date"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    placeholder="Date of birth"
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
              </v-dialog></v-flex
            >
          </v-layout>
          <!-- <div class="d-flex pa-3"></div> -->

          <div :class="add_float_right">
            <v-btn
              color="active_link"
              dark
              depressed
              class="mt-8"
              :block="block"
              @click="e1 = 2"
            >
              Continue
            </v-btn>
          </div>
        </v-stepper-content>

        <v-stepper-content step="2">
          <!-- content goes here -->

          <div class="container">
            <div class="text-body-1 main_bg--text my-8">Select ID Type</div>

            <v-row>
              <v-col md="4" sm="12" cols="">
                <v-select
                  outlined
                  dense
                  :items="identification"
                  item-text="idType"
                  label="Identification"
                  @change="selectID(item)"
                ></v-select>
              </v-col>
              <v-col md="8" sm="12" cols="">
                <v-row>
                  <v-col lg="4" md="4" sm="4" cols="">
                    <v-dialog
                      ref="dialog"
                      v-model="modal"
                      :return-value.sync="date"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <input
                          class="body-1 rounded pa-2 text-truncate"
                          style="
                            border: solid 1px #999a9e;
                            width: 100%;
                            max-width: 100%;
                          "
                          v-model="date"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          placeholder="Date of Issue"
                        />
                      </template>
                      <v-date-picker v-model="date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.dialog.save(date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>

                  <v-col lg="4" md="4" sm="4" cols="">
                    <v-dialog
                      ref="dialog"
                      v-model="modal"
                      :return-value.sync="date"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <input
                          class="body-1 rounded pa-2 text-truncate"
                          style="
                            border: solid 1px #999a9e;
                            width: 100%;
                            max-width: 100%;
                          "
                          v-model="date"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          placeholder="Expired Date"
                        />
                      </template>
                      <v-date-picker v-model="date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.dialog.save(date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>

                  <v-col lg="4" md="4" sm="4" cols="">
                    <v-text-field
                      class="text-caption"
                      outlined
                      dense
                      v-model="idNumber"
                      type="text"
                      label="ID Number"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col lg="4" md="4" sm="4" cols="">
                    <v-file-input
                      outlined
                      dense
                      accept="image/png, image/jpeg, image/bmp"
                      prepend-icon="mdi-camera"
                      label="Upload Front"
                    ></v-file-input>
                  </v-col>
                  <v-col lg="4" md="4" sm="4" cols="">
                    <v-file-input
                      dense
                      outlined
                      accept="image/png, image/jpeg, image/bmp"
                      prepend-icon="mdi-camera"
                      label="Upload Back"
                    ></v-file-input>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>

          <div :class="add_float_right">
            <v-btn color="secondary" dark depressed :block="block">
              Cancel
            </v-btn>
            <v-btn
              color="primary"
              dark
              depressed
              :class="add_my_3"
              :block="block"
              @click="e1 = 1"
            >
              Back
            </v-btn>
            <v-btn
              color="active_link"
              dark
              depressed
              :block="block"
              @click="e1 = 3"
            >
              Continue
            </v-btn>
          </div>
        </v-stepper-content>

        <v-stepper-content step="3">
          <!-- content goes here -->

          <v-layout row wrap class="mt-3 mx-2">
            
            <v-flex class="mx-1" xs="6"
              ><v-text-field
                outlined
                dense
                v-model="lname"
                label="Cient Name"
                required
              ></v-text-field
            ></v-flex>
            <v-flex class="mx-1" xs="6"
              ><v-select
                :items="items"
                item-text="text"
                label="Select your bank"
                dense
                outlined
                class="text-caption pa-0"
                @change="sectedBank"
              >
                <template v-slot:selection="{ item }">
                  <img :src="item.icon" width="20px" />
                  <span class="ml-1">{{ item.text }}</span>
                </template>

                <template v-slot:item="{ item }">
                  <img :src="item.icon" width="20px" class="mr-2" />
                  <span class="text-caption">{{ item.text }}</span>
                </template>
              </v-select></v-flex
            >

            <v-flex class="mx-1" xs="6">
              <v-text-field
                outlined
                dense
                label="10 Digit NUBAN Account Number"
                required
              ></v-text-field>
            </v-flex>

            <v-flex class="mx-1" xs="6"
              ><v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <input
                    class="body-1 rounded pa-2 text-truncate"
                    style="
                      border: solid 1px #999a9e;
                      width: 100%;
                      max-width: 100%;
                    "
                    v-model="date"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    placeholder="Statement Issue Date"
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
              </v-dialog></v-flex
            >


            <v-flex class="py-0 col-sm-6">
              <v-divider></v-divider>
              <v-radio-group v-model="row" row>
                <v-radio label="Naira" value="naira"></v-radio>
                <v-radio label="Dollars" value="dollars"></v-radio>
              </v-radio-group>
            </v-flex>

            <v-flex class="py-0 col-sm-6">
              <v-file-input
                dense
                outlined
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="mdi-camera"
                label="Upload bank statement"
              ></v-file-input>
            </v-flex>
          </v-layout>

          <div :class="add_float_right">
            <v-btn
              type="submit"
              color="success"
              dark
              depressed
              class="mt-8"
              :block="block"
            >
              Submit
            </v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
      // v-models
      fname: "",
      lname: "",
      idNumber: "",
      date: "",
      // v-models

      modal: false,
      block: null,
      add_my_3: "",
      add_float_right: "",
      // select gender
      gender: [{ sex: "Male" }, { sex: "Female" }],
      // select ID
      identification: [
        { idType: "International Passport", id: "001" },
        { idType: "National Drivers Licence", id: "002" },
        { idType: "National Drivers Licence (Temporary)", id: "003" },
        { idType: "National Identity Card (old version)", id: "004" },
        { idType: "National Identity Card (new version)", id: "005" },
        { idType: "Voter's Card", id: "006" },
        { idType: "Voter’s Card (Temporary)", id: "007" },
        { idType: "Digital NIN", id: "008" },
        { idType: "Digital NIN (printed)", id: "009" },
        {
          idType:
            "National Identification Number Slip (NINS, NIMC, Enrollment Transaction Slip etc.)",
          id: "010",
        },
      ],

      // select bank name
      items: [],
    };
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  created() {
    this.items = this.$store.getters["trading/getSelectBank"];
  },

  methods: {
    handleResize() {
      if (window.innerWidth <= 599) {
        this.block = true;
        this.add_my_3 = "my-3";
        this.add_float_right = "";
      } else {
        this.block = false;
        this.add_my_3 = "mx-3";
        this.add_float_right = "float-right";
      }
    },

    selectID(params) {
      // if (params[0].id === "002") {
      console.log(params);
      // }
    },
  },
};
</script>

<style lang="scss">
.container {
  .theme--light.v-stepper
    .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error)
    .v-stepper__step__step {
    background: #0e0e23 !important;
  }
  input.file_input_replacement {
    padding: 5px 8px;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    font-size: 14px;
    max-width: 100%;
  }

  @media (max-width: 280px) {
    .v-stepper--alt-labels .v-stepper__step {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      flex-basis: 0px;
    }
  }
}
</style>