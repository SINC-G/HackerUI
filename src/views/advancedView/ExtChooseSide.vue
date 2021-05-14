<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, key) in items" :key="key">
        <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-chip-group multiple>
            <v-chip filter v-for="(func, i) in item.funcs" :key="i">{{
              func
            }}</v-chip>
          </v-chip-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-btn block class="font-weight-bold">开始</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: {
      baseAnalysis: { title: "基础分析", funcs: ["ApkParser"] },
      deepAnalysis: { title: "深度分析" },
      reportSetting: { title: "报告设置" },
    },
  }),
};
</script>

<style>
</style>