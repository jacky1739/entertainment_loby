<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from '../components/FrontNavbar.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar
  }
}
</script>
