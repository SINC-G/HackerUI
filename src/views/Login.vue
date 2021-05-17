<template>
  <div v-if="false">
    <v-main
      ><v-btn-toggle>
        <v-btn><v-icon>mdi-github</v-icon>使用 GitHub 登录</v-btn>
      </v-btn-toggle></v-main
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted: function () {
    let code = this.$route.query.code;
    let state = this.$route.query.state;
    if (code && state) {
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
    } else {
      location.href = "/api/login/github";
    }
  },
};
</script>

<style>
</style>