<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/github" target="_blank">Github</router-link>
      <router-link to="/linkedin" target="_blank">LinkedIn</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '~bulma/css/bulma.css';
</style>
