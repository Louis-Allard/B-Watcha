<template>
  <b-navbar class="navbar" sticky toggleable="lg" type="light" variant="none">
    <b-navbar-brand>B-Watcha</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item
        class="nav-link"
        v-for="(genre, key) in genres"
        :key="key"
        >{{ genre }}</b-nav-item
      >
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import axios from "axios";
import "../sass/navbar.scss";
export default {
  name: "Navbar",
  data() {
    return {
      genres: [],
    };
  },
  methods: {
    load() {
      axios
        .get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=9132ab9c1b6b3b76b975589da594226b&language=en-US"
        )
        .then((response) => {
          const genres = response.data["genres"];
          for (let i = 0; i < genres.length; i++) {
            this.genres.push(genres[i]["name"]);
          }
          console.log(this.genres);
        });
    },
  },
  mounted() {
    this.load();
  },
};
</script>
