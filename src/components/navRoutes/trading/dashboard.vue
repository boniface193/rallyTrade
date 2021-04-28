<template>
  <div class="text-center">
<v-slide-group
      v-model="model"
      class="pa-2"
    >
      <v-slide-item
        v-for="n in 2"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'active_link' : 'grey lighten-1'"
          class="ma-4"
          height="50"
          width="125"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet
        v-if="model != null"
        height="200"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <h3 class="title">
            Selected {{ model }}
          </h3>
        </v-row>
      </v-sheet>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  data: () => ({
      model: null,
    }),
};
</script>

<style>
</style>