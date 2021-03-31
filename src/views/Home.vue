<template>
  <div class="home">
    <upload-input></upload-input>
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
