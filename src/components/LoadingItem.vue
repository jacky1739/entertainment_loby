<template>
  <div class="loading">
    <img src="../../public/images/Lobby/lobby_loading.gif" alt="loading">
  </div>
</template>

<style lang="scss" scoped>
  .loading {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    // background: #000;
  }
</style>

<script>
export default {
  data () {
    return {
      loading: true
    }
  },
  props: ['isLoading'],
  watch: {
    isLoading () {
      this.loading = !this.loading
    }
  }
}
</script>
