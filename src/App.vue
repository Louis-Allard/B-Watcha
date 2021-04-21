<template>
  <div id="app">   
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./sass/global.scss";
export default {
  name: "App",
  data(){
    return {
    }
},
  components: {
    Navbar,
  }
};
</script>