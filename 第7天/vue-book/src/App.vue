<template>
  <div id="app">
    <transition name="fade">
      <!-- 这里放需要缓存的router-view -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fade">
      <!-- 这里放不需要缓存的router-view -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab';

  export default {
    name: 'App',
    components: {Tab}
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  ul, li {
    list-style: none;
  }
  a, a:focus {
    text-decoration: none;
  }
  .content {
    position: fixed;
    top: 34px;
    bottom: 49px;
    width: 100%;
    overflow: scroll;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .3s linear;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
