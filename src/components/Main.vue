<template>
  <div>
    Hello World
    <p></p>
  </div>
</template>

<script>
import "../sass/global.scss";
import { movies } from "./Navbar";
export default {
  name: "Main",
  data() {
    return {};
  },
  methods: {
    test() {
      console.log("Response Main: ", movies);
    },
  },
  mounted() {
    this.test();
  },
};
</script>
