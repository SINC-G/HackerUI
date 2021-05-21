<template>
  <v-main>
    <v-container>
      <v-row style="height: 600px" align="center" justify="center">
        <v-col class="col-3">
          <v-text-field
            label="报告ID查看分析报告"
            placeholder="请输入ID"
            solo
            class=""
          ></v-text-field>
          <div class="text-center mb-4">或</div>
          <upload-input v-if="isLogin"></upload-input>
          <div
            v-else
            class="text-center pa-8 rounded-lg"
            style="background: #f1f0ef"
          >
            上传解析需要登录
          </div>
          <div class="font-weight-light text-caption mt-4">
            帮助：<br />
            1. 上传应用解析(需要登录)<br />
            2. 输入报告ID查看报告
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
// @ is an alias to /src
import UploadInput from "./components/UploadInput.vue";

export default {
  name: "Home",
  components: {
    UploadInput,
  },
  data: () => ({}),
  computed: {
    isLogin: function () {
      //console.log(this.$store.state.isLogin);
      return this.$store.state.isLogin;
    },
  },
  created() {
    let that = this;
    if (localStorage.getItem("token")) {
      this.axios
        .get("/user/info")
        .then(function (response) {
          //console.log(response);
          if (response.data.id) {
            that.$store.commit("logined");
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