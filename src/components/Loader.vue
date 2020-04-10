<template>
  <section>
    <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
  </section>
</template>

<script>
export default {
  props: ["isLoading"]
};
</script>