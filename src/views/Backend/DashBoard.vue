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
              <a class="mr-2" href="#">
                <img src="../../../public/images/Lobby/平台svg/list_betdetail1_normal.svg" alt="">
              </a>
              <a href="#">
                <img src="../../../public/images/Lobby/平台svg/list_betdetail2_normal.svg" alt="">
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../../../public/images/Lobby/平台svg/list_search.svg" alt="">
              </a>
            </div>
          </li>
          <li class="search__group">
            <div class="d-flex">
              <p class="search__group__text">查詢時間:</p>
              <Datepicker v-model="picked" style="width: 2.5rem;
                line-height: 0.4rem;
                text-align: center;
                background: black;
                color: white;
                font-size: .2rem;
                border-radius: 7px;
                border: 1px solid #856E8F;
                cursor: pointer;">
              </Datepicker>
              <p class="search__group__text">~</p>
              <Datepicker v-model="picked" style="width: 2.5rem;
                line-height: 0.4rem;
                text-align: center;
                background: black;
                color: white;
                font-size: .2rem;
                border-radius: 7px;
                border: 1px solid #856E8F;
                cursor: pointer">
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
            <label class="search__group__text" for="game_select">遊戲類型</label>
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
  padding: 0 .8rem 0 .3rem;
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
  padding: .5rem .9rem;
  width: 100%;
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
    overflow: scroll;
    &__thead {
      tr {
          background: #533963;
          width: 100%;
        th {
          color: #FFE08B;
          width: 10rem;
          text-align: center;
          padding: .15rem .2rem;
          font-size: .25rem;
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
          font-size: .2rem;
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
    line-height: .4rem;
    font-size: .3rem;
  }
  &__select {
    width: 200px;
    line-height: 0.4rem;
    text-align: center;
    background: black;
    color: white;
    font-size: 0.2rem;
    border-radius: 7px;
    border: 1px solid rgb(133, 110, 143);
    cursor: pointer;
  }
}
.total {
  p {
      font-size: .2rem;
  }
}
.backBtn:hover {
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
      dateSelect: [
        {
          title: '本日',
          value: '本日'
        },
        {
          title: '昨日',
          vale: '昨日'
        }
      ]
    }
  }
}
</script>
