<template>
  <v-card :width="width" :link="link" :to="to" :height="height">
      <slot></slot>
  </v-card>
</template>

<script>
export default {
    props: ["width", "link", "to", "height"]

}
</script>

<style>

</style>