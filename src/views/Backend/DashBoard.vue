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
    <div class="main__box d-flex">
        <ul class="menu">
            <li></li>
            <li><a href="#"><img src="../../../public/images/Lobby/平台svg/list_searchbet_normal.svg" alt=""></a></li>
            <li><a href="#"><img src="../../../public/images/Lobby/平台svg/list_accountdetail_normal.svg" alt=""></a></li>
        </ul>
        <ul class="content">
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import '../../style/mixin';
.nav {
  background-image: url('../../../public/images/Lobby/平台svg/lobby_top_bar.svg');
  background-repeat: no-repeat;
  background-position: center bottom 12%;
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
.main__box {
  height: calc(100vh - .7rem);
  .menu {
    background-image: url('../../../public/images/Lobby/平台svg/list_leftbar.svg');
    width: 30%;
  }
  .content {
    width: 100%;
    background: black;
  }
}
</style>
