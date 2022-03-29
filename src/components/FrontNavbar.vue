<template>
  <nav class="nav">
    <ul class="user">
      <li class="user__img">
        <img class="test" src="../../public/images/Lobby/平台svg/Lobby_Avatar_F01.svg" alt="">
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
    <!-- <ul class="social">
      <li class="social__link">
        <a href="#">
          <img class="social__image" src="../../public/images/Lobby/平台svg/btn_line_normal.svg" alt="">
        </a>
      </li>
      <li class="social__link">
        <a href="#">
          <img class="social__image" src="../../public/images/Lobby/平台svg/btn_personal_center_normal.svg" alt="">
        </a>
      </li>
      <li class="social__setting" ref="setting">
        <img class="social__setting__bg" src="../../public/images/Lobby/平台svg/info_bg.svg" alt="">
          <a href="#" @click="click">
          <img class="social__setting__icon" src="../../public/images/Lobby/平台svg/lobby_btn_info_normal.svg" alt="">
        </a>
      </li>
    </ul> -->
    <ul class="social">
      <li class="social__link">
        <a class="social__link__line" href=""></a>
      </li>
      <li class="social__link">
        <a class="social__link__info" href=""></a>
      </li>
      <li class="social__link__bg">
        <a @click.prevent="click" class="social__link__setting" href=""></a>
      </li>
    </ul>
    <ul class="popUp" v-show="isShow">
      <li class="popUp__music">
        <a href="#"><img src="../../public/images/Lobby/平台svg/btn_bgm_normal.svg" alt=""></a>
      </li>
      <li class="popUp__quit">
        <a href="#"><img src="../../public/images/Lobby/平台svg/btn_exit_normal.svg" alt=""></a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '../style/mixin';
  .nav {
    background-image: url('../../public/images/Lobby/平台svg/lobby_top_bar.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: .75rem;
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
  // .social {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   position: relative;
  //   right: 0;
  //   top: 0;
  //   overflow: hidden;
  //   &__link {
  //     width: 100%;
  //     height: .9rem;
  //     margin-left: .2rem;
  //   }
  //   &__setting {
  //     margin: 0 .15rem 0 .7rem;
  //     width: 100%;
  //     height: .65rem;
  //     position: relative;
  //     border: 1px solid black;
  //     &__bg {
  //       position: absolute;
  //       transform: scale(3.1);
  //       float: right;
  //       width: 100%;
  //       top: -6px;
  //       right: 15px;
  //     }
  //     &__icon {
  //       position: absolute;
  //     }
  //   }
  // }
  // .social__link:hover {
    // transition: all .3s;
    // transform: scale(1.2);
  // }
  // .social__setting__icon:hover {
  //   transition: all .3s;
  //   transform: scale(1.2);
  // }

  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    &__link {
      margin-left: .2rem;
      &__line {
        display: inline-block;
        background-image: url('../../public/images/Lobby/平台svg/btn_line_normal.svg');
        @include bgImg__contain;
        width: .6rem;
        height: .6rem;
      }
      &__info {
        display: inline-block;
        background-image: url('../../public/images/Lobby/平台svg/btn_personal_center_normal.svg');
        @include bgImg__contain;
        width: .6rem;
        height: .6rem;
      }
      &__setting {
        display: inline-block;
        background-image: url('../../public/images/Lobby/平台svg/lobby_btn_info_normal.svg');
        @include bgImg__contain;
        width: .6rem;
        height: .6rem;
        position: absolute;
        // right: .1px
      }
      &__bg {
        background-image: url('../../public/images/Lobby/平台svg/info_bg.svg');
        background-repeat: no-repeat;
        background-size: cover;
        width: 1.2rem;
        height: .8rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }

  .popUp {
    border: 2px solid black;
    background-color: rgba(black, 0.6);
    border-radius: 20px;
    padding: 1px;
    position: absolute;
    right: 0;
    top: 93px;
    z-index: 3;
  }

  .popUp__music:hover {
    filter: brightness(1.1);
  }
  .popUp__quit:hover {
    filter: brightness(1.1);
  }

  .social__link__line:hover {
    // filter: brightness(1.75);
    background-image: url('../../public/images/Lobby/平台svg/btn_line_press.svg');
    transition: all .2s;
    transform: scale(1.2);
  }
  .social__link__info:hover {
    // filter: brightness(1.75);
    background-image: url('../../public/images/Lobby/平台svg/btn_personal_center_press.svg');
    transition: all .3s;
    transform: scale(1.2);
  }
  .social__link__setting:hover {
    transition: all .3s;
    transform: scale(1.2);
  }
</style>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    click () {
      this.isShow = !this.isShow
      console.log('click')
    }
  },
  mounted () {
    console.log(this.$refs.setting)
  }
}
</script>
