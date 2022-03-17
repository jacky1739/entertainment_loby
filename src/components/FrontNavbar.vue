<template>
  <nav class="nav">
    <div class="user">
      <div class="user__img">
        <img src="../../public/images/Lobby/平台svg/Lobby_Avatar_F01.svg" alt="">
      </div>
      <div class="user__id">
        <p class="user__id__number">ID12345678</p>
        <div class="user__id__bg">
          <p></p>
        </div>
      </div>
      <div class="user__money"></div>
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
      width: 20%;
      margin-left: 2%;
      display: flex;
      &__img {
        width: .6rem;
        height: .6rem;
      }
      &__id {
        margin-left: 12%;
        &__bg {
          background-image: url('../../public/images/Lobby/平台svg/lobby_player_id_bg.svg');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          width: 100%;
          height: .3rem;
        }
        &__number {
          color: white;
        }
      }
    }
  }
</style>
