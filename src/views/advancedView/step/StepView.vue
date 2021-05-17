<template>
  <v-stepper v-model="stepNum">
    <v-stepper-header>
      <v-stepper-step :complete="stepCom.getInfoCheck" step="1" editable
        >应用基本信息</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step :complete="stepCom[1]" step="2" editable
        >应用安全分析</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step step="3" editable>安全分析报告</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-slide-group v-model="selectParser">
          <v-slide-item>
            <template v-solt:default="{ active, toggle }">
              <v-btn
                depressed
                rounded
                class="mb-2"
                @click="toggle"
                :input-value="active"
                >APKParser</v-btn
              >
            </template>
          </v-slide-item>
        </v-slide-group>
        <v-expand-transition>
          <div v-if="selectParser != null">test</div>
        </v-expand-transition>
        <v-divider></v-divider>
        <v-container>
          <show-app-info></show-app-info>
        </v-container>
      </v-stepper-content>

      <v-stepper-content step="2">
        <app-analysis></app-analysis>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import AppAnalysis from "./appAnalysisView/AppAnalysis.vue";
import ShowAppInfo from "./appInfoView/AppInfo.vue";

export default {
  components: { ShowAppInfo, AppAnalysis },
  data() {
    return {
      stepCom: { getInfoCheck: false },
      stepNum: 1,
      selectParser: null,
    };
  },
};
</script>

<style>
</style>