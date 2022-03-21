<template>
  <main class="body">
    <Navbar />
    <div class="wrapper">
      <router-view/>
    </div>
    <Footer />
  </main>
</template>

<style lang="scss" scoped>
.body {
  flex-direction: column;
}
.wrapper {
<<<<<<< HEAD
      display: flex;
      .body {
        background-image: url('../../../public/images/Lobby/平台svg/lobby_bg.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        position: fixed;
        width: 100%;
        height: calc(100% - .8rem);
      }
      .footer {
        background-image: url('../../../public/images/Lobby/平台svg/lobby_bot_bar.svg');
        background-repeat: no-repeat;
        position: absolute;
        width: 100%;
        height: .6rem;
        bottom: 0;
        right: 0;
      }
  }
=======
  background-image: url('../../../public/images/Lobby/平台svg/lobby_bg.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: calc(100vh - 1.3rem);
  display: flex;
  align-items: center;
}
>>>>>>> test
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
