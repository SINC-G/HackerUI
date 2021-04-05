<template>
  <div>
    <file-pond
      name="file"
      ref="pond"
      @init="handleFilePondInit"
      @processfile="handleProcessFile"
    />
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

let validTypes = [
  "application/vnd.android.package-archive",
  "application/iphone", // BUG 如何表示ios应用ipa文件
];

// FilePond 全局设置
setOptions({
  server: {
    url: "/api/uploadfile",
  },
  instantUpload: false,
  // 插件设置
  acceptedFileTypes: validTypes,
  fileValidateTypeLabelExpectedTypesMap: {
    [validTypes[0]]: ".apk",
    [validTypes[1]]: ".ipa",
  },
  fileValidateTypeDetectType: (source, type) =>
    new Promise((resolve, reject) => {
      //console.log(source);
      //console.log(type);
      // Do custom type detection here and return with promise
      if (source.name.split(".").reverse()[0] == "apk") {
        //console.log("1");
        type = validTypes[0];
      } else if (source.name.split(".").reverse()[0] == "ipa") {
        type = validTypes[1];
      } else {
        //console.log("3");
        reject();
      }

      resolve(type);
    }),
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
    handleFilePondInit: function () {
      //init filepond事件，https://pqina.nl/filepond/docs/patterns/api/filepond-instance/#events
      console.log("FilePond has initialized");

      // example of instance method call on pond reference
      this.$refs.pond.getFiles();
    },
    handleProcessFile: function (error, file) {
      let res = JSON.parse(file.serverId);
      console.log(res);
      if (res) {
        this.$router.replace({ name: "main", params: { appInfoList: res } });
      }
    },
  },
  components: {
    FilePond,
  },
};
</script>

<style>
</style>
