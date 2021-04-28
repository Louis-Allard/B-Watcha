<template>
  <b-navbar class="navbar" sticky toggleable="lg" type="light" variant="none">
    <b-navbar-brand>B-Watcha</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item
        class="nav-item"
        v-for="(genre, key) in genres"
        :key="key"
        @click="discover(genre.id)"
        >{{ genre.name }}</b-nav-item
      >
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import axios from "axios";
import "../sass/navbar.scss";
export default {
  name: "Navbar",
  props: {
  },
  data() {
    return {
      genres: [],
      movies: []

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
            this.genres.push(genres[i]);
          }
        });
    },
    discover(g) {
      axios
        .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=9132ab9c1b6b3b76b975589da594226b&language&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=` + g
        )
        .then((response) => {
          const movies = response.data["results"]
          this.movies = [];
          for (let i = 0; i < movies.length; i++) {
            this.movies.push(movies[i]["original_title"]);
          }
          console.log("movies : ", this.movies);
        });
    }
  },
  mounted() {
    this.load();
  },
};
</script>
