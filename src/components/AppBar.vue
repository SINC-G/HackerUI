<template>
  <v-app-bar app clipped-left short>
    <v-toolbar-title>MASAP</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu open-on-hover offset-y v-if="isLogin">
      <template v-slot:activator="{ on }">
        <v-avatar size="36px" v-on="on">
          <v-img
            v-if="userInfo.avatars"
            alt="Avatar"
            :src="userInfo.avatars"
          ></v-img>
          <span class="white--text headline" v-else>{{
            userInfo.nickname
          }}</span>
        </v-avatar>
      </template>
      <v-list dense>
        <v-list-item :to="{ name: 'Dashboard' }">
          <v-list-item-title> 控制台 </v-list-item-title>
        </v-list-item>
        <v-list-item link @click="logout">
          <v-list-item-title> 退出 </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn v-else :to="{ name: 'Login' }">登录/注册</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    logout: function () {
      // TODO 后端登出
      localStorage.removeItem("token");
      this.$store.commit("logout");
      this.$router.replace({ name: "Home" }).catch((err) => err);
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