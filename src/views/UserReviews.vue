<template>
  <section cl>
    <p class="title" style="text-align:center" v-if="reviews.length === 0">No reviews Yet</p>
    <section class="columns section" v-if="reviews">
      <router-link
        :to="`/show/${review.showId}`"
        class="column"
        v-bind:key="review.id"
        v-for="review in reviews"
      >
        <Review v-bind:review="review" />
      </router-link>
    </section>
  </section>
</template>

<script>
import ShowsContainer from "@/components/ShowsContainer";
import Loader from "@/components/Loader";
import Review from "@/components/Review";
import axios from "axios";
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  created() {
    db.collection("reviews")
      .where("user", "==", firebase.auth().currentUser.email)
      .get()
      .then(snap => {
        this.reviews = snap.docs.map(doc => doc.data());
      });
  },
  data() {
    return {
      isLoading: true,
      error: false,
      reviews: []
    };
  },
  components: {
    Review,
    Loader
  }
};
</script>
