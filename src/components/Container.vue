<template>
  <div class="container">
    <br />
    <h1 class="title is-4">{{ title }}</h1>
    <div v-for="item in items" :key="item.id">
      <Card
        :title="item.title"
        :subtitle="item.subtitle"
        :imgSrc="item.imgSrc"
        :imgAlt="item.imgAlt"
        :content="item.content"
        :footer="item.footer"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    title: String,
    items: Array
  }
}
</script>

<style scoped>
</style>
