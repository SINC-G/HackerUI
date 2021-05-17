<template>
  <v-card outlined>
    <v-card-title> 分析管理 </v-card-title>

    <v-container>
      <div v-for="(app, i) in analyseList" :key="i">
        <app-analyse-card :title="app.name"></app-analyse-card>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import AppAnalyseCard from "./AppAnalyseCard.vue";
export default {
  components: { AppAnalyseCard },
  data: () => ({
    analyseList: [],
  }),
  created() {
    this.analyseList.push(this.$route.params.createInfo);
    console.log(this.analyseList);
  },
};
</script>

<style>
</style>