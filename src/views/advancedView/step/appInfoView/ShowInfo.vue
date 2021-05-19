<template>
  <v-row>
    <v-col v-if="selectInfo.includes('baseinfo')" cols="5">
      <v-card>
        <v-card-title class="subheading font-weight-bold">
          基础信息
        </v-card-title>

        <v-divider></v-divider>
        <base-info :appInfo="appInfo"></base-info>
      </v-card>
    </v-col>
    <v-col v-if="selectInfo.includes('asrp')" cols="4">
      <v-card>
        <v-card-title class="subheading font-weight-bold">
          四大组件
        </v-card-title>

        <v-divider></v-divider>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> Activity 组件 </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list disabled dense>
                <v-list-item v-for="(item, i) in appInfo.activities" :key="i">
                  <v-list-item-content>
                    {{ item }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> Service 组件 </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list disabled dense>
                <v-list-item v-for="(item, i) in appInfo.services" :key="i">
                  <v-list-item-content>
                    {{ item }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> Receiver 组件 </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list disabled dense>
                <v-list-item v-for="(item, i) in appInfo.receivers" :key="i">
                  <v-list-item-content>
                    {{ item }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> Provider 组件 </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list disabled dense>
                <v-list-item v-for="(item, i) in appInfo.providers" :key="i">
                  <v-list-item-content>
                    {{ item }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-col>
    <v-col v-if="selectInfo.includes('permissions')" cols="5">
      <v-card>
        <v-card-title>权限列表</v-card-title>
        <v-divider></v-divider>

        <v-list disabled dense>
          <v-list-item v-for="(item, i) in appInfo.permissions" :key="i">
            <v-list-item-content>
              {{ item }}
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-col v-if="selectInfo.includes('filetree')" cols="6">
      <v-card height="500px" class="overflow-y-auto">
        <v-card-title class="subheading font-weight-bold">
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <div v-on="on" v-bind="attrs">应用文件目录</div>
            </template>
            <span>解包目录</span>
          </v-tooltip>
        </v-card-title>

        <v-divider></v-divider>

        <file-tree :paths="appInfo.files"></file-tree>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BaseInfo from "./component/BaseInfo.vue";
import FileTree from "./component/FileTree.vue";

export default {
  components: { FileTree, BaseInfo },
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
  props: {
    //appInfo:Object
    selectInfo: Array,
  },
  created() {
    // FIXME 先暴力一点，直接从localStorage里读取
    this.appInfo = JSON.parse(localStorage.getItem("appInfo"));
  },
};
</script>

<style>
</style>