<template>
  <div>
    <v-card>
      <v-card-title class="headline">{{ item.name }}</v-card-title>
      <v-card-text>
        Você tem certeza que deseja deletar esta Categoria?
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="destroyCategory"> Deletar </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    item: Object,
    params: Object,
  },

  methods: {
    destroyCategory() {
      this.$store.dispatch("destroyCategory", this.item).then((response) => {
        this.$store.dispatch("categories", this.params);
        this.$emit("changemodal");
      });
    },
  },
};
</script>