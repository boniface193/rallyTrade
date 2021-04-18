<template>
  <div class="chip d-flex justify-center" :style="width">
    <v-icon
      class="white--text"
      :class="padding"
      :size="size"
      :style="fontSize"
      >{{ currencyChip }}</v-icon
    >
  </div>
</template>

<script>
export default {
  props: ["currencyChip", "size", "width", "padding", "fontSize"],
};
</script>

<style lang="scss" scoped>
.chip {
  float: left;
  width: 25px;
  shape-outside: circle();
  clip-path: circle();
  background: #9ee8ff;
}
</style>