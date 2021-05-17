<template>
  <v-simple-table fixed-header height="600px" dense>
    <template v-slot:default>
      <tbody>
        <tr v-for="(value, name) in apkInfo" :key="name">
          <td>{{ name }}</td>
          <td>{{ value }}</td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    appInfo: Object,
  },
  computed: {
    apkInfo: function () {
      let info = JSON.parse(JSON.stringify(this.appInfo));
      delete info.files_types;
      delete info.files;
      console.log(this.appInfo);
      return info;
    },
  },
};
</script>

<style>
</style>