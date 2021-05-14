<template>
  <v-stepper vertical v-model="stepNum">
    <v-stepper-step step="1" :complete="stepNum > 1">
      应用反编译
    </v-stepper-step>

    <v-stepper-step step="2" :complete="stepNum > 2">
      应用安全分析
    </v-stepper-step>
  </v-stepper>
</template>

<script>
export default {
  name: "AppAnalysis",
  data() {
    return {
      stepNum: 1,
    };
  },
};

//console.log(this.stepNum);
</script>

<style>
</style>