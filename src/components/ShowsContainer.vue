<template>
  <div>
    <Message
      v-if="error"
      title="Alert"
      type="is-danger"
      content="Something went wrong"
    />
    <Loader v-if="isLoading" :isLoading="isLoading" />
    <section class="columns section is-multiline">
      <div
        class="column is-one-quarter"
        v-bind:key="show.id"
        v-for="show in shows"
      >
        <Show v-bind:show="show" />
      </div>
    </section>
    <section class="section">
      <div class="field is-grouped">
        <div class="control">
          <router-link to="/shows/1">
            <b-button>See More</b-button></router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Message from "./Message";
import Loader from "./Loader";
import Show from "./Show";
import axios from "axios";
export default {
  components: {
    Message,
    Loader,
    Show
  },
  created() {
    axios
      .get("https://www.episodate.com/api/most-popular?page=1")
      .then(({ data: { page, pages, tv_shows } }) => {
        this.pages = pages;
        this.page = page;
        this.shows = tv_shows;

        console.log(this.shows);
      })
      .catch(() => (this.error = true));
  },
  data() {
    return {
      isLoading: false,
      error: false,
      shows: [],
      pages: 0,
      page: 0
    };
  },
  methods: {
    next() {
      this.$buefy.notification.open("Clicked!!");
    },
    prev() {
      this.$buefy.notification.open("Clicked!!");
    }
  }
};
</script>
