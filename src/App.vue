<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import '~bulma/css/bulma.css';
  #app {
    margin-bottom: 5rem;
  }
</style>
