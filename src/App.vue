<template>
  <div id="app">   
    <Navbar />
    <Main />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
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
    Main,
  }
};
</script>