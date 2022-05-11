<template>
  <Hello :="post" />
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
      post: {
        id: 1,
        title: "안녀여영",
        email: "chogyein@chogyein.com",
      },
    };
  },
};
</script>
