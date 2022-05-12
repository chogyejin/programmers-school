<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ name }}</h1>
    <h1>{{ hobby }}</h1>
    <Hello
      v-model:myName="name"
      v-model:myHobby="hobby"
      :message="msg"
      @click="msg += '??'"
      @reverse="reverse"
    />
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
      name: "이름",
      hobby: "취미",
    };
  },
  methods: {
    reverse() {
      this.msg = this.msg.split("").reverse().join("");
    },
  },
};
</script>
