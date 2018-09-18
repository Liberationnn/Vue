<template>
  <div class="header">
    <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: {
      back: {type: Boolean, default: false}
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #e6e6e6;
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    text-align: center;
    color: #7d7d7d;

    i {
      position: absolute;
      left: 6px;
      font-size: 18px;
    }
  }
</style>
