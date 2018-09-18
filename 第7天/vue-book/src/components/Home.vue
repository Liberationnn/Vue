<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
      <div>
        <h3>热门图书</h3>
        <ul>
          <li v-for="(hotBook, index) in hotBooks" :key="index">
            <img :src="hotBook.bookCover" :alt="hotBook.bookName">
            <h5 class="text-center">{{hotBook.bookName}}</h5>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import Swiper from '../base/Swiper';
  import {getSliders, getHotBooks} from '../api';

  export default {
    name: "Home",
    data() {
      return {
        sliders: [],
        hotBooks: []
      };
    },
    created() {
      this.doGetSliders();
      this.doGetHotBooks();
    },
    methods: {
      async doGetSliders() {
        this.sliders = await getSliders();
      },
      async doGetHotBooks() {
        this.hotBooks = await getHotBooks();
      }
    },
    components: {MHeader, Swiper}
  }
</script>

<style scoped lang="less">
  h3 {
    text-align: center;
    color: #a9a9a9;
    font-size: 18px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      img {
        width: 100%;
      }
      h4 {
        font-size: 12px;
      }
    }
  }
</style>
