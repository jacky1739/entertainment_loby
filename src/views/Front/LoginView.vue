<template>
  <div class="wrapper">
    <ul class="login">
      <li class="login__img">
      </li>
      <li class="login__subtitle">
        <p class="login__subtitle__word"><span style="text-decoration: line-through 5px">-------------</span> 登入 -------------</p>
      </li>
      <li class="login__input">
        <input class="login__input__content" type="text">
      </li>
      <li class="login__input">
        <input class="login__input__content" type="text">
      </li>
      <li class="login__errorMessage">
        <p class="login__errorMessage__word">
          <span><img class="login__errorMessage__icon" src="../../../public/images/Lobby/平台svg/loginpage_error.svg" alt=""></span>帳號密碼有誤
        </p>
      </li>
      <li class="login__btn" >
        <a href="/login" class="login__btn__submit" @click="onClick">
          <img src="../../../public/images/Lobby/平台svg/btn_login_normal.svg" alt="">
        </a>
      </li>
    </ul>
  </div>
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
    background-image: url('../../../public/images/Lobby/平台svg/lobby_logo.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    width: 3.5rem;
    height: 2.5rem;
    margin: 0 auto;
    margin-bottom: .2rem;
  }
  &__subtitle {
    margin: 0 auto;
    margin-bottom: .3rem;
    &__word {
      text-align: center;
      font-size: .2rem;
      color: white;
    }
  }
  &__input {
    background-image: url('../../../public/images/Lobby/平台svg/loginpage_account.svg');
    background-position: center 68%;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.6rem;
    height: .65rem;
    margin: 0 auto;
    &__content {
      width: 100%;
      line-height: .35rem;
      margin: 0 auto;
      border: none;
      background: none;
      outline: none;
      padding: 0 .1rem;
      color: white;
    }
  }
  &__errorMessage {
    text-align: center;
    width: 1.4rem;
    height: .25rem;
    margin: 0 auto;
    margin-bottom: .4rem;
    &__word {
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
</style>

<script>
export default {
  methods: {
    onClick () {
      console.log('click')
    }
  }
}
</script>
