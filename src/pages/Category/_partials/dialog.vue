<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> New Item </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline">
          <v-text-field
            v-model="name"
            label="Name"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Add </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    dialog: false,
  }),
};
</script>