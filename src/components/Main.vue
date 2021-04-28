<template>
  <div>
    Hello World
    <p></p>
  </div>
</template>

<script>
import "../sass/global.scss";
export default {
  name: "Main",
  data() {
    return {
    };
  },
  methods: {
      test(){
        const text = localStorage.getItem;
        console.log("Response: " + text)
        }      
      },
  mounted() {
      this.test();
  },
};
</script>
