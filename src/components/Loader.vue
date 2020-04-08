<template>
  <section>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
  </section>
</template>

<script>
export default {
  props: ["isLoading"],
  methods: {
    openLoading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 10 * 1000);
    }
  }
};
</script>