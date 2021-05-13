<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="(item, i) in items" :key="i">
          <v-card class="mx-auto">
            <div>
              <v-icon x-large>mdi-cellphone</v-icon>
            </div>

            <div>
              {{ item.title }}
              <div>
                {{ item.num }}
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: "mdi-cellphone", title: "我的应用", num: 2 },
      { icon: "mdi-cellphone", title: "我的报告", num: 3 },
    ],
  }),
};
</script>

<style>
</style>