<template>
  <div>
    <h1>{{ msg }}</h1>
    <Hello class="hello" style="font-size: 50px" @click="msg += '!'" />
  </div>
</template>

<script>
import Hello from "~/components/Hello";

export default {
  // App 컴포넌트에 지역 컴포넌트 등록
  components: {
    Hello,
  },
  data() {
    return {
      msg: "이잉",
    };
  },
};
</script>
