<template>
  <div>
    <Hello />
    <!-- <button @click="increaseCount">카운트 증가!</button> -->
    <World />
    <button @click="fetchTodo">투두 가져오기</button>
  </div>
</template>

<script>
import Hello from "~/components/Hello";
import World from "./components/World.vue";

export default {
  components: { Hello, World },
  data() {
    return {
      msg: "안녕",
    };
  },
  methods: {
    increaseCount() {
      this.$store.commit("increaseCount"); // store의 mutation 쓸 때는 commit 이용
    },
    fetchTodo() {
      this.$store.dispatch("fetchTodo"); // action은 dispatch 이용
    },
  },
};
</script>
