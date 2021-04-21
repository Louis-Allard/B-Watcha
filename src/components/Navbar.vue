<template>

  <b-navbar class="navbar" sticky toggleable="lg" type="light" variant="none">
    <b-navbar-brand><router-link :to="{ name: 'Main'}">{{ navbar.name }}</router-link></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav right>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="nav-link"><router-link :to="{ name: 'Main'}">Main</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<script>
import { navbar } from "../lng/fr";
import "../sass/navbar.scss";

export default {
  name: "Navbar",
  data() {
    return {
      navbar,
    }
  },
};
</script>
.