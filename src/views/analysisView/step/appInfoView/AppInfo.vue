<template>
  <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">名称</th>
          <th class="text-center">值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, name) in appInfoList" :key="name">
          <td>{{ name }}</td>
          <td>{{ value }}</td>
        </tr>
        <tr>
          <td><file-tree :paths="appInfoList.files"></file-tree></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import FileTree from "./component/FileTree.vue";
export default {
  components: { FileTree },
  // 可以显示骨架, 请求, 列表渲染, 后端返回是个对象
  // TODO骨架: https://vuetifyjs.com/zh-Hans/components/skeleton-loaders/#section-65e0969c788d
  // TODO 时间轴: https://vuetifyjs.com/zh-Hans/components/timelines/#section-7d275bc6
  // 或许可以每个事件生成一个时间轴, 有什么作用, 再看
  // TODO 树形: https://vuetifyjs.com/zh-Hans/components/treeview/#section-641c7d22268fc76ee4
  // 用这个 https://vuetifyjs.com/zh-Hans/components/data-iterators/#section-98757709548c9875811a
  // 分表显示, 基础信息一栏, activity一栏之类的?
  // 键值, 基本信息一栏,
  // 第一个表, basesinfo, 键对值, 字符
  // 列表单独一个列表, activity
  data() {
    return { appInfoList: {} };
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