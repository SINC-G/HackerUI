<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created: function () {
    let code = this.$route.query.code;
    let state = this.$route.query.state;
    if (code && state) {
      this.axios
        .get("/auth/github", { params: { code, state } })
        .then((res) => {
          // console.log(res);
          localStorage.setItem("token", res.data);
          this.$router.replace({ name: "Home" });
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      fetch("/api/login/github").then((response) => {
        //console.log(response);
        if (response.redirected) {
          location.href = response.url; //TODO 更好的重定向方法
        }
      });
    }
  },
};
</script>

<style>
</style>