<template>
  <div class="navbar">
    <nav id="nav" class="navbar">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src=@/assets/logo.png />
        </router-link>
        <a class="navbar-burger burger" :class="{ 'is-active': isActive }" @:click="this.isActive = !this.isActive">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/about">About</router-link>
          <router-link class="navbar-item" to="/experience">Experience</router-link>
          <router-link class="navbar-item" to="/projects">Projects</router-link>
          <a class="navbar-item" href="https://github.com/Gribbenator/" target="_blank">Github</a>
          <a class="navbar-item" href="https://www.linkedin.com/in/michael-gribben/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isActive: false
    }
  }
}
</script>
