<template>
  <div>
    <v-slide-group v-model="model">
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
      <div v-if="model != null">
        <v-chip-group multiple v-model="selected">
          <v-chip v-for="(s, i) in infoSelect" :key="i" filter>
            {{ s }}
          </v-chip>
        </v-chip-group>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: null,
    items: ["apkparser"],
    infoSelect: ["基本信息", "应用文件树"],
    selected: [0],
  }),
};
</script>

<style>
</style>