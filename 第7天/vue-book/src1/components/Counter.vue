<template>
  <div>
    计数器: {{$store.state.count}} {{$store.getters.oddEven}}<br/>
    <button @click="decrease">-</button>
    <button @click="increase">+</button>
  </div>
</template>

<script>
  import * as Types from '../store/mutations-types';

  export default {
    name: "Counter",
    methods: {
      increase() {
        // 提交add的mutation
        // 载荷payload
        this.$store.commit(Types.INCREASE, 2);
      },
      decrease() {
        this.$store.commit(Types.DECREASE);
      }
    }
  }
</script>

<style scoped>

</style>
