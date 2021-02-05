<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-sheet color="dark">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ me.name }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ me.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-sheet>

    <v-list class="pa-0">
      <div v-for="[icon, text, url] in links" :key="icon">
        <v-list-item link :to="url">
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      links: [
        ["mdi-view-dashboard", "Dashboard", "/dashboard"],
        ["mdi-dialpad", "Categories", "/category"],
        ["mdi-clipboard-outline", "Kana", "/kana"],
      ],
    };
  },
  props: {
    drawer: Boolean,
  },
  computed: {
    ...mapState({
      me: (state) => state.auth.me,
    }),
  },
};
</script>