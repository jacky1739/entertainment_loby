<template>
  <nav class="nav">
    <ul class="user">
        <li class="user__img">
            <img src="../../public/images/Lobby/平台svg/Lobby_Avatar_F01.svg" alt="">
        </li>
        <li class="user__id">
            <p class="user__id__number">ID12345678</p>
            <div class="user__linner">
                <img src="../../public/images/Lobby/平台svg/lobby_linner.svg" alt="">
            </div>
            <div class="user__id__bg">
                <span class="user__id__icon">
                    <img src="../../public/images/Lobby/平台svg/lobby_player_id_icon.svg" alt="">
                </span>
                <p class="user__id__number__id">ID12345678</p>
            </div>
        </li>
        <li class="user__money">
            <p class="user__money__id">123,456,789.00</p>
        </li>
    </ul>
    <ul class="social">
        <li class="social__link">
            <a href="#" @click="click">
                <img class="social__image" src="../../public/images/Lobby/平台svg/btn_line_normal.svg" alt="">
            </a>
        </li>
        <li class="social__link">
            <a href="#" @click="click">
                <img class="social__image" src="../../public/images/Lobby/平台svg/btn_personal_center_normal.svg" alt="">
            </a>
        </li>
        <li class="social__setting">
            <img class="social__setting__bg" src="../../public/images/Lobby/平台svg/info_bg.svg" alt="">
            <a href="#" @click="click">
                <img class="social__setting__icon" src="../../public/images/Lobby/平台svg/lobby_btn_info_normal.svg" alt="">
            </a>
        </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .nav {
    background-image: url('../../public/images/Lobby/平台svg/lobby_top_bar.svg');
    height: .75rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user {
        display: flex;
        padding-left: 1%;
        &__linner {
            height: .04rem;
            width: 100%;
        }
        &__img {
            width: .6rem;
            height: .6rem;
            margin-right: .2rem;
        }
        &__id {
            width: 1.6rem;
            min-height: 100%;
            position: relative;
            &__bg {
                background-image: url('../../public/images/Lobby/平台svg/lobby_player_id_bg.svg');
                background-size: contain;
                background-position: center center;
                background-repeat: no-repeat;
                width: 100%;
                position: absolute;
                right: 0;
                display: flex;
                align-items: center;
                padding-left: .1rem;
            }
            &__icon {
                width: .2rem;
                height: .2rem;
            }
            &__number {
                padding: 0 0 .04rem 0.1rem;
                color: white;
                &__id {
                    color: white;
                    line-height: .4rem;
                }
            }
        }
        &__money {
            width: 3rem;
            min-height: 100%;
            background-image: url('../../public/images/Lobby/平台svg/lobby_player_own_point.svg');
            background-size: contain;
            background-position: .5rem .06rem;
            background-repeat: no-repeat;
            width: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            &__id {
                color: white;
            }
        }
    }
  }
  .social {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      right: 0;
      top: 0;
      overflow: hidden;
      &__link {
          width: 100%;
          height: .9rem;
          margin-left: .2rem;
          z-index: 3;
      }
      &__setting {
          margin: 0 .15rem 0 .4rem;
          width: 100%;
          height: .65rem;
          position: relative;
          z-index: 2;
          border: 1px solid black;
        &__bg {
            position: absolute;
            transform: scale(3.1);
            float: right;
            width: 100%;
            top: -3px;
            right: 15px;
        }
        &__icon {
            position: absolute;
            z-index: 2;
        }
      }
  }
  .social__setting:hover {
    transition: all .3s;
    transform: scale(1.12);
  }
</style>

<script>
export default {
  methods: {
    click () {
      console.log('click')
    }
  }
}
</script>
