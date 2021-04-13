<template>
  <div class="show-mobile">
    <v-app-bar color="success" dark fixed height="80" class="d-flex justify-center elevation-0 ">

      <v-toolbar-title class="text-center">Deposit</v-toolbar-title>

      <!-- <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
  </div>
</template>

<style lang="scss" scoped>

@media (min-width: 426px) {
  .show-mobile {
    display: none;
  }
}
</style>