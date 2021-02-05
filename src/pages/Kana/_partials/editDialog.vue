<template>
  <div>
    <v-form ref="form" @submit="editCategory" @submit.prevent>
      <v-card>
        <v-card-title class="headline">
          <div class="red--text" v-if="errors.name != undefined">
            <h6>{{ this.errors.name[0] }}</h6>
          </div>
          <v-text-field
            autofocus
            v-model="item.name"
            label="Name"
          ></v-text-field>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" type="submit" text> Editar</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    errors: {},
  }),

  props: {
    item: Object,
    params: Object,
  },

  methods: {
    editCategory() {
      this.$store
        .dispatch("editCategory", this.item)
        .then((response) => {
          this.$store.dispatch("categories", this.params).then((response) => {
            this.$emit("changemodal");
          });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },

  watch: {
    dialog: function () {
      this.errors = {};
    },
  },
};
</script>