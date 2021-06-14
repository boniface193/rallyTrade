<template>
  <div class="container">
    <div class="text-h5 my-3">Verification</div>
    <v-stepper
      v-model="e1"
      class="elevation-0 my-8"
      outlined
      non-linear
      alt-labels
    >
      <v-stepper-header class="elevation-0">
        <template v-for="steps in v_steper_step">
          <v-stepper-step
            :key="steps.id"
            :complete="e1 > steps.completed"
            :step="steps.steps"
            color="active_link"
            
          >
            {{ steps.title }}
          </v-stepper-step>
          <v-divider v-if="steps !== v_steper_step" :key="steps.id"></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="submitKYC"
        >
          <!------------------------- step 1  --------------------------------------------->
          <v-stepper-content step="1">
            <v-layout row wrap class="mt-3 mx-2">
              <v-flex class="mx-1" xs="6"
                ><v-text-field
                  v-model="fname"
                  class="text-caption"
                  outlined
                  dense
                  type="text"
                  label="First Name"
                  :rules="nameRules"
                  required
                ></v-text-field
              ></v-flex>
              <v-flex class="mx-1" xs="6"
                ><v-text-field
                  outlined
                  dense
                  v-model="lname"
                  label="Last Name"
                  :rules="nameRules"
                  required
                  type="text"
                ></v-text-field
              ></v-flex>
              <v-flex class="mx-1" xs="6"
                ><v-select
                  v-model="selectGender"
                  outlined
                  dense
                  :items="gender"
                  item-text="sex"
                  :rules="nameRules"
                  label="Gender"
                ></v-select
              ></v-flex>
              <v-flex class="mx-1" xs="6">
                <v-menu
                  v-model="dobModal"
                  :close-on-content-click="false"
                  max-width="290"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <input
                      class="body-1 rounded pa-2 text-truncate"
                      style="
                        border: solid 1px #999a9e;
                        width: 100%;
                        max-width: 100%;
                      "
                      v-model="dateOfBirth"
                      placeholder="Date of Birth"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="dateOfBirth"
                    @change="dobModal = false"
                  ></v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>

            <div :class="add_float_right">
              <v-btn
                color="active_link white--text"
                :disabled="
                  fname < 1 || lname < 1 || selectGender < 1 || dateOfBirth < 1
                "
                depressed
                class="mt-8"
                :block="block"
                @click="e1 = 2"
              >
                Continue
              </v-btn>
            </div>
            <!------------------------- step 1  --------------------------------------------->
          </v-stepper-content>

          <v-stepper-content step="2">
            <!------------------------- step 2  --------------------------------------------->
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
                    @change="selectedID()"
                    :rules="nameRules"
                    v-model="selectID"
                  ></v-select>
                </v-col>
                <v-col md="8" sm="12" cols="">
                  <v-row>
                    <v-col v-show="issueDate" lg="4" md="4" sm="4" cols="">
                      <v-menu
                        v-model="doiModal"
                        :close-on-content-click="false"
                        max-width="290"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <input
                            class="body-1 rounded pa-2 text-truncate"
                            style="
                              border: solid 1px #999a9e;
                              width: 100%;
                              max-width: 100%;
                            "
                            v-model="dateOfIssue"
                            placeholder="Date of issues"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          />
                        </template>
                        <v-date-picker
                          v-model="dateOfIssue"
                          @change="doiModal = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>

                    <v-col v-show="expDate" lg="4" md="4" sm="4" cols="">
                      <v-menu
                        v-model="expdModal"
                        :close-on-content-click="false"
                        max-width="290"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <input
                            class="body-1 rounded pa-2 text-truncate"
                            style="
                              border: solid 1px #999a9e;
                              width: 100%;
                              max-width: 100%;
                            "
                            v-model="expiredDate"
                            placeholder="Expired Date"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          />
                        </template>
                        <v-date-picker
                          v-model="expiredDate"
                          @change="expdModal = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>

                    <!-- shos if a user do not select NIN -->
                    <v-col v-show="identityNumber" lg="4" md="4" sm="4" cols="">
                      <v-text-field
                        class="text-caption"
                        outlined
                        dense
                        v-model="idNumber"
                        type="number"
                        label="ID Number"
                        required
                        :rules="nameRules"
                      ></v-text-field>
                    </v-col>

                    <v-col lg="4" md="4" sm="4" cols="">
                      <v-file-input
                        v-model="uploadFront"
                        outlined
                        dense
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera"
                        label="Upload Front"
                        :rules="nameRules"
                      ></v-file-input>
                    </v-col>
                    <v-col v-show="showUploadBack" lg="4" md="4" sm="4" cols="">
                      <v-file-input
                        v-model="uploadBack"
                        dense
                        outlined
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera"
                        label="Upload Back"
                        :rules="nameRules"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>

            <div :class="add_float_right">
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
                color="active_link white--text"
                depressed
                :block="block"
                @click="e1 = 3"
                :disabled="
                  (this.selectID < 1 ||
                    this.uploadFront < 1||
                    this.dateOfIssue < 1 ||
                  this.idNumber < 1 || this.expiredDate < 1) && this.uploadBack < 1
                "
              >
                Continue
              </v-btn>
            </div>
            <!------------------------- step 2  --------------------------------------------->
          </v-stepper-content>

          <v-stepper-content step="3">
            <!------------------------- step 3  --------------------------------------------->
            <v-layout row wrap class="mt-3 mx-2">
              <v-flex class="mx-1" xs="6"
                ><v-text-field
                  outlined
                  dense
                  v-model="clientName"
                  label="Cient Name"
                  required
                  type="text"
                  :rules="nameRules"
                ></v-text-field
              ></v-flex>
              <v-flex class="mx-1" xs="6"
                ><v-select
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
                </v-select></v-flex
              >

              <v-flex class="mx-1" xs="6">
                <v-text-field
                  v-model="acctNumber"
                  outlined
                  dense
                  label="10 Digit NUBAN Account Number"
                  required
                  type="number"
                  :rules="nameRules"
                ></v-text-field>
              </v-flex>

              <v-flex class="mx-1" xs="6"
                ><v-menu
                  v-model="sidModal"
                  :close-on-content-click="false"
                  max-width="290"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <input
                      class="body-1 rounded pa-2 text-truncate"
                      style="
                        border: solid 1px #999a9e;
                        width: 100%;
                        max-width: 100%;
                      "
                      v-model="statementDate"
                      placeholder="Statement Issue Date"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="statementDate"
                    @change="sidModal = false"
                  ></v-date-picker> </v-menu
              ></v-flex>

              <v-flex class="py-0 col-sm-6">
                <hr />
                <v-radio-group v-model="currency" row>
                  <v-radio label="Naira" id="one" value="naira"></v-radio>
                  <v-radio id="two" label="Dollars" value="dollars"></v-radio>
                </v-radio-group>
              </v-flex>

              <v-flex class="py-0 col-sm-6">
                <v-file-input
                  v-model="uploadBankStatement"
                  dense
                  outlined
                  accept="image/png, image/jpeg, image/bmp"
                  prepend-icon="mdi-camera"
                  label="Upload bank statement"
                  :rules="nameRules"
                ></v-file-input>
              </v-flex>
            </v-layout>

            <div :class="add_float_right">
              <v-btn
                color="primary"
                dark
                depressed
                :class="add_my_3"
                class="mt-8"
                :block="block"
                @click="e1 = 2"
              >
                Back
              </v-btn>
              <v-btn
                type="submit"
                color="success"
                depressed
                class="mt-8"
                :block="block"
                :disabled="
                  clientName < 1 ||
                  selectBank < 1 ||
                  acctNumber < 1 ||
                  statementDate < 1 ||
                  currency == null ||
                  uploadBankStatement < 1
                "
              >
                Submit
              </v-btn>
            </div>
          </v-stepper-content>
        </v-form>
      </v-stepper-items>
      <!------------------------- step 3  --------------------------------------------->
    </v-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      v_steper_step: [
        { completed: 1, steps: "1", title: "Personal" },
        { completed: 2, steps: "2", title: "Identification" },
        { completed: 3, steps: "3", title: "Bankning" },
      ],
      e1: 1,
      // v-models
      valid: true,
      nameRules: [(v) => !!v || "this is required"],
      showUploadBack: true,
      expDate: true,
      issueDate: true,
      identityNumber: true,
      disabled: true,
      // step 1
      fname: "",
      lname: "",
      dateOfBirth: "",
      dobModal: false,
      selectGender: "",
      // step 2
      uploadFront: [],
      uploadBack: [],
      doiModal: false,
      dateOfIssue: "",
      expdModal: false,
      expiredDate: "",
      idNumber: "",
      selectID: "",
      ninPin: "",
      // step 3
      clientName: "",
      sidModal: false,
      statementDate: "",
      selectBank: "",
      acctNumber: "",
      currency: null,
      uploadBankStatement: [],
      // v-models
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

    selectedID() {
      if (this.selectID == "International Passport") {
        this.showUploadBack = false;
        this.expDate = true;
        this.issueDate = true;
        this.identityNumber = true;
      } else if (this.selectID == "National Identity Card (old version)") {
        this.showUploadBack = true;
        this.expDate = false;
        this.issueDate = false;
        this.identityNumber = false;
      } else if (this.selectID == "Voter’s Card (Temporary)") {
        this.identityNumber = false;
        this.expDate = false;
        this.issueDate = true;
        this.showUploadBack = true;
      } else {
        this.showUploadBack = true;
        this.expDate = true;
        this.issueDate = true;
        this.identityNumber = true;
      }
    },

    submitKYC() {
      console.log("submitted");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .theme--light.v-stepper
    .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error)
    .v-stepper__step__step {
    background: #0e0e23 !important;
  }
  hr.v-divider.theme--light:last-of-type {
    display: none;
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