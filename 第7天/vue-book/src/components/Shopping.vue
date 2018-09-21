<template>
  <div>
    <MHeader>购物车</MHeader>
    <div class="content">
      <div class="text-center tip" v-if="isEmpty">购物车内没有商品</div>
      <template v-else>
        <ul>
          <li class="list-group-item clearfix" v-for="(obj, index) in car">

            <div class="wrap">
              <input type="checkbox" :checked="obj.isSelected" @click="clickOne(obj.book)">
              <img v-lazy="obj.book.bookCover" alt="">
              <div class="inner">
                <p>{{obj.book.bookName}}</p>
                <p>{{obj.book.bookInfo}}</p>
                <span>￥{{obj.book.bookPrice}}</span>
                <div class="count">
                  <button class="decrease btn btn-default btn-xs" @click="decrease(obj.book)">-</button>
                  <input class="form-control" type="number" disabled :value="obj.count">
                  <button class="increase btn btn-default btn-xs" @click="increase(obj.book)">+</button>
                </div>
              </div>
              <button class="btn btn-danger btn-xs remove" @click.stop="remove(obj.book)">x</button>
            </div>

          </li>
        </ul>
        <div class="balance">
          <div class="select">
            <input id="hasSelectedAll" type="checkbox" :checked="hasSelectedAll"
                   @click="clickAll(!hasSelectedAll)">
            <label for="hasSelectedAll">{{isAll}}</label>
          </div>
          <div class="total">
            <p>合计:￥{{total}}</p>
          </div>
          <router-link to="/pay" class="pay">去结算({{count}})</router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import * as Types from '../store/mutations-types';

  export default {
    name: "Shopping",
    computed: {
      isEmpty() {
        return JSON.stringify(this.$store.state.car) === '{}';
      },
      car() {
        return this.$store.state.car;
      },
      hasSelectedAll() {
        return this.$store.getters.hasSelectedAll;
      },
      total() {
        return this.$store.getters.total;
      },
      isAll() {
        return this.hasSelectedAll ? '全选' : '反选';
      },
      count() {
        return Object.values(this.car).reduce((prev, cur) => {
          return prev + (cur.isSelected ? cur.count : 0);
        }, 0);
      },
    },
    components: {MHeader},
    methods: {
      remove(book) {
        this.$store.commit(Types.REMOVE, book);
      },
      increase(book) {
        this.$store.commit(Types.INCREASE, book);
      },
      decrease(book) {
        this.$store.commit(Types.DECREASE, book);
      },
      clickAll(value) {
        this.$store.commit(Types.CLICKALL, value);
      },
      clickOne(book) {
        this.$store.commit(Types.CLICKONE, book);
      },
    },
  }
</script>

<style scoped lang="less">
  .tip {
    margin-top: 14px;
    font-size: 16px;
  }
  input[type='checkbox'] {
    width: 14px;
    height: 14px;
  }
  li {
    .wrap {
      position: relative;
      height: 80px;
      & > input {
        position: absolute;
        left: -9px;
        top: 50%;
        transform: translate(0, -50%);
        margin-top: 0;
      }
      img {
        float: left;
        width: 80px;
        height: 80px;
        margin-right: 10px;
      }
      .inner {
        position: relative;
        height: 100%;
        p {
          margin: 2px 0;
        }
        span {
          position: absolute;
          bottom: 4px;
          color: red;
        }
        .count {
          position: absolute;
          right: 0;
          bottom: 6px;
          height: 20px;
          button {
            margin-bottom: 1px;
            width: 20px;
            height: 19px;
            outline: none;
            font-weight: bold;
            &.decrease {
              line-height: 16px;
            }
            &.increase {
              line-height: 18px;
            }
          }
          input {
            display: inline-block;
            width: 40px;
            height: 20px;
            line-height: 21px;
            text-align: center;
            background-color: #f5f5f5;
          }
        }
      }
    }
    .remove {
      position: absolute;
      top: 2px;
      right: 0;
      width: 16px;
      height: 16px;
      line-height: 10px;
      text-align: center;
      text-indent: -1px;
    }
  }
  .balance {
    position: fixed;
    bottom: 49px;
    left: 0;
    width: 100%;
    height: 46px;
    border-top: 1px solid #ececec;
    background: #f4f4f4;
    .select {
      float: left;
      align-items: center;
      width: 20%;
      height: 45px;
      line-height: 44px;
      padding-left: 5px;
      input, label {
        margin: 0;
        font-weight: normal;
        vertical-align: middle;
      }
    }
    .total {
      float: left;
      width: 47%;
      p {
        margin: 0;
        padding-left: 8px;
        height: 45px;
        line-height: 44px;
      }
    }
    .pay {
      float: left;
      width: 33%;
      height: 100%;
      line-height: 46px;
      background: #ed0000;
      color: #fff;
      text-align: center;
    }
  }
</style>
