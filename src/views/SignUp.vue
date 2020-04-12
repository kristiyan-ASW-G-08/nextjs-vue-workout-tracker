<template>
  <section class="section">
    <div class="box form">
      <b-field label="Email" type="is-danger" message="This email is invalid">
        <b-input type="email" value="john@" maxlength="30"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password" value="iwantmytreasure" password-reveal></b-input>
      </b-field>

      <div class="field is-grouped">
        <div class="control">
          <b-button>Sign Up</b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Loader from "../components/Loader";
import axios from "axios";

export default {
  data() {
    return {};
  }
};
</script>
<style lang="css" scoped>
.form {
  margin: 2rem;
}
</style>
