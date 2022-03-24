<template>
  <main class="body">
    <Navbar />
    <div class="wrapper">
      <Modal />
      <router-view />
    </div>
    <Footer />
  </main>
</template>

<style lang="scss" scoped>
.body {
  flex-direction: column;
}
.wrapper {
  background-image: url('../../../public/images/Lobby/平台svg/lobby_bg.svg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: calc(100vh - 1.3rem);
  display: flex;
  align-items: center;
}
.routerView {
  background: black;
}
</style>

<script>
import Navbar from '../../components/FrontNavbar.vue'
import Footer from '@/components/FooterItem.vue'
import Modal from '../../components/ModalItem.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar, Footer, Modal
  }
}
</script>
