<template>
  <section class="section columns">
    <div class="column is-half">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="this.show.image_path" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left"></div>
            <div class="media-content">
              <p class="title is-4">{{this.show.name}}</p>
              <p class="subtitle is-6">{{this.show.network}}</p>
            </div>
          </div>

          <div class="content">{{this.show.description}}</div>
        </div>
      </div>
    </div>
    <div class="column is-half">
      <b-carousel :indicator-inside="false">
        <b-carousel-item v-for="(item, i) in 6" :key="i">
          <span class="image">
            <img :src="getImgUrl(i)" />
          </span>
        </b-carousel-item>
        <template slot="indicators" slot-scope="props">
          <span class="al image">
            <img :src="getImgUrl(props.i)" :title="props.i" />
          </span>
        </template>
      </b-carousel>
    </div>
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
      show: {}
    };
  },
  components: {
    ShowsContainer,
    Loader
  },
  methods: {
    getImgUrl(index) {
      return this.show.pictures[index] || [];
    },

    fetchData() {
      console.log(this.$route.params.showId);
      axios
        .get(
          `https://www.episodate.com/api/show-details?q=${this.$route.params.showId}`
        )
        .then(data => {
          this.show = data.data.tvShow;
          console.log(this.show);
        })
        .catch(() => (this.error = true));
    }
  }
};
</script>
