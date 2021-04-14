<template>
  <v-simple-table fixed-header height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">名称</th>
                <th class="text-center">值</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, name) in appInfoList" :key="name">
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

}
</script>

<style>

</style>