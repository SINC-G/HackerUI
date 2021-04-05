<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, name) in appInfoList" :key="name">
          <td>{{ name }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  // 可以显示骨架, 请求, 列表渲染, 后端返回是个对象
  data() {
    return { appInfoList: null };
  },
  created() {
    console.log(this.appInfoList);
    console.log(this.$route.params);
    this.appInfoList = this.$route.params.appInfoList;
  },
};
</script>

<style>
</style>