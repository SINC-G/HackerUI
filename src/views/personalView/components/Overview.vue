<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="3">
          <v-card>
            <v-card-title>
              {{ item.title }}
            </v-card-title>
            <div class="d-flex justify-center pb-2">
              <div class="text-h4 mr-10">{{ item.num }}</div>
              <div class="ml-10">
                <v-icon size="55px">{{ item.icon }}</v-icon>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card> <v-card-title>我的应用总览</v-card-title></v-card></v-col
        >
      </v-row>
      <v-row>
        <v-col>
          <app-control></app-control>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AppControl from "./AppControl.vue";
export default {
  components: { AppControl },
  data: () => ({
    items: [
      { icon: "mdi-cellphone", title: "我的应用", num: 2 },
      { icon: "mdi-file-chart", title: "我的报告", num: 3 },
    ],
  }),
};
</script>

<style>
</style>