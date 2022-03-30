<template>
  <div class="loading" v-if="loading">
    <img src="../../public/images/Lobby/giphy.gif" alt="loading">
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
    width: 1.5rem;
    height: 1.5rem;
  }
</style>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  props: ['Loading'],
  watch: {
    Loading (n, o) {
      console.log(n, o)
      this.loading = this.Loading
    }
  }
}
</script>
