<template>
  <div>
    <MHeader>列表页</MHeader>
    <div class="content" ref="content" @scroll="loadMore">
      <div class="text-center tip" v-if="!books.length">下拉获取数据</div>
      <ul v-else>
        <router-link :to="{name:'detail',params:{id:book.id}}" class="list-group-item clearfix" tag="li"
                     v-for="(book, index) in books" :key="book.bookCover+index">
          <img v-lazy="book.bookCover" alt="">
          <div class="wrap">
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <span>￥ {{book.bookPrice}}</span>
            <div>
              <button class="btn btn-danger btn-sm" @click.stop="addCar(book)">加入购物车</button>
              <button class="btn btn-danger btn-sm" @click.stop="doRemoveBook(book)">删除</button>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import {getAllBooks, getMoreBooks, getBook, addBook, updateBook, removeBook, initBooks} from "../api";
  import * as Types from '../store/mutations-types';

  export default {
    name: "List",
    data() {
      return {
        books: [],
        book: {},
        hasMore: true,
        isLoading: false,
        timer: null,
        isRemoving: false,
      };
    },
    created() {
      this.doGetBooks();
    },
    mounted() {
      let content = this.$refs.content;
      let startTop = content.offsetTop;
      content.ontouchstart = (e) => {
        let start = e.touches[0].pageY;
        content.ontouchmove = (e) => {
          if (content.scrollTop === 0) {
            let offset = e.touches[0].pageY - start;
            if (offset > 0) {
              if (offset < 50) {
                content.style.top = startTop + offset + 'px';
              } else {
                content.style.top = startTop + 50 + 'px';
              }
            }
            content.ontouchend = (e) => {
              if (offset >= 50) {
                this.doGetBooks();
                setTimeout(() => {
                  if (this.books.length === 0) {
                    this.doInitBooks();
                  }
                }, 200);
              }
              let timer = setInterval(() => {
                if (parseInt(content.style.top) <= startTop) {
                  clearInterval(timer);
                } else {
                  content.style.top = parseInt(content.style.top) - 1 + 'px';
                }
              }, 1);
              content.ontouchmove = content.ontouchend = null;
            };
          }
        };
      };
    },
    methods: {
      async doGetAllBooks() {
        this.books = await getAllBooks();
      },
      async doGetBooks() { // 进入list页面时，显示6条数据
        let {books, hasMore} = await getMoreBooks(6);
        this.books = []; // 先清空books再赋值，以触发懒加载效果
        this.books = books;
        this.hasMore = hasMore;
      },
      async doGetMoreBooks() { // 获取更多数据(3条)
        if (this.hasMore && !this.isLoading) {
          this.isLoading = true;
          let {books, hasMore} = await getMoreBooks(this.books.length + 3);
          this.books = books;
          this.hasMore = hasMore;
          this.isLoading = false;
        }
      },
      async doGetBook(id) {
        this.book = await getBook(id);
      },
      async doAddBook(book) {
        await addBook(book);
        this.doGetBooks();
      },
      async doUpdateBook(book) {
        await updateBook(book);
        this.doGetBooks();
      },
      async doRemoveBook(book) {
        if (!this.isRemoving) {
          this.books = this.books.filter((item) => item.id !== book.id);
          this.isRemoving = true;
          let temp = await removeBook(book.id);
          this.books = temp.reverse().slice(0, this.books.length);
          this.$store.commit(Types.REMOVE, book);
          this.isRemoving = false;
        }
      },
      async doInitBooks() {
        this.books = await initBooks();
      },
      loadMore() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          let {clientHeight, scrollTop, scrollHeight} = this.$refs.content;
          if (clientHeight + scrollTop + 20 >= scrollHeight) {
            this.doGetMoreBooks();
          }
        }, 10);
      },
      addCar(book) {
        this.$store.commit(Types.ADD, book);
      },
    },
    components: {MHeader}
  }
</script>

<style scoped lang="less">
  .tip {
    margin-top: 14px;
    font-size: 16px;
  }
  ul {
    margin-bottom: 0;
    li {
      display: flex;
      justify-content: center;
      height: 166px;
      img {
        width: 50%;
      }
      .wrap {
        position: relative;
        width: 50%;
        div {
          position: absolute;
          bottom: 4px;
          right: 0;
        }
      }
    }
  }
</style>
