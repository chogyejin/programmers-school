<template>
  <div>
    <h1>난 Hello</h1>
    <div>{{ msg }}</div>
    <div>{{ reversedMsg }}</div>
    <button @click="fetchTodo">투두 가져오기</button>
    <!-- <div>{{ count }}</div> -->
    <div>{{ $store.state.count.count }}</div>
    <button @click="increaseCount">Hello의 증가 버튼</button>
  </div>
</template>

<script>
export default {
  computed: {
    msg() {
      // return this.$store.state.msg; // main.js에서 등록된 store
      return this.$store.state.message.msg; // message 모듈의 msg state
    },
    count() {
      // return this.$store.state.count; // main.js에서 등록된 store
      return this.$store.state.count.count; // count module
    },
    reversedMsg() {
      return this.$store.getters["message/reversedMsg"];
    },
  },
  methods: {
    increaseCount() {
      this.$store.commit("count/increaseCount");
    },
    fetchTodo() {
      this.$store.dispatch("message/fetchTodo");
    },
  },
};
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
