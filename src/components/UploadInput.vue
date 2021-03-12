<template>
  <div>
    <file-pond
      name="test"
      ref="pond"
      label-idle="拖放文件到此"
      v-bind:allow-multiple="true"
      accepted-file-types="image/jpeg, image/png"
      server="/api"
      v-bind:files="myFiles"
      v-on:init="handleFilePondInit"
    />
  </div>
</template>

<script>
import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Create component
const FilePond = vueFilePond();

export default {
  data() {
    return {
      loading: false,
      myFiles: ["index.html"],
    };
  },
  // 上传事件
  // 输入框
  // loading
  methods: {
    upload() {},
    handleFilePondInit: function () {
      console.log("FilePond has initialized");

      // example of instance method call on pond reference
      this.$refs.pond.getFiles();
    },
  },
  components: {
    FilePond,
  },
};
</script>

<style>
</style>