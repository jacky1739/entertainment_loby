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
          <a href="#"><img src="../../../public/images/Lobby/遊戲icon/png/新icon公版_龍虎鬥.png" alt=""></a>
        </li>
      </ul>
    </li>
    <li>
      <ul>
        <li class="games__icon">
          <a href="#"><img src="../../../public/images/Lobby/遊戲icon/png/新icon公版_龍虎鬥.png" alt=""></a>
        </li>
        <li class="games__icon">
          <a href="#"><img src="../../../public/images/Lobby/遊戲icon/png/新icon公版_龍虎鬥.png" alt=""></a>
        </li>
      </ul>
    </li>
  </ul>
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
</style>

<script>
export default {
  data () {
    return {
      imgData: [
        {
          imgUrl: '../../../public/images/Lobby/遊戲icon/svg/icon_lhd.svg'
        },
        {
          imgUrl: '../../../public/images/Lobby/遊戲icon/svg/icon_wxh.svg'
        },
        {
          imgUrl: '../../../public/images/Lobby/遊戲icon/svg/icon_wxh.svg'
        },
        {
          imgUrl: '../../../public/images/Lobby/遊戲icon/svg/icon_lhd.svg'
        }
      ]
    }
  }
}
</script>
