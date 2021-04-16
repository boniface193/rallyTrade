<template>
  <v-card :width="width" :link="link" :to="to">
      <slot></slot>
  </v-card>
</template>

<script>
export default {
    props: ["width", "link", "to"]

}
</script>

<style>

</style>