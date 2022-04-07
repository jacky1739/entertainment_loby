<template>
  <Loading-item :Loading="isLoading"></Loading-item>
  <main class="wrapper">
    <ul class="login">
      <li class="login__img">
        <img src="../../../public/images/Lobby/平台svg/lobby_logo.svg" alt="lobby_logo">
      </li>
      <li class="login__subtitle">
        <span class="login__subtitle__line"></span><p class="login__subtitle__text">登入</p><span class="login__subtitle__line"></span>
      </li>
      <li class="login__input mb-2">
        <input class="login__input__content" type="text" placeholder="帳號">
      </li>
      <li class="login__input">
        <input class="login__input__content" type="text" placeholder="密碼">
      </li>
      <li class="login__errorMessage">
        <p class="login__errorMessage__word" v-show="isLoading">
          <span><img class="login__errorMessage__icon" src="../../../public/images/Lobby/平台svg/loginpage_error.svg" alt=""></span>帳號密碼有誤
        </p>
      </li>
      <li class="login__btn" >
        <a href="#" class="login__btn__submit" @click.prevent="onClick">
          <img src="../../../public/images/Lobby/平台svg/btn_login_normal.svg" alt="">
        </a>
      </li>
    </ul>
  </main>
</template>

<style lang="scss" scoped>
.wrapper {
  background-image: url('../../../public/images/Lobby/平台svg/loginpage_bg.svg');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  &__img {
    width: calc(2rem + 25vh);
    @media (max-width: 992px) {
      width: calc(.5rem + 40vw);
    }
  }
  &__subtitle {
    margin: 0 auto;
    margin-bottom: .2rem;
    display: flex;
    justify-content: center;
    &__text {
      text-align: center;
      font-size: .25rem;
      @media (max-width: 992px) {
        font-size: .16rem;
      }
    }
    &__line {
      background-image: url('../../../public/images/Lobby/平台svg/lobby_loginline.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 43%;
      height: auto;
    }
  }
  &__input {
    background-color: rgba(0, 0, 0, .61);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.8rem;
    height: .55rem;
    margin: 0 auto;
    margin-bottom: .1rem;
    @media (max-width: 992px) {
      width: 2rem;
      height: .35rem;
      border-radius: 10px;
    }
    &__content {
      width: 100%;
      line-height: .35rem;
      margin: 0 auto;
      border: none;
      background: none;
      outline: none;
      padding: 0 .1rem;
      color: white;
      text-align: center;
      font-size: .2rem;
    }
  }
  &__errorMessage {
    text-align: center;
    width: 1.4rem;
    height: .15rem;
    margin: 0 auto;
    margin-bottom: .15rem;
    &__word {
      width: 1.4rem;
      height: .25rem;
      line-height: .25rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background: #B80000;
      color: white;
      border-radius: 5px;
    }
    &__icon {
      width: 100%;
      height: .18rem;
    }
  }
  &__btn {
    margin: 0 auto;
    width: 1rem;
  }
}
.login__btn:hover {
  filter: brightness(1.2);
}
</style>

<script>
export default {
  data () {
    return {
      isLoading: false,
      showError: false
    }
  },
  methods: {
    onClick () {
      console.log('click')
      this.isLoading = !this.isLoading
    }
  }
}
</script>
