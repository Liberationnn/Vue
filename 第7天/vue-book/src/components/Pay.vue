<template>
  <div>
    <MHeader :back="true">付款</MHeader>
    <div class="content">
      <img src="../img/pay.jpg" alt="">
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';

  export default {
    name: "Pay",
    components: {MHeader},
  }
</script>

<style scoped>
  img {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
  }
</style>
