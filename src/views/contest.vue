<template>
<v-app>
    <v-content>
      <v-select v-model="form.lead_generator_id" 
                prepend-icon="person" :items="appointments" 
                label="Appointment Setter" item-value="id" 
                :item-text="item => `ID: ${item.id} | ${item.client_name}`">
      </v-select>
      <pre>form = {{ form }}</pre>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
   "appointments": [{
      "id": 1,
      "client_name": 'John Smith'
    }, {
      "id": 2,
      "client_name": 'Carl Larson'
    }, {
      "id": 3,
      "client_name": 'Lennard Smith'
    }],
    form: {
      lead_generator_id: null
    }
  }),
};
</script>