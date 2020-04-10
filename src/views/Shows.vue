<template>
  <section>
    <Loader v:if="this.isLoading" :isLoading="this.isLoading" />
    <ShowsContainer :shows="this.shows" />
    <section class="section">
      <div class="field is-grouped">
        <div class="control" v-if="this.page < this.pages">
          <router-link :to="{ params: { currentPage: this.page + 1 } }">
            <b-button>Next</b-button>
          </router-link>
        </div>
        <div class="control" v-if="this.page !== 1">
          <router-link :to="{ params: { currentPage: this.page - 1 } }">
            <b-button>Prev</b-button>
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
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
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
  },
  methods: {
    fetchData() {
      const currentPage = this.$route.params.currentPage || 1;
      axios
        .get(`https://www.episodate.com/api/most-popular?page=${currentPage}`)
        .then(({ data: { page, pages, tv_shows } }) => {
          console.log(tv_shows[0], page);
          this.pages = pages;
          this.page = page;
          this.shows = tv_shows;
          this.isLoading = false;
          console.log(this.shows);
        })
        .catch(() => (this.error = true));
    }
  }
};
</script>
