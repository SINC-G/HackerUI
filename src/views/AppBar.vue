<template>
  <v-app-bar app>
    <v-toolbar-title>移动应用安全分析平台</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="login">
      <v-icon>mdi-github</v-icon>
    </v-btn>
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