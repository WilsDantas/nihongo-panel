<template>
  <div>
      <SideComponent :drawer=drawer />
      <App-component @changedrawer="drawer = !drawer" />

      <v-main>
        <router-view></router-view>
      </v-main>
  </div>
</template>

<script>
import AppComponent from "./_partials/AppBar";
import SideComponent from "./_partials/SideBar";

export default {
  data(){
    return {
      drawer: true
    }
  },
  components: {
    AppComponent,
    SideComponent,
  },
};
</script>