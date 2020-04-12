<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }"></b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="/">Home</b-navbar-item>
      <b-navbar-item v-if="this.isAuth" href="/user/shows">My shows</b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons" v-if="!this.isAuth">
          <router-link class="button is-primary" to="/sign-up">Sign Up</router-link>
          <router-link class="button is-light" to="/login">Log In</router-link>
        </div>
        <div class="buttons" v-if="this.isAuth">
          <a class="button is-light">Log out</a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      isAuth: false
    };
  }
};
</script>

