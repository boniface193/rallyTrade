<template>
  <button
    :class="btnColor"
    class="my-5 white--text text-uppercase py-2 rounded button"
    style="width: 100%"
  >
    {{ btnTitle }}
  </button>
</template>

<script>
export default {
  props: ["btnColor", "btnTitle"],
};
</script>

<style>
</style>