<template>
  <v-card outlined>
    <v-card-title> 分析管理 </v-card-title>

    <v-container>
      <div>
        <app-analyse-card></app-analyse-card>
      </div>
    </v-container>
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