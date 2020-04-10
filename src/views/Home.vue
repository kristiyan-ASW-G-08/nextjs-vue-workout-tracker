<template>
  <section>
    <Loader v:if="this.isLoading" :isLoading="this.isLoading" />
    <ShowsContainer :shows="this.shows" />
    <section class="section">
      <div class="field is-grouped">
        <div class="control">
          <router-link to="/shows/1">
            <b-button>See More</b-button>
          </router-link>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import ShowsContainer from "../components/ShowsContainer";
import Loader from "../components/Loader";
import axios from "axios";
export default {
  created() {
    axios
      .get(`https://www.episodate.com/api/most-popular?page=1`)
      .then(({ data: { page, pages, tv_shows } }) => {
        this.pages = pages;
        this.page = page;
        this.shows = tv_shows;
        this.isLoading = false;

        console.log(this.shows);
      })
      .catch(() => (this.error = true));
  },
  data() {
    return {
      isLoading: true,
      error: false,
      shows: [],
      pages: 0,
      page: 0
    };
  },
  components: {
    ShowsContainer,
    Loader
  }
};
</script>
