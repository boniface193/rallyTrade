<template>
  <v-btn
    type="type"
    :loading="btnLoading"
    :disabled="disabled"
    :class="btnColor"
    class="my-5 text-uppercase white--text py-2 rounded elevation-0"
    block
  >
    {{ btnTitle }}
  </v-btn>
</template>

<script>
export default {
  props: ["btnColor", "btnTitle", "disabled", "btnLoading", "type"],
};
</script>

<style>
</style>