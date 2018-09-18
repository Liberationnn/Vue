<template>
  <div>
    <MHeader>添加</MHeader>
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
        <button class="btn btn-primary" @click="doAddBook">添加</button>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import {addBook} from "../api";

  export default {
    name: "Add",
    data() {
      return {
        book: {}
      };
    },
    methods: {
      async doAddBook() {
        await addBook(this.book);
        this.$router.push('/list');
      }
    },
    components: {MHeader}
  }
</script>

<style scoped lang="less">
  .content {
    margin-top: 20px;
    img {
      width: 50%;
      height: 145px;
      margin-bottom: 20px;
    }
  }
</style>
