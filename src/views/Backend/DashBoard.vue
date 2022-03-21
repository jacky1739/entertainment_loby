<template>
    <nav class="nav">
        <div class="logo">
            <img src="../../../public/images/Lobby/平台svg/list_title_personal.svg" alt="">
        </div>
        <div class="backBtn">
            <a href="#">
                <img src="../../../public/images/Lobby/平台svg/btn_back_press.svg" alt="">
            </a>
        </div>
    </nav>
    <div class="content">
        <section class="content__sideBar">
            <div></div>
            <ul>
                <li></li>
                <li></li>
            </ul>
        </section>
        <main></main>
    </div>
</template>

<style lang="scss" scoped>
@import '../../style/mixin';
.nav {
  background-image: url('../../../public/images/Lobby/平台svg/lobby_top_bar.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: .77rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .3rem;
  .logo {
    height: .5rem;
    width: auto;
  }
  .backBtn {
    height: .7rem;
    width: .7rem;
  }
}
.content {
  width: auto;
  height: calc(100vh - .77rem);
  &__sideBar {
    background-image: url('../../../public/images/Lobby/平台svg/list_leftbar.svg');
    height: 100%;
    width: 20%;
  }
}
</style>
