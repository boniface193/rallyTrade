<template>
  <div>
      <p style="font-size: 12px; font-weight: normal; font-family: roboto">
      {{ messages }}<span class="active_link--text "> {{phoneNumber}}</span>
    </p>
    <div class="d-flex">
      <v-text-field
        class="mr-2 mb-0 pb-0"
        outlined
        type="tel"
        v-for="(key, i) in activationKeyFields"
        :key="i"
        onkeydown="javascript: return event.keyCode === 8 ||event.keyCode === 46 ? true : !isNaN(Number(event.key))"
        :data-length="key.length"
        :data-index="i"
        :ref="`input-${i}`"
        v-model="key.value"
        maxlength="1"
        @keyup="handleActivationInput($event)"
      ></v-text-field>
    </div>
    
  </div>
</template>

<script>
// import MobileNav from "@/components/layouts/mobilenav.vue";
export default {
  props: ["phoneNumber"],
  components: {
    // MobileNav,

  },
  data() {
    return {
      messages: "Kindly enter the code sent to",
      // Our input fields.
      // length is the max char allowed
      activationKeyFields: [
        { length: 1, value: "" },
        { length: 1, value: "" },
        { length: 1, value: "" },
        { length: 1, value: "" },
      ],
    };
  },

  methods: {
    handleActivationInput(e) {
      // Grab input's value
      let value = e.target.value;
      // Grab data-index value
      let index = parseInt(e.target.dataset.index);
      // Grab data-length value
      let maxlength = e.target.dataset.length;

      if (this.activationKeyFields[index].value.length > maxlength) {
        e.preventDefault();
        this.activationKeyFields[index].value = value.slice(0, 1);
        try {
          this.$refs[`input-${parseInt(index + 1)}`][0].focus();
        } catch (e) {
          console.log(e);
        }
        return;
      }

      // Shift focus to next input field if max length reached
      if (value.length >= maxlength) {
        if (typeof this.activationKeyFields[index + 1] == "undefined") {
          e.preventDefault();
          return;
        }
        this.$refs[`input-${parseInt(index + 1)}`][0].focus();
        e.preventDefault();
      } else {
        if (typeof this.activationKeyFields[index - 1] == "undefined") {
          e.preventDefault();
          return;
        }
        this.$refs[`input-${parseInt(index - 1)}`][0].focus();
        e.preventDefault();
      }
    },
  },

  computed: {
    activationKey() {
      let value = "";
      for (let field of this.activationKeyFields) {
        value += field.value;
      }
      return value;
    },
  },
};
</script>
<style lang="scss">
div.d-flex.v-text-field--filled > .v-input__control > .v-input__slot,
.v-text-field--full-width > .v-input__control > .v-input__slot,
.v-text-field--outlined > .v-input__control > .v-input__slot {
  align-items: stretch;
  min-height: 30px;
  border: green;
}
</style>


