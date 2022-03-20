<template>
  <div class="body">
    <Navbar />
    <div class="wrapper">
    </div>
    <!-- <div class="footer"></div> -->
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.body {
  flex-direction: column;
}
.wrapper {
  background-image: url('../../../public/images/Lobby/平台svg/lobby_bg.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  position: fixed;
  min-width: 100%;
  min-height: 100vh;
}
// .footer {
//   background-image: url('../../../public/images/Lobby/平台svg/lobby_bot_bar.svg');
//   background-repeat: no-repeat;
//   position: absolute;
//   background-position: center;
//   background-size: cover;
//   width: 100%;
//   height: .6rem;
//   bottom: 0;
//   right: 0;
// }
</style>

<script>
import Navbar from '../../components/FrontNavbar.vue'
import Footer from '@/components/FooterItem.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar, Footer
  }
}
</script>
