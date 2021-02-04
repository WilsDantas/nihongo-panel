<template>
  <div class="preloader" v-if="preloader">
    <v-progress-circular
      class="progress-bar"
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <p class="text-color">{{ textPreLoader }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      preloader: (state) => state.preloader,
      textPreLoader: (state) => state.textPreLoader,
    }),
  },
};
</script>

<style>
.preloader {
  position: absolute;
  background: #000;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  z-index: 999999999999;
  text-align: center;
}
.v-progress-circular {
  color: blue;
  width: 100px;
  margin-top: 20%;
}
.text-color{
  margin-top: 30px;
  font-size: 25px;
  color: white;
}
</style>