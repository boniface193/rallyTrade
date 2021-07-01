<template>
  <v-dialog persistent v-model="dialog" :width="width">
    
        <slot></slot>
    
  </v-dialog>
</template>

<script>

export default {
    components: {
        

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