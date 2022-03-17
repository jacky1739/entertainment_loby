<template>
  <nav class="nav">
    <div class="user">
      <div class="user__img">
        <img src="../../public/images/Lobby/平台svg/Lobby_Avatar_F01.svg" alt="">
      </div>
      <div class="user__id">
        <p class="user__id__number">ID12345678</p>
        <div class="user__id__bg">
          <span class="user__id__icon">
            <img src="../../public/images/Lobby/平台svg/lobby_player_id_icon.svg" alt="">
          </span>
          <p class="user__id__number">ID12345678</p>
        </div>
      </div>
      <div class="user__money">
        <p class="user__id__number">123,123,123.00</p>
      </div>
    </div>
    <div>
      <div class="line">
        <img src="" alt="line__icon">
      </div>
      <div class="person__center__icon"></div>
    </div>
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
      // border: 1px solid black;
      // width: 35%;
      margin-left: 2%;
      display: flex;
      &__img {
        border: 1px solid black;
        width: 1.6rem;
        height: .6rem;
        margin-right: .2rem;
      }
      &__id {
        border: 1px solid black;
        width: 100%;
        margin-right: .4rem;
        &__bg {
          background-image: url('../../public/images/Lobby/平台svg/lobby_player_id_bg.svg');
          background-size: contain;
          background-position: center center;
          background-repeat: no-repeat;
          width: 100%;
          min-height: 80%;
          display: flex;
          padding-left: .1rem;
          align-items: center;
        }
        &__number {
          color: white;
        }
        &__icon {
          width: .2rem;
          height: .2rem;
        }
      }
      &__money {
        background-image: url('../../public/images/Lobby/平台svg/lobby_player_own_point.svg');
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        width: 100%;
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        line-height: .6rem;
      }
    }
  }
</style>
