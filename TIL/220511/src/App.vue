<template>
  <div>
    <button @click="currentComponent = 'World'">World 컴포넌트로 바꾸기</button>
    <button @click="currentComponent = 'Hello'">Hello 컴포넌트로 바꾸기</button>
    <keep-alive>
      <component :is="currentComponent" />
    </keep-alive>
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
      currentComponent: "Hello",
    };
  },
};
</script>
