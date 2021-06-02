<template>
  <div>
    <app-bar></app-bar>
    <v-main>
      <home-container></home-container>
    </v-main>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import HomeContainer from "./HomeContainer.vue";
export default {
  components: { HomeContainer, AppBar },
  name: "Home",
  data: () => ({}),
  created() {
    let that = this;
    if (localStorage.getItem("token")) {
      this.axios
        .get("/user/info")
        .then(function (response) {
          //console.log(response);
          if (response.data.id) {
            that.$store.commit("logined", localStorage.getItem("token"));
            that.$store.commit("updateUser", response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
};
</script>

<style>
</style>