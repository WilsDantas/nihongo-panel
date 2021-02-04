<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="300">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> New Item </v-btn>
      </template>
      <v-form ref="form" @submit="storeCategory" @submit.prevent>
      <v-card>
        <v-card-title class="headline">
          <div class="red--text" v-if="errors.name != undefined">
            <h6>{{ this.errors.name[0] }}</h6>
          </div>
          <v-text-field v-model="formData.name" label="Name"></v-text-field>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" type="submit" text> Add </v-btn>
        </v-card-actions>
      </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    formData: {},
    errors: {},
    dialog: false,
  }),

  methods: {
    storeCategory() {
      this.$store
        .dispatch("storeCategory", this.formData)
        .then((response) => {
          this.dialog = false;
          this.$store.dispatch("categories")
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>