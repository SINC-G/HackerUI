<template>
  <v-card>
    <v-card-title> 分析管理 </v-card-title>

    <div>
      <app-analyse-card></app-analyse-card>
    </div>
  </v-card>
</template>

<script>
import AppAnalyseCard from "./AppAnalyseCard.vue";
export default {
  components: { AppAnalyseCard },
};
</script>

<style>
</style>