<template>
  <v-card :width="width" :link="link" :to="to" :height="height" :active-class="activeClass" :target="target">
      <slot></slot>
  </v-card>
</template>

<script>
export default {
    props: ["width", "link", "to", "height", "activeClass", "target"]

}
</script>

<style>

</style>