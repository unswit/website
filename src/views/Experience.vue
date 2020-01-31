<template>
  <div class="experience">
    <section class="hero is-info">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">{{ title }}</h1>
          </div>
        </div>
      </section>
    <div v-for="item in items" :key="item.id">
      <Container
        :title="item.title"
        :items="item.items"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      title: 'Experience',
      items: [
        {
          id: 0,
          title: 'Current Work',
          items: [
            {
              title: 'Tutor',
              subtitle: 'Prime Education',
              content: 'HELLO',
              imgSrc: 'https://webcms3.cse.unsw.edu.au/static/uploads/profilepic/z9300162/47aa34325fe95d7309fdc5fa5d60a2e3997c515639eaee8a4b6cee7532de217a/DSCN0985-01.jpeg',
              imgAlt: 'Test',
              startTime: 'January 2019',
              endTime: 'present'
            }
          ]
        }, {
          id: 1,
          title: 'Volunteering',
          items: [
            {
              title: 'CompClub Mentor',
              subtitle: 'Computer Science & Engineering Society UNSW',
              content: 'HELLO'
            }
          ]
        }
      ]
    }
  }
}
</script>