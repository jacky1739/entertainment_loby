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
            <li class="menu__betSearch">
                <a href="#"><img src="../../../public/images/Lobby/平台svg/list_searchbet_normal.svg" alt=""></a>
            </li>
            <li class="menu__accountList">
                <a href="#"><img src="../../../public/images/Lobby/平台svg/list_accountdetail_normal.svg" alt=""></a>
            </li>
        </ul>
        <ul class="content">
          <li class="content__btn__group">
            <div class="d-flex">
              <div class="content__betList1btn mr-2">
                <a href="#">
                  <img src="../../../public/images/Lobby/平台svg/list_betdetail1_normal.svg" alt="">
                </a>
              </div>
              <div class="content__betList2btn">
                <a href="#">
                  <img src="../../../public/images/Lobby/平台svg/list_betdetail2_normal.svg" alt="">
                </a>
              </div>
            </div>
            <div class="content__searchbtn">
              <a href="#">
                <img src="../../../public/images/Lobby/平台svg/list_search.svg" alt="">
              </a>
            </div>
          </li>
          <li class="search__group">
            <p class="search__group__text">查詢時間：</p>
            <div class="d-flex justify-content-space-between align-items-center">
              <Datepicker v-model="picked" style="
                margin-right: calc(.01rem + 1.5vh);
                width: calc(1rem + 5vh);
                line-height: .4rem;
                text-align: center;
                background: black;
                color: white;
                font-size: .2rem;
                border-radius: 7px;
                border: 1.5px solid #856E8F;
                cursor: pointer;"
                >
              </Datepicker>
              <p class="search__group__text">～</p>
              <Datepicker v-model="picked" style="
                margin-right: calc(.01rem + 1.5vh);
                width: calc(1rem + 5vh);
                line-height: .4rem;
                text-align: center;
                background: black;
                color: white;
                font-size: .2rem;
                border-radius: 7px;
                border: 1.5px solid #856E8F;
                cursor: pointer;"
                >
              </Datepicker>
              <select class="search__group__select" name="date" id="date_select">
                <option value="本日">本日</option>
                <option value="昨日">昨日</option>
                <option value="本週">本週</option>
                <option value="上週">上週</option>
                <option value="本月">本月</option>
                <option value="上月">上月</option>
              </select>
            </div>
            <label class="search__group__text" for="game_select">遊戲類型：</label>
            <select class="search__group__select" name="games" id="game_select">
              <option value="">全部</option>
              <option value="5PK">5PK</option>
              <option value="7PK">7PK</option>
              <option value="滿天星">滿天星</option>
              <option value="百人幸運輪">百人幸運輪</option>
              <option value="小瑪莉">小瑪莉</option>
            </select>
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
              <div class="content__table__tbodyBox">
                <tbody class="content__table__tbody">
                  <tr>
                    <td>2022-03-02</td>
                    <td>AK滿天星</td>
                    <td>1234</td>
                    <td>1000.0000</td>
                    <td>100.0000</td>
                    <td>-900.0000</td>
                  </tr>
                  <tr>
                    <td>2022-03-02</td>
                    <td>AK滿天星</td>
                    <td>1234</td>
                    <td>1000.0000</td>
                    <td>100.0000</td>
                    <td>-900.0000</td>
                  </tr>
                  <tr>
                    <td>2022-03-02</td>
                    <td>AK滿天星</td>
                    <td>1234</td>
                    <td>1000.0000</td>
                    <td>100.0000</td>
                    <td>-900.0000</td>
                  </tr>
                  <tr>
                    <td>2022-03-02</td>
                    <td>AK滿天星</td>
                    <td>1234</td>
                    <td>1000.0000</td>
                    <td>100.0000</td>
                    <td>-900.0000</td>
                  </tr>
                  <tr>
                    <td>2022-03-02</td>
                    <td>AK滿天星</td>
                    <td>1234</td>
                    <td>1000.0000</td>
                    <td>100.0000</td>
                    <td>-900.0000</td>
                  </tr>
                  <tr>
                    <td>2022-03-02</td>
                    <td>AK滿天星</td>
                    <td>1234</td>
                    <td>1000.0000</td>
                    <td>100.0000</td>
                    <td>-900.0000</td>
                  </tr>
                  <tr>
                    <td>2022-03-02</td>
                    <td>AK滿天星</td>
                    <td>1234</td>
                    <td>1000.0000</td>
                    <td>100.0000</td>
                    <td>-900.0000</td>
                  </tr>
                  <tr>
                    <td>2022-03-02</td>
                    <td>AK滿天星</td>
                    <td>1234</td>
                    <td>1000.0000</td>
                    <td>100.0000</td>
                    <td>-900.0000</td>
                  </tr>
                  <tr>
                    <td>2022-03-02</td>
                    <td>AK滿天星</td>
                    <td>1234</td>
                    <td>1000.0000</td>
                    <td>100.0000</td>
                    <td>-900.0000</td>
                  </tr>
                  <tr>
                    <td>2022-03-02</td>
                    <td>AK滿天星</td>
                    <td>1234</td>
                    <td>1000.0000</td>
                    <td>100.0000</td>
                    <td>-900.0000</td>
                  </tr>
                  <tr>
                    <td>2022-03-02</td>
                    <td>AK滿天星</td>
                    <td>1234</td>
                    <td>1000.0000</td>
                    <td>100.0000</td>
                    <td>-900.0000</td>
                  </tr>
                  <tr>
                    <td>2022-03-02</td>
                    <td>AK滿天星</td>
                    <td>1234</td>
                    <td>1000.0000</td>
                    <td>100.0000</td>
                    <td>-900.0000</td>
                  </tr>
                  <tr>
                    <td>2022-03-02</td>
                    <td>AK滿天星</td>
                    <td>1234</td>
                    <td>1000.0000</td>
                    <td>100.0000</td>
                    <td>-900.0000</td>
                  </tr>
                </tbody>
              </div>
            </table>
          </li>
          <li class="d-flex justify-content-space-between">
            <p class="total__price">總筆數: 1000000</p>
            <p class="total__price">總下注數: 12,345,678.0000</p>
            <p class="total__price">總派彩: 12,345,678.0000</p>
            <p class="total__price">會員輸贏: 1,234,567.0000</p>
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
  background-size: 200%;
  height: .77rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(.12rem + 3vh);
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
  height: calc(100vh - .75rem);
  .menu {
    background-image: url('../../../public/images/Lobby/平台svg/list_leftbar.svg');
    width: 20%;
    &__icon {
      height: .3rem;
    }
    &__idBg {
        height: 1rem;
        background-image: url('../../../public/images/Lobby/平台svg/lobby_player_id_bg.svg');
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__id {
      line-height: .3rem;
      font-size: .25rem;
      color: white;
    }
  }
}
.content {
  // padding: .5rem .9rem;
  padding: calc(.2rem + 3vh);
  width: 80%;
  background: #000;
  &__btn__group {
    justify-content: space-between;
    display: flex;
    margin-bottom: .3rem;
  }
  &__table {
    border: 1px solid #856E8F;
    width: 100%;
    height: calc(100vh - 4rem);
    border-radius: 10px;
    display: block;
    overflow-y: scroll;
    overflow-x: hidden;
    &__thead {
      tr {
        background: #533963;
        width: 100%;
        th {
          color: #FFE08B;
          width: 10rem;
          text-align: center;
          padding: .15rem .2rem;
          font-size: calc(.01rem + 2vh);
          border-bottom: 2px solid #856E8F;
          // border-right: 2px solid #856E8F;
          font-weight: lighter;
        }
      }
    }
    &content__table__tbodyBox {
      overflow-x: scroll;
    }
    &__tbody {
      tr {
        td {
          text-align: center;
          padding: .2rem;
          font-size: calc(.01rem + 2vh);
        }
      }
    }
  }
}
.search__group {
  display: flex;
  justify-content: space-between;
  height: .4rem;
  margin-bottom: .3rem;
  &__text {
    margin-right: calc(.01rem + 1.5vh);
    line-height: .4rem;
    font-size: calc(.1rem + 1vh);
  }
  &__select {
    width: calc(1rem + 1vh);
    height: .4rem;
    line-height: 0.4rem;
    text-align: center;
    background: black;
    color: white;
    font-size: 0.15rem;
    border-radius: 7px;
    border: 1.5px solid rgb(133, 110, 143);
    cursor: pointer;
  }
}
.total__price {
  font-size: calc(.1rem + 1vh);
}
.menu__betSearch:hover, .menu__accountList:hover {
  filter: brightness(1.3);
}
.backBtn:hover, .content__searchbtn:hover, .content__betList2btn:hover, .content__betList1btn:hover {
  filter: brightness(1.2);
}
</style>

<script>
import Datepicker from 'vue3-datepicker'

export default {
  components: { Datepicker },
  data () {
    return {
      picked: new Date(),
      datePicker: {
        '--width': '21.5em',
        '--vdp-bg-color': '#ffffff',
        '--vdp-text-color': '#000000',
        '--vdp-box-shadow': '0 4px 10px 0 rgba(128, 144, 160, 0.1), 0 0 1px 0 rgba(128, 144, 160, 0.81)',
        '--vdp-border-radius': '3px',
        '--vdp-heading-size': '2.5em',
        '--vdp-heading-weight': 'bold',
        '--vdp-heading-hover-color': '#eeeeee',
        '--vdp-arrow-color': 'currentColor',
        '--vdp-elem-color': 'currentColor',
        '--vdp-disabled-color': '#d5d9e0',
        '--vdp-hover-color': '#ffffff',
        '--vdp-hover-bg-color': '#0baf74',
        '--vdp-selected-color': '#ffffff',
        '--vdp-selected-bg-color': '#0baf74',
        '--vdp-elem-font-size': '0.8em',
        '--vdp-elem-border-radius': '3px',
        '--vdp-divider-color': '#d5d9e0'
        // https://icehaunter.github.io/vue3-datepicker/config.html#styling-example-and-playground
      }
    }
  }
}
</script>
