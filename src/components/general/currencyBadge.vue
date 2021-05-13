<template>
  <v-badge :color="currencyColor" avatar overlap class="float-right z-index">
    <template v-slot:badge>
      <v-icon class="text-center my-1">{{ moneySign }}</v-icon>
    </template>
  </v-badge>
</template>

<script>
export default {
    props: ['moneySign', 'currencyColor']
};
</script>

<style>
</style>