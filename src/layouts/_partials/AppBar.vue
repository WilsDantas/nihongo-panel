<template>
  <div>
    <v-app-bar app class="pr-3">
      <v-app-bar-nav-icon @click="$emit('changedrawer')"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <!-- <v-icon large color="white darken-2"> mdi-bell </v-icon> -->
      <div class="pl-6">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-icon large v-bind="attrs" v-on="on">
              mdi-account
            </v-icon>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item>
            <v-divider> </v-divider>
            <v-list-item link>
              <v-list-item-title @click="logout">Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => this.$router.push({ name: "login" }))
        .catch(() => {
          console.log("Falha ao Deslogar do Sistema");
        });
    },
  },
};
</script>