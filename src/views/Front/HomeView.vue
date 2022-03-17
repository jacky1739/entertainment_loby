<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from '../../components/FrontTest.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar
  }
}
</script>
