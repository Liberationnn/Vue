<template>
  <div id="app">
    <router-view></router-view>
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
  * {margin: 0;padding: 0;}
  ul, li {list-style: none;}
  a, a:focus {text-decoration: none;}
  .content {position: fixed;top: 34px;bottom: 49px;width: 100%;overflow: scroll;}
</style>
