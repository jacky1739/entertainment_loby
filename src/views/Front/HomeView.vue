<template>
  <Navbar />
  <div class="wrapper">
      <div class="body">
        <div class="container">
          <router-view />
        </div>
      </div>
      <div class="footer"></div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
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
</style>

<script>
import Navbar from '../../components/FrontTest.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar
  }
}
</script>
