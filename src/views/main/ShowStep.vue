<template>
  <v-stepper v-model="stepNum">
    <v-stepper-header>
      <v-stepper-step :complete="stepCom.getInfoCheck" step="1" editable
        >应用基本信息</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step :complete="stepCom[1]" step="2" editable
        >Name of step 2</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step step="3" editable>Name of step 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <show-app-info></show-app-info>

        <v-btn color="primary" @click="stepCom[0] = true"> Continue </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="stepCom[1] = true"> Continue </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="stepCom[0] = false"> Continue </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import ShowAppInfo from "./ShowAppInfo.vue";

export default {
  components: { ShowAppInfo },
  data() {
    return {
      stepCom: { getInfoCheck: false },
      stepNum: 1,
    };
  },
};
</script>

<style>
</style>