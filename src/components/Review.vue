<template>
  <article class="media box">
    <figure class="media-left">
      <p class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ this.review.email }}</strong>

          <br />
          {{ this.review.content }}
          <br />
         Rating :{{ this.review.rating }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  created() {
    console.log(this.review.showId);
  },
  props: ["review"]
};
</script>
