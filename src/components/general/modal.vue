<template>
  <v-dialog persistent v-model="dialog" :width="width">
    <Gen-card>
        <slot></slot>
    </Gen-card>
  </v-dialog>
</template>

<script>
import GenCard from "@/components/general/genCard.vue"
export default {
    components: {
        GenCard,

    },
    props: ["dialog", "width"],
    data(){
        return {
            
        }
    }
};
</script>

<style>
</style>