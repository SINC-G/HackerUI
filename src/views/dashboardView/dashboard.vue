<template>
  <div>
    <personal-side-nav></personal-side-nav>

    <v-main>
      <overview></overview>

      <v-container>
        <v-row>
          <v-col>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Overview from "./components/Overview.vue";
import PersonalSideNav from "./DashboardSideNav.vue";
export default {
  components: { PersonalSideNav, Overview },
  data() {
    return {};
  },
};
</script>

<style>
</style>