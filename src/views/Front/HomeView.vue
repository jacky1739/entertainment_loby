<template>
  <Navbar />
  <router-view />
  <Footer></Footer>
</template>

<script>
import Navbar from '../../components/FrontNavbar.vue'
import Footer from '../../components/FrontFooter.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar, Footer
  }
}
</script>
