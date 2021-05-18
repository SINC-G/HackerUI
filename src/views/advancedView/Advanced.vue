<template>
  <div>
    <v-navigation-drawer app clipped>
      <ext-choose-side></ext-choose-side>
    </v-navigation-drawer>
    <v-main>
      <step-view></step-view>
    </v-main>
  </div>
</template>

<script>
import ExtChooseSide from "./ExtChooseSide.vue";
import StepView from "./step/StepView.vue";
export default {
  components: { StepView, ExtChooseSide },
};
</script>

<style>
</style>