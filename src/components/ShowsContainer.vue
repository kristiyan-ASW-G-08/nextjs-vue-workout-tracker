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
  props: ["shows"],
  data() {
    return {
      isLoading: false,
      error: false,
      pages: 0,
      page: 0
    };
  },
};
</script>
