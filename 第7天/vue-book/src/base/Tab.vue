<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiao"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjia"></i>
      <span>添加</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-shoucang"></i>
      <span>收藏</span>
    </router-link>
  </div>
</template>

<!--
  display: flex;
  flex-direction: row/column 排列方向
  justify-content: center 水平居中
  align-items: center 垂直居中
  flex: 1 等分份数
-->
<style scoped lang="less">
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 49px;
    border-top: 1px solid #ccc;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      color: #9c9c9c;

      &.router-link-active {
        background: #ccc;
        color: #fff;
      }

      span {
        font-size: 13px;
      }
    }
  }
</style>
