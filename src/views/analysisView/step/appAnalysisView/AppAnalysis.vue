<template>
  <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
</template>

<script>
export default {
  name: "AppAnalysis",
  created() {
    initWebSocket();
  },
};

function initWebSocket() {
  const wsurl = `${location.protocol === "https:" ? "wss" : "ws"}://${
    location.host
  }/api/ws`;
  const websock = new WebSocket(wsurl);
  websock.onopen = () => {
    console.log("ws连接成功!");
    websock.send("Hello Server!");
  };
}
</script>

<style>
</style>