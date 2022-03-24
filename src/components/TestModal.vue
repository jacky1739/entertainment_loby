<template>
  <div class="modal">
    <div class="modal__bg">
        <h2>這是Testmodel</h2>
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
  }
}
</style>
