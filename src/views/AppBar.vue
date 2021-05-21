<template>
  <v-app-bar app clipped-left short>
    <v-toolbar-title>MASAP</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-avatar v-if="isLogin" size="36px">
      <v-img
        v-if="userInfo.avatars"
        alt="Avatar"
        :src="userInfo.avatars"
      ></v-img>
      <span class="white--text headline" v-else>{{ userInfo.nickname }}</span>
    </v-avatar>
    <v-btn icon @click="login" v-else>
      <v-icon>mdi-github</v-icon>
    </v-btn>
    <v-btn v-if="false">登录/注册</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    login: function () {
      this.$router.push({ name: "Login" });
    },
  },
  computed: {
    userInfo: function () {
      //console.log(this.$store.state.user);
      return this.$store.state.user;
    },
    isLogin: function () {
      return this.$store.state.isLogin;
    },
  },
};
</script>

<style>
</style>