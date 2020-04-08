<template>
  <div>
    <Message v-if="error" title="Alert" type="is-danger" content="Something went wrong" />
    <Loader v-if="loading" :loading="loading" />
  </div>
</template>
<script>
import Message from "./Message";
import Loader from "./Loader";
export default {
  components: {
    Message,
    Loader
  },
  data() {
    return {
      isLoading: false,
      post: null,
      error: null
    };
  }
};
</script>

