<template>
  <div>
    <MHeader>列表页</MHeader>
    <div class="content">
      <ul>
        <router-link :to="{name:'detail',params:{id:book.id}}" class="list-group-item clearfix" tag="li"
                     v-for="(book, index) in books" :key="index">
          <img :src="book.bookCover" alt="">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <span>￥ {{book.bookPrice}}</span>
            <button class="btn btn-danger btn-sm" @click.stop="doRemoveBook(book.id)">删除</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import {getBooks, getBook, addBook, updateBook, removeBook} from "../api";

  export default {
    name: "List",
    data() {
      return {
        books: [],
        book: {}
      };
    },
    created() {
      this.doGetBooks();
    },
    methods: {
      async doGetBooks() {
        this.books = await getBooks();
      },
      async doGetBook(id) {
        this.book = await getBook(id);
      },
      async doAddBook(book) {
        this.books = await addBook(book);
      },
      async doUpdateBook(book) {
        this.books = await updateBook(book);
      },
      async doRemoveBook(id) {
        this.books = await removeBook(id);
      },
    },
    components: {MHeader}
  }
</script>

<style scoped lang="less">
  ul {
    margin-bottom: 0;
    li {
      display: flex;
      justify-content: center;
      height: 166px;
      img {
        width: 50%;
      }
      div {
        position: relative;
        margin-top: 10px;
        width: 50%;
        button {
          position: absolute;
          bottom: 4px;
          right: 0;
          z-index: 2;
        }
      }
    }
  }
</style>
