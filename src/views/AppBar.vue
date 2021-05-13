<template>
  <v-app-bar app clipped-left short>
    <v-toolbar-title>MASAP</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="login">
      <v-icon>mdi-github</v-icon>
    </v-btn>
    <v-btn>登录/注册</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    login: function () {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
</style>