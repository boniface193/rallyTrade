<template>
  <v-dialog persistent v-model="dialog">
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
    props: ["dialog"],
    data(){
        return {
            
        }
    }
};
</script>

<style>
</style>