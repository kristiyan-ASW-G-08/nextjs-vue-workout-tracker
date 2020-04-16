<template>
  <section class="section">
    <div class="box form">
      <b-field label="Email">
        <b-input v-model.trim="$v.email.$model" placeholder="Email"></b-input>
      </b-field>
      <p class="help is-danger" v-if="!$v.email.email">Enter a valid email address</p>
      <b-field label="Password">
        <b-input
          type="password"
          placeholder="Password"
          v-model.trim="$v.password.$model"
          password-reveal
        ></b-input>
      </b-field>
      <p class="help is-danger" v-if="!$v.password.minLength">Password must be atleast 8 characters</p>
      <div class="field is-grouped">
        <div class="control">
          <b-button @click="submit">Sign Up</b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, minLength, between, email } from "vuelidate/lib/validators";
import db from "@/firebase/init";
import firebase from "firebase";
import authCredentials from "@/mixins/authCredentials";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  mixins: [authCredentials],
  methods: {
    submit() {
      if (!this.$v.$invalid) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        this.$router.push("/");
      }
    }
  }
};
</script>
