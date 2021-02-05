<template>
  <v-container>
    <v-simple-table>
      <template v-slot:top>
        <v-toolbar flat>
          <v-text-field
            v-model="params.search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            class="mr-6"
          ></v-text-field>
          <StoreDialogComponent :params="params" />
        </v-toolbar>
      </template>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Image</th>
            <th class="text-left">Traits</th>
            <th class="text-left">Meaning</th>
            <th class="text-left">Example</th>
            <th class="text-left">Furigana</th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in categories.data" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.name }}</td>
            <td align="end">
              <v-icon small @click="openDialog(item, true)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="openDialog(item, false)">
                mdi-delete
              </v-icon>
            </td>
          </tr>
        </tbody>
      </template>

      <template v-slot:bottom>
        <div class="text-center pb-3">
          <v-pagination
            v-model="params.page"
            :length="categories.meta.last_page"
            circle
          ></v-pagination>
        </div>
      </template>
    </v-simple-table>

    <v-dialog v-model="dialogModalEdit" width="300">
      <EditDialogComponent
        :item="itemModal"
        :params="params"
        @changemodal="closeDialog()"
      />
    </v-dialog>
    <v-dialog v-model="dialogModalDestroy" width="300">
      <DestroyDialogComponent
        :item="itemModal"
        :params="params"
        @changemodal="closeDialog()"
      />
    </v-dialog>
  </v-container>
</template>

<script>
import StoreDialogComponent from "./_partials/storeDialog";
import DestroyDialogComponent from "./_partials/destroyDialog";
import EditDialogComponent from "./_partials/editDialog";
import { mapState } from "vuex";
export default {
  components: {
    StoreDialogComponent,
    DestroyDialogComponent,
    EditDialogComponent,
  },
  data: () => ({
    dialogModalEdit: false,
    dialogModalDestroy: false,
    itemModal: {},
    params: {
      per_page: 10,
      search: "",
      page: 1,
    },
  }),

  created() {
    this.$store
      .dispatch("categories", this.params)
      .then(() => "")
      .catch(() => "");
  },

  computed: {
    ...mapState({
      categories: (state) => state.categories.categories,
    }),
  },

  methods: {
    openDialog(item, edit) {
      this.itemModal = {};
      this.itemModal.name = item.name;
      this.itemModal.identify = item.uuid;
      edit ? (this.dialogModalEdit = true) : (this.dialogModalDestroy = true);
    },
    closeDialog() {
      this.dialogModalEdit = false;
      this.dialogModalDestroy = false;
    },
  },

  watch: {
    "params.page"() {
      this.$store
        .dispatch("categories", this.params)
        .then(() => "")
        .catch(() => "");
    },
    "params.search"() {
      this.$store
        .dispatch("categories", this.params)
        .then(() => "")
        .catch(() => "");
    },
  },
};
</script>