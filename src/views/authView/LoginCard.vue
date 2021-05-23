<template>
  <div>
    <v-card class="auth-card" outlined :disabled="disabled">
      <v-progress-linear v-if="loading" indeterminate absolute />
      <div class="pa-10">
        <div class="text-center">
          <h1 class="headline mb-2">MASAP</h1>
          <span class="d-inline-block mb-8"> 选择一种登录/注册方式 </span>
        </div>

        <div class="d-flex justify-center">
          <v-btn-toggle>
            <v-btn width="200px" href="/api/login/github"
              ><v-icon left size="26px">mdi-github</v-icon>使用 GitHub
              登录</v-btn
            >
          </v-btn-toggle>
        </div>

        <div class="text-body-2 text--secondary mb-8 pa-6">
          隐私政策
          <a
            href="#"
            class="d-inline-block text-none text-decoration-none font-weight-bold"
            >了解更多</a
          >
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    login: function () {
      location.href = "/api/login/github";
    },
  },
};
</script>

<style lang="scss">
.auth-card {
  width: 450px;
  min-height: 500px;
  overflow: hidden;
}
.auth-card.signup {
  width: 750px;
}
</style>