<template>
  <div class="projects">
    <Header
      :title="title"
    />
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
  name: 'Projects',
  data() {
    return {
      title: 'Projects',
      items: [
        {
          id: 0,
          title: 'Website',
          subtitle: 'Vue.js, bulma.css',
          content: 'HELLO',
          imgSrc: 'https://webcms3.cse.unsw.edu.au/static/uploads/profilepic/z9300162/47aa34325fe95d7309fdc5fa5d60a2e3997c515639eaee8a4b6cee7532de217a/DSCN0985-01.jpeg',
          imgAlt: 'Frog',
          footer: 'GitHub',

        }
      ]
    }
  }
}
</script>