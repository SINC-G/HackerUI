<template>
  <div>
    <file-pond name="test" ref="pond" @init="handleFilePondInit" />
  </div>
</template>

<script>
import vueFilePond, { setOptions } from "vue-filepond";

// 导入filepond plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Create component
const FilePond = vueFilePond(FilePondPluginFileValidateType);

// 语言设置
import zh_CN from "filepond/locale/zh-cn.js";
setOptions(zh_CN);

// FilePond 全局设置
setOptions({
  server: "/api/uploadfile",
  instantUpload: false,
  // 插件设置
  acceptedFileTypes:
    "application/vnd.android.package-archive, application/iphone",

  fileValidateTypeLabelExpectedTypesMap: {
    "application/vnd.android.package-archive": ".apk",
    "application/iphone": ".ipa",
  },
});

// TODO 上传文件，服务器验证返回信息

export default {
  data() {
    return {
      loading: false,
    };
  },
  // 上传事件
  // 输入框
  // loading
  methods: {
    upload() {},
    handleFilePondInit: function () {
      //init filepond事件，https://pqina.nl/filepond/docs/patterns/api/filepond-instance/#events
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