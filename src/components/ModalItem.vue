<template>
  <div class="popUp__Setting">
    <div class="popUp__Setting__bg">
      <!-- <p>這是modal</p> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popUp__Setting {
  width: 400px;
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

<script>
export default {
  name: 'ModalItem'
}
</script>
