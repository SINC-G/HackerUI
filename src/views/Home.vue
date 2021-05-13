<template>
  <div class="home">
    <div>
      <v-text-field label="应用MD5" placeholder="请输入MD5" solo></v-text-field>
      或
      <upload-input style=""></upload-input>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UploadInput from "../components/UploadInput.vue";

export default {
  name: "Home",
  components: {
    UploadInput,
  },
};
</script>

<style>
.home {
  text-align: center;
  border-radius: 20px;
  width: 300px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>