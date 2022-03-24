<template>
  <div class="modal" v-if="isShow">
    <div class="modal__cancel">
      <a href="#" @click="click"><img src="../../public/images/Lobby/平台svg/ibfo_bdm_setting_exit_normal.svg" alt=""></a>
    </div>
    <div class="modal__bg">
      <h2 class="modal__title">設定</h2>
      <div class="modal__btn">
        <p class="modal__btn__text d-flex">音效
          <span class="d-flex bgm_bt_bg">
            <span class="w-78">
              <a v-show="music1" href="#" @click="switchBtn1"><img class="modal__btn__bgm" src="../../public/images/Lobby/平台svg/btn_bgm_off.svg" alt="">
              </a>
            </span>
            <a v-show="music2" href="#" @click="switchBtn1"><img class="modal__btn__bgm" src="../../public/images/Lobby/平台svg/btn_bgm_on.svg" alt="">
            </a>
          </span>
        </p>
        <p class="modal__btn__text d-flex">音效
          <span class="d-flex bgm_bt_bg">
            <span class="w-78">
              <a v-if="music1" href="#" @click="switchBtn1"><img class="modal__btn__bgm" src="../../public/images/Lobby/平台svg/btn_bgm_off.svg" alt="">
              </a>
            </span>
            <a v-if="music2" href="#" @click="switchBtn1"><img class="modal__btn__bgm" src="../../public/images/Lobby/平台svg/btn_bgm_on.svg" alt="">
            </a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &__bg {
    background-image: url('../../public/images/Lobby/平台svg/info_bgm_setting_bg.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 6rem;
    height: 4rem;
    padding: 0 1rem;
  }
  &__title {
    line-height: .9rem;
    text-align: center;
    font-size: .4rem;
    color: white;
  }
  &__cancel {
    position: absolute;
    width: .88rem;
    height: auto;
    top: -16px;
    right: -23px;
  }
  &__btn {
    flex-direction: column;
    display: flex;
    justify-content: center;
    height: calc(100% - .9rem);
    &__text {
      line-height: 1rem;
      font-size: .4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__switch {
      background-image: url('../../public/images/Lobby/平台svg/btn_bgm_on.svg');
      background-repeat: no-repeat;
      background-size: cover;
      width: .9rem;
      height: .2rem;
    }
  }
}
.bgm_bt_bg {
  width: 1.5rem;
  background: #323033;
  border-radius: 15px;
}
</style>

<script>
export default {
  name: 'ModalItem',
  data () {
    return {
      isShow: true,
      music1: false,
      music2: true
    }
  },
  methods: {
    click () {
      this.isShow = !this.isShow
      console.log('click')
    },
    switchBtn1 () {
      this.music1 = !this.music1
      this.music2 = !this.music2
    }
  }
}
</script>
