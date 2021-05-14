<template>
  <v-card>
    <v-card-title>应用名</v-card-title>
    <div v-if="standardMode">
      <v-stepper vertical>
        <v-stepper-step step="1"> 基础应用分析 </v-stepper-step>
        <v-stepper-content step="1"> 基础信息解析。。。 </v-stepper-content>

        <v-stepper-step step="2">深度应用分析</v-stepper-step>
        <v-stepper-content step="2"> 反编译。。。 </v-stepper-content>

        <v-stepper-step step="2">生成报告中。。。</v-stepper-step>
      </v-stepper>
    </div>
    <v-card-actions v-else>
      <v-btn @click="standardMode = true">开始</v-btn>
      <v-btn :to="{ name: 'Advanced' }">切换至高级模式 </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    standardMode: false,
  }),
};
</script>

<style>
</style>