<template>
  <v-app>
    <app-bar></app-bar>

    <div>
      <router-view />
    </div>
  </v-app>
</template>

<script>
import AppBar from "./views/AppBar.vue";
export default {
  name: "App",
  components: { AppBar },
};
</script>

<style lang="scss">
</style>
