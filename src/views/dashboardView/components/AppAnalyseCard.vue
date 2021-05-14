<template>
  <v-card>
    <v-card-title>应用名</v-card-title>
    <v-card-actions
      ><v-btn>开始</v-btn
      ><v-btn :to="{ name: 'Advanced' }">切换至高级模式</v-btn></v-card-actions
    >
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>