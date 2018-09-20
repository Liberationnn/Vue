<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else>
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
      </template>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import Swiper from '../base/Swiper';
  import Loading from '../base/loading';
  import {getAll} from '../api';

  export default {
    name: "Home",
    data() {
      return {
        sliders: [],
        hotBooks: [],
        loading: true
      };
    },
    created() {
      this.doGetAll();
    },
    methods: {
      async doGetAll() {
        [this.sliders, this.hotBooks] = await getAll();
        this.loading = false;
      }
    },
    components: {MHeader, Swiper, Loading}
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
