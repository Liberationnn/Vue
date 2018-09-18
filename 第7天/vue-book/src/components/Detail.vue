<template>
  <div class="detail">
    <MHeader :back="true">{{id}}</MHeader>
    <div class="content">
      <div class="container">
        <img :src="book.bookCover" alt="">
        <div class="form-group">
          <label for="bookCover">图片链接</label>
          <input class="form-control" id="bookCover" type="text" v-model="book.bookCover">
        </div>
        <div class="form-group">
          <label for="bookName">书名</label>
          <input class="form-control" id="bookName" type="text" v-model="book.bookName">
        </div>
        <div class="form-group">
          <label for="bookInfo">信息</label>
          <input class="form-control" id="bookInfo" type="text" v-model="book.bookInfo">
        </div>
        <div class="form-group">
          <label for="bookPrice">价格</label>
          <input class="form-control" id="bookPrice" type="number" v-model="book.bookPrice">
        </div>
        <button class="btn btn-primary" @click="doUpdateBook">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import {getBook, updateBook} from "../api";

  export default {
    name: "Detail",
    data() {
      return {
        book: {},
        temp: {}, // 用于在更新book时检查值是否有改变
      };
    },
    computed: {
      id() {
        return parseInt(this.$route.params.id);
      }
    },
    created() {
      this.doGetBook();
    },
    methods: {
      async doGetBook() {
        this.book = await getBook(this.id);
        this.temp = {...this.book};
        if (!this.book.id) {
          this.$router.push('/list');
        }
      },
      async doUpdateBook() {
        // 如果book的值没有改变，则不发送请求
        if (JSON.stringify(this.book) !== JSON.stringify(this.temp)) {
          await updateBook(this.book);
        }
        this.$router.push('/list');
      },
    },
    watch: {
      $route() {
        this.doGetBook();
      }
    },
    components: {MHeader}
  }
</script>

<style scoped lang="less">
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 1;
  }
  .content {
    margin-top: 20px;
    img {
      width: 50%;
      margin-bottom: 20px;
    }
  }
</style>
