<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img style="object-fit:cover" :src="this.show.image_thumbnail_path" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ this.show.name }}</p>
          <p class="subtitle is-6">{{ this.show.network }}</p>

          <p class="subtitle is-6">
            <router-link :to="`/show/${this.show.id}`">Learn More</router-link>
          </p>
        </div>
      </div>
    </div>
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
