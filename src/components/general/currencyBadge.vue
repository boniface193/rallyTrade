<template>
  <v-badge :color="currencyColor" overlap :dot="dot" class="float-right z-index">
    <template v-slot:badge>
      <v-icon class="text-center" :size="size">{{ moneySign }}</v-icon>
    </template>
  </v-badge>
</template>

<script>
export default {
  props: ["moneySign", "currencyColor", "dot", "size"],
};
</script>

<style lang="scss" scoped>
</style>