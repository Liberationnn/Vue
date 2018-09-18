<template>
  <div>
    {{msg}}
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        msg: 'hello'
      };
    },
  }
</script>

<style scoped>
  div {
    color: red;
  }
</style>