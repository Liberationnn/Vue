<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
      <img :src="slide.src" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carousel',
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    props: ['swiperSlides']
  }
</script>

<style scoped lang="less">
  img {
    width: 100%;
    height: 100%;
  }
  .swiper-container {
    height: 180px;
  }
</style>
