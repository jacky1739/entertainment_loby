<template>
  <ul class="games">
    <li>
      <a href=""><img class="games__img" src="../../../public/images/Lobby/icon_v_jcf.gif" alt="game__icon"></a>
    </li>
    <li class="games__item">
      <a href=""><img class="games__img" src="../../../public/images/Lobby/icon_lhd.gif" alt="game__icon"></a>
      <a href=""><img class="games__img" src="../../../public/images/Lobby/icon_wxh.gif" alt="game__icon"></a>
    </li>
    <li class="games__item">
      <a href=""><img class="games__img" src="../../../public/images/Lobby/icon_lhd.gif" alt="game__icon"></a>
      <a href=""><img class="games__img" src="../../../public/images/Lobby/icon_wxh.gif" alt="game__icon"></a>
    </li>
    <li class="games__item">
      <a href=""><img class="games__img" src="../../../public/images/Lobby/icon_lhd.gif" alt="game__icon"></a>
      <a href=""><img class="games__img" src="../../../public/images/Lobby/icon_wxh.gif" alt="game__icon"></a>
    </li>
    <li class="games__item">
      <a href=""><img class="games__img" src="../../../public/images/Lobby/icon_lhd.gif" alt="game__icon"></a>
      <a href=""><img class="games__img" src="../../../public/images/Lobby/icon_wxh.gif" alt="game__icon"></a>
    </li>
    <li class="games__item">
      <a href=""><img class="games__img" src="../../../public/images/Lobby/icon_lhd.gif" alt="game__icon"></a>
      <a href=""><img class="games__img" src="../../../public/images/Lobby/icon_wxh.gif" alt="game__icon"></a>
    </li>
    <li class="games__item">
      <a href=""><img class="games__img" src="../../../public/images/Lobby/icon_lhd.gif" alt="game__icon"></a>
      <a href=""><img class="games__img" src="../../../public/images/Lobby/icon_wxh.gif" alt="game__icon"></a>
    </li>
    <li class="games__item">
      <a href=""><img class="games__img" src="../../../public/images/Lobby/icon_lhd.gif" alt="game__icon"></a>
      <a href=""><img class="games__img" src="../../../public/images/Lobby/icon_wxh.gif" alt="game__icon"></a>
    </li>
  </ul>
  <!-- <div class="next__page">
    <a href="#" @click="scroll"><img src="../../../public/images/Lobby/平台svg/lobby_next_page.svg" alt="next__page"></a>
  </div> -->
</template>

<style lang="scss" scoped>
.games {
  display: flex;
  height: 90%;
  &__item {
    height: 50%;
    margin-right: calc(.1rem + .2vh);
  }
  &__img {
    width: fit-content;
  }
}
.next__page {
  width: 1rem;
  height: auto;
  position: fixed;
  right: 0;
}

</style>

<script>
export default {
  methods: {
    scroll () {
      console.log('click')
      window.scrollTo(1000, 0)
    }
  }
}
</script>
