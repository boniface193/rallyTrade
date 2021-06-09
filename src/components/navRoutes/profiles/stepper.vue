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

          <v-btn
            color="active_link"
            dark
            class="float-right mt-8"
            @click="e1 = 2"
          >
            Continue
          </v-btn>
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
                ></v-select>
              </v-col>
              <v-col md="8" sm="12" cols="">
                <v-row>
                  <v-col lg="4" md="4" sm="4" cols="">
                    <v-file-input
                      outlined
                      dense
                      :rules="rules"
                      accept="image/png, image/jpeg, image/bmp"
                      prepend-icon="mdi-camera"
                      label="Upload Front"
                    ></v-file-input>
                  </v-col>
                  <v-col lg="4" md="4" sm="4" cols="">
                    <v-file-input
                      dense
                      outlined
                      :rules="rules"
                      accept="image/png, image/jpeg, image/bmp"
                      prepend-icon="mdi-camera"
                      label="Upload Back"
                    ></v-file-input>
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
                </v-row>
              </v-col>
            </v-row>
          </div>

          <div class="float-right">
            <v-btn color="secondary" dark> Cancel </v-btn>
            <v-btn color="primary mx-3" dark @click="e1 = 1"> Back </v-btn>
            <v-btn color="active_link" dark @click="e1 = 3"> Continue </v-btn>
          </div>
        </v-stepper-content>

        <v-stepper-content step="3">
          <!-- content goes here -->

          <v-btn color="active_link" dark class="float-right" @click="e1 = 1">
            Continue
          </v-btn>
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
      fname: "",
      lname: "",
      gender: [{ sex: "Male" }, { sex: "Female" }],
      identification: [
        { idType: "International Passport" },
        { idType: "National Drivers Licence" },
        { idType: "National Drivers Licence (Temporary)" },
        { idType: "National Identity Card (old version)" },
        { idType: "National Identity Card (new version)" },
        { idType: "Voter's Card" },
        { idType: "Voter’s Card (Temporary)" },
        { idType: "Digital NIN" },
        { idType: "Digital NIN (printed)" },
        {
          idType:
            "National Identification Number Slip (NINS, NIMC, Enrollment Transaction Slip etc.)",
        },
      ],
      date: "",
      modal: false,
      row: null,
      changeType: "text",
    };
  },

  methods: {
    selectFront() {
      this.changeType = "file";
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