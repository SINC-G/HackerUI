<template>
  <div>
    <v-slide-group v-model="selectedParser">
      <v-slide-item
        v-slot="{ active, toggle }"
        v-for="(item, i) in items"
        :key="i"
      >
        <v-btn
          depressed
          rounded
          class="mb-2"
          @click="toggle"
          :input-value="active"
          active-class="purple white--text"
          >{{ item }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
    <v-expand-transition>
      <div v-if="selectedParser != null">
        <v-chip-group multiple v-model="selectedComponent">
          <v-chip
            v-for="(value, key) in selectInfo"
            :key="key"
            filter
            :value="key"
          >
            {{ value.name }}
          </v-chip>
        </v-chip-group>
      </div>
    </v-expand-transition>
    <v-divider></v-divider>
    <v-container>
      <show-info :selectInfo="selectedComponent"></show-info>
    </v-container>
  </div>
</template>

<script>
import ShowInfo from "./ShowInfo.vue";
export default {
  components: { ShowInfo },
  data: () => ({
    items: ["apkparser"],
    selectedComponent: ["baseinfo"],
    selectedParser: null,
    selectInfo: {
      baseinfo: { name: "基本信息" },
      filetree: { name: "应用文件树" },
      activites: { name: "Activites" },
    },
  }),
  methods: {},
};
</script>

<style>
</style>