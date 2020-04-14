<template>
  <section class="section">
    <div class="box form">
      <b-field label="Review">
        <b-input
          v-model.trim="$v.content.$model"
          placeholder="Review"
        ></b-input>
      </b-field>
      <p class="help is-danger" v-if="!$v.content.required">
        Your review is too short
      </p>
      <b-field label="Rating">
        <b-input
          type="number"
          min="1"
          max="10"
          v-model.trim="$v.rating.$model"
        ></b-input>
      </b-field>
      <p class="help is-danger" v-if="!$v.rating.between">
        Rating must be between 1 and 10
      </p>

      <div class="field is-grouped">
        <div class="control">
          <b-button @click="submit">Add</b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, minLength, between, email } from "vuelidate/lib/validators";
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  data() {
    return {
      content: "",
      rating: 1
    };
  },
  validations: {
    rating: {
      required,
      between: between(1, 10)
    },
    content: {
      required,
      minLength: minLength(5)
    }
  },
  methods: {
    submit() {
      if (!this.$v.$invalid) {
        db.collection("reviews").add({
          showId: this.$route.params.showId,
          content: this.content,
          rating: this.rating
        });

        this.$router.push(`/show/${this.$route.params.showId}`);
      }
    }
  }
};
</script>
