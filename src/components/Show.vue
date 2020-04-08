<template>
  <div>
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>
<script>
export default {
  props: ["show"],
  data() {
    return {
      loading: false,
      post: null,
      error: null
    };
  }
};
</script>

