<template>
  <div>
    <personal-side-nav></personal-side-nav>

    <v-main>
      <overview></overview>
    </v-main>
  </div>
</template>

<script>
import Overview from "./components/Overview.vue";
import PersonalSideNav from "./components/PersonalSideNav.vue";
export default {
  components: { PersonalSideNav, Overview },
  data() {
    return {};
  },
};
</script>

<style>
</style>