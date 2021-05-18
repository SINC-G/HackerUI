<template>
  <v-stepper vertical v-model="stepNum">
    <v-stepper-step step="1" :complete="stepNum > 1">
      应用反编译
    </v-stepper-step>

    <v-stepper-step step="2" :complete="stepNum > 2">
      应用安全分析
    </v-stepper-step>
  </v-stepper>
</template>

<script>
export default {
  name: "AppAnalysis",
  data() {
    return {
      stepNum: 1,
      ws: null,
    };
  },
  created() {
    this.ws = this.initWebSocket();
  },
  methods: {
    initWebSocket() {
      const wsurl = `${location.protocol === "https:" ? "wss" : "ws"}://${
        location.host
      }/api/ws`;

      const ws = new WebSocket(wsurl, [
        "access_token",
        localStorage.getItem("token").split(" ")[1],
      ]);
      ws.onopen = () => {
        //console.log("ws连接成功!");
        ws.send(JSON.stringify({ code: 2001, status: "start" }));
      };
      ws.onmessage = (event) => {
        //console.log(event);
        //console.log(event.data);
        console.log(JSON.parse(event.data));
      };
      ws.onerror = (event) => {
        console.log(event);
      };
      ws.onclose = (e) => {
        console.log(e.code + " " + e.reason + " " + e.wasClean);
        console.log(e);
      };

      return ws;
    },
  },
  destroyed() {
    this.ws.close();
  },
};

//console.log(this.stepNum);
</script>

<style>
</style>