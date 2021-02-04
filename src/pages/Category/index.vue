<template>
  <v-container>
    <v-simple-table>
      <template v-slot:top>
        <v-toolbar flat>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            class="mr-6"
          ></v-text-field>
          <DialogComponent />
        </v-toolbar>
      </template>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in categories" :key="item.name">
            <td>{{ item.name }}</td>
            <td align="end">
              <v-icon small class="mr-lg-2"> mdi-pencil </v-icon>
              <v-icon small> mdi-delete </v-icon>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import DialogComponent from "./_partials/dialog";
import { mapState } from "vuex";
export default {

  components: {
    DialogComponent,
  },
  data: () => ({
    search: "",
    dialog: false,
  }),
  computed: {
    ...mapState({
      categories: (state) => state.categories.categories,
    }),
  },

  created() {
    this.$store
      .dispatch("categories")
      .then(() => "")
      .catch(() => "");
  },
};
</script>