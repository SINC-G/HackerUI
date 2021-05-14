<template>
  <v-navigation-drawer permanent app clipped>
    <v-list nav flat>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { title: "控制台", icon: "mdi-view-dashboard", to: { name: "Manager" } },
      {
        title: "我的应用",
        icon: "mdi-view-dashboard",
        to: { name: "Application" },
      },
      { title: "我的报告", icon: "mdi-account-box" },
    ],
  }),
};
</script>

<style>
</style>