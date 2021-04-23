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
        .get("/auth/github", { code, state })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      this.$axios
        .get("/login/github")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },
};
</script>

<style>
</style>