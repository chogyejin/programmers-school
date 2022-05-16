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
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    // 첫 인자 모듈에서 배열 안의 state 가져오겠다.
    // ...mapState(["전역state"]), // 전역의 state
    ...mapState("count", ["count"]),
    ...mapState("message", ["msg"]),
    ...mapGetters("message", ["reversedMsg"]),
  },
  methods: {
    ...mapMutations("count", ["increaseCount"]),
    ...mapActions("message", ["fetchTodo"]),
  },
};
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
