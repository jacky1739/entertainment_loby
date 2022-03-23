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
            <li class="menu__idBg">
                <span><img class="menu__icon" src="../../../public/images/Lobby/平台svg/lobby_player_id_icon.svg" alt=""></span><p class="menu__id">ID12345678</p>
            </li>
            <li>
                <a href="#"><img src="../../../public/images/Lobby/平台svg/list_searchbet_normal.svg" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="../../../public/images/Lobby/平台svg/list_accountdetail_normal.svg" alt=""></a>
            </li>
        </ul>
        <ul class="content">
            <li class="content__btn__group">
                <div class="d-flex">
                    <a href="#">
                        <img src="../../../public/images/Lobby/平台svg/list_betdetail1_normal.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="../../../public/images/Lobby/平台svg/list_betdetail2_normal.svg" alt="">
                    </a>
                </div>
                <div>
                    <a href="#">
                      <img src="../../../public/images/Lobby/平台svg/list_betdetail1_normal.svg" alt="">
                    </a>
                </div>
            </li>
            <li class="d-flex h">
                <p>查詢時間</p>
                <input type="text">
                <p>~</p>
                <input type="text">
                <input type="text">
                <p>遊戲類型</p>
                <input type="text">
            </li>
            <li>
                <table class="content__table">
                    <thead class="content__table__thead">
                        <tr>
                            <th>日期</th>
                            <th>遊戲類型</th>
                            <th>房間</th>
                            <th>下注點數</th>
                            <th>贏得點數</th>
                            <th>會員輸贏</th>
                        </tr>
                    </thead>
                    <tbody class="content__table__tbody">
                        <tr>
                            <td>2022-03-02</td>
                            <td>AK滿天星</td>
                            <td>1234</td>
                            <td>1000.0000</td>
                            <td>100.0000</td>
                            <td>-900.0000</td>
                        </tr>
                    </tbody>
                </table>
            </li>
            <li class="d-flex justify-content-space-between total">
                <p>總筆數: 1000000</p>
                <p>總下注數: 12,345,678.0000</p>
                <p>總派彩: 12,345,678.0000</p>
                <p>會員輸贏: 1,234,567.0000</p>
            </li>
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
    &__idBg {
        height: 1rem;
        background-image: url('../../../public/images/Lobby/平台svg/lobby_player_id_bg.svg');
        background-repeat: no-repeat;
        background-size: 70%;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__icon {
        width: .3rem;
    }
    &__id {
        color: white;
    }
  }
  .content {
    width: 100%;
    // background: black;
  }
}
.content {
  padding: .5rem .9rem;
  width: 100%;
  background: #000;
  &__btn__group {
    justify-content: space-between;
    display: flex;
    margin-bottom: .3rem;
  }
  &__table {
    border: 1px solid white;
    width: 100%;
    &__thead {
      tr {
        th {
          width: calc(100% / 6);
          text-align: center;
          padding: .2rem;
          font-size: .2rem;
        }
      }
    }
  }
}
.total {
    p {
        font-size: .18rem;
    }
}
</style>
