<template>
  <div>
    <show-step></show-step>
  </div>
</template>

<script>
import ShowStep from "./step/StepView.vue";
export default {
  components: { ShowStep },
  created() {
    this.initWebSocket();
  },
  methods: {
    initWebSocket() {
      const wsurl = `${location.protocol === "https:" ? "wss" : "ws"}://${
        location.host
      }/api/ws`;

      const ws = new WebSocket(wsurl, [
        "access_token",
        localStorage.getItem("token"),
      ]);
      ws.onopen = () => {
        console.log("ws连接成功!");
        ws.send("Hello Server!");
      };
      ws.onmessage = this.wsmessage;
      ws.onerror = (event) => {
        console.log(event);
      };
      ws.onclose = (e) => {
        console.log(e.code + " " + e.reason + " " + e.wasClean);
        console.log(e);
      };
    },
    wsmessage(e) {
      console.log(e);
    },
  },
};
</script>

<style>
</style>