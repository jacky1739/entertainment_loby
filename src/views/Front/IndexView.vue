<template>
  <ul class="games">
    <li class="games__firstGame">
      <a href="#"><img src="../../../public/images/Lobby/遊戲icon/png/新icon公版長_金蟬捕魚.png" alt=""></a>
    </li>
    <li>
      <ul>
        <li class="games__icon">
          <a href="#"><img src="../../../public/images/Lobby/遊戲icon/png/新icon公版_龍虎鬥.png" alt=""></a>
        </li>
        <li class="games__icon">
          <a href="#"><img src="../../../public/images/Lobby/遊戲icon/png/新icon公版_五星宏輝.png" alt=""></a>
        </li>
      </ul>
    </li>
    <li>
      <ul>
        <li class="games__icon">
          <a href="#"><img src="../../../public/images/Lobby/遊戲icon/png/新icon公版_五星宏輝.png" alt=""></a>
        </li>
        <li class="games__icon">
          <a href="#"><img src="../../../public/images/Lobby/遊戲icon/png/新icon公版_龍虎鬥.png" alt=""></a>
        </li>
      </ul>
    </li>
  </ul>
  <div class="next__page">
    <a href="#"><img src="../../../public/images/Lobby/平台svg/lobby_next_page.svg" alt=""></a>
  </div>
</template>

<style lang="scss" scoped>
  .games {
    display: flex;
    margin-top: 2.5%;
    height: 100%;
    width: 100%;
    &__firstGame {
      min-width: 4.1rem;
      height: 100%;
    }
    &__icon {
      width: 3.5rem;
      height: 100%;
      margin: 0 .15rem .25rem 0;
    }
  }
  .next__page {
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 32px;
    top: 40%;
  }
</style>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
