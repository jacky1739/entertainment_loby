<template>
  <main id="popContainer">
    <Navbar />
    <div class="wrapper">
      <Modal />
      <router-view />
    </div>
    <Footer />
  </main>
</template>

<style lang="scss" scoped>
#popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
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
