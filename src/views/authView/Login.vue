<template>
  <v-container class="fill-height justify-center" fluid>
    <login-card :loading="loading" :disabled="disabled"> </login-card>
  </v-container>
</template>

<script>
import LoginCard from "./LoginCard.vue";
export default {
  components: { LoginCard },
  data: () => ({
    loading: false,
    disabled: false,
  }),
  mounted: function () {
    let code = this.$route.query.code;
    let state = this.$route.query.state;
    if (code && state) {
      this.loading = true;
      this.disabled = true;
      this.axios
        .get("/auth/github", { params: { code, state } })
        .then((res) => {
          // console.log(res);
          localStorage.setItem("token", res.data.type + " " + res.data.token);
          this.$router.replace({ name: "Home" });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },
  methods: {},
};
</script>

<style>
</style>