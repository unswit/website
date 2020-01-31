<template>
  <div class="card tile is-4 is-vertical">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src=imgSrc :alt=imgAlt>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ title }}</p>
          <p class="subtitle is-6">{{ subtitle }}</p>
        </div>
      </div>
      <div class="content"><p>
        {{ content }}
        <br>
        {{ startTime }} - {{ endTime }}
      </p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    subtitle: String,
    imgSrc: String,
    imgAlt: String,
    content: String,
    startTime: String,
    endTime: String,
  }
}
</script>

<style scoped>
</style>
