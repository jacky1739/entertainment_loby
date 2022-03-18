<template>
  <div class="wrapper">
    <ul class="login">
      <li class="login__img">
      </li>
      <li class="login__subtitle">
        <p class="login__subtitle__word">------------ 登入 -------------</p>
      </li>
      <li class="login__input">
        <input class="login__input__content" type="text">
      </li>
      <li class="login__input">
        <input class="login__input__content" type="text">
      </li>
      <li class="login__errorMessage">
        <p>帳號密碼有誤</p>
      </li>
      <li class="login__btn">
        <button></button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-image: url('../../../public/images/Lobby/平台svg/loginpage_bg.svg');
  background-repeat: no-repeat;
  background-position: top center;
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
}
</style>
