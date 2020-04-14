<template>
  <div>
    <section class="section columns">
      <div class="column is-half">
        <div class="card" v-if="this.show">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="this.show.image_path" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left"></div>
              <div class="media-content">
                <p class="title is-4">{{ this.show.name }}</p>
                <p class="subtitle is-6">{{ this.show.network }}</p>
              </div>
            </div>

            <div class="content">{{ this.show.description }}</div>
          </div>
        </div>
      </div>
      <div class="column is-half" v-if="this.show && this.show.pictures">
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
    <section class="section" style="text-align:center">
      <p class="title">Reviews</p>
      <div class="control" style="text-align:center">
        <b-button @click="comment">Add a Review</b-button>
      </div>
      <section class="columns section">
        <div class="column" v-bind:key="review.id" v-for="review in reviews">
          <Review v-bind:review="review" />
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import ShowsContainer from "../components/ShowsContainer";
import Loader from "../components/Loader";
import axios from "axios";
import Review from "@/components/Review";
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  created() {
    this.fetchData();
    if (firebase.auth().currentUser) {
      this.isAuth = true;
    }
  },
  watch: {
    $route: "fetchData"
  },
  data() {
    return {
      isLoading: true,
      error: false,
      show: {},
      reviews: [],
      isAuth: false
    };
  },
  components: {
    ShowsContainer,
    Loader,
    Review
  },
  methods: {
    getImgUrl(index) {
      if (this.show) {
        return this.show.pictures[index] || [];
      }
    },
    comment() {
      if (this.isAuth) {
        this.$router.push(`/reviews/${this.show.id}`);
      } else {
        this.$router.push("/login");
      }
    },

    fetchData() {
      axios
        .get(
          `https://www.episodate.com/api/show-details?q=${this.$route.params.showId}`
        )
        .then(data => {
          this.show = data.data.tvShow;
          db.collection("reviews")
            .where("showId", "==", this.$route.params.showId)
            .get()

            .then(snap => {
              this.reviews = snap.docs.map(doc => doc.data());
              console.log(this.reviews);
            });
        })
        .catch(() => (this.error = true));
    }
  }
};
</script>
