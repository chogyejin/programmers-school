<template>
  <div>
    <Btn />
    <button @click="reverse">뒤집기</button>
    <!-- message라는 이름으로 props 전달-->
    <!-- <Hello message="안녕 뷰!" /> -->
    <Hello :message="msg" :name="123" />
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
      msg: "안녕 뷰!!",
    };
  },
  methods: {
    reverse() {
      this.msg = this.msg.split("").reverse().join("");
    },
  },
};
</script>
