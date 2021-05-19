<template>
  <v-simple-table fixed-header>
    <template v-slot:default>
      <tbody>
        <tr v-for="(value, key) in apkInfo" :key="key">
          <td>{{ value.name }}</td>
          <td>{{ value.data }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    appInfo: Object,
  },
  computed: {
    apkInfo: function () {
      let info = JSON.parse(JSON.stringify(this.appInfo));
      //console.log(this.appInfo);
      let baseinfo = {
        package: { name: "包名", data: info.package },
        file_md5: { name: "文件MD5", data: info.file_md5 },
        cert_md5: { name: "证书MD5", data: info.cert_md5[0] }, //TODO 证书MD5是否有多个？
        file_size: { name: "文件大小", data: info.file_size },
        androidversion: {
          name: "Android版本",
          data: info.androidversion.Name + "(" + info.androidversion.Code + ")",
        },
        sdk_version: { name: "SDK版本", data: info.sdk_version },
        libraries: {
          name: "Libraries",
          data: info.libraries.length ? info.libraries : "无",
        },
        main_activity: { name: "MainActivity", data: info.main_activity },
      };

      return baseinfo;
    },
  },
};
</script>

<style>
</style>