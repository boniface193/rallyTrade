<template>
    <div class="chip d-flex justify-center">
      <v-icon class="text-center white--text">{{currencyChip}}</v-icon>
    </div>
</template>

<script>
export default {
    props: ["currencyChip"]
};
</script>

<style lang="scss" scoped>
.chip {
  float: left;
  width: 30px;
  shape-outside: circle();
  clip-path: circle();
  background: lightblue;
}
</style>