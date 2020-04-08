<template>
  <div>
    <b-message :title="title" :type="type" aria-close-label="Close message">{{content}}</b-message>
  </div>
</template>
<script>
export default {
  props: ["type", "title", "content"]
};
</script>

