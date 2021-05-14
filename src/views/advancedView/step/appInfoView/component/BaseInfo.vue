<template>
  <v-simple-table fixed-header height="300px" dense>
    <template v-slot:default>
      <tbody>
        <tr v-for="(value, name) in apkInfo" :key="name">
          <td>{{ name }}</td>
          <td>{{ value }}</td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    apkInfo: Object,
  },
};
</script>

<style>
</style>