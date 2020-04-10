<template>
  <section class="section">
    <div class="box">
      <b-field label="Email" type="is-danger" message="This email is invalid">
        <b-input type="email" value="john@" maxlength="30"></b-input>
      </b-field>

      <b-field
        label="Password"
        type="is-warning"
        :message="['Password is too short', 'Password must have at least 8 characters']"
      >
        <b-input value="123" type="password" maxlength="30"></b-input>
      </b-field>

      <b-field label="Subject">
        <b-select placeholder="Select a subject">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </b-select>
      </b-field>
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
