<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title class="subheading font-weight-bold">
          基础信息
        </v-card-title>

        <v-divider></v-divider>
        ...
      </v-card>
    </v-col>
    <v-col>
      <v-card>
        <v-card-title class="subheading font-weight-bold">
          应用文件目录
        </v-card-title>

        <v-divider></v-divider>
        <file-tree :paths="appInfo.files"></file-tree>
      </v-card>
    </v-col>
    <v-col>
      <v-card>
        <v-card-title class="subheading font-weight-bold">
          Activities
        </v-card-title>

        <v-divider></v-divider>
        <v-list disabled>
          <v-list-item v-for="(item, i) in appInfo.activities" :key="i">
            <v-list-item-content>
              {{ item }}
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
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
    return { appInfo: {} };
  },
  created() {
    //console.log(this.appInfo);
    //console.log(this.$route.params);
    this.appInfo = this.$route.params.appInfo;
  },
};
</script>

<style>
</style>